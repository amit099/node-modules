/* global btoa */
(function (root) {
  let base64

  // This function's sole purpose is to help us ignore lone surrogates so that
  // malformed strings don't throw in the browser while being processed
  // permissively in Node.js. If we didn't care about parity, we could get rid
  // of it.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
  function getWholeCharAndI (str, i) {
    const code = str.charCodeAt(i)

    // This is a coherence check. `code` should never be `NaN`.
    /* istanbul ignore if */
    if (isNaN(code)) {
      throw new RangeError('Index ' + i + ' out of range for string "' + str + '"; please open an issue at https://github.com/Trott/slug/issues/new')
    }
    if (code < 0xD800 || code > 0xDFFF) {
      return [str.charAt(i), i] // Non-surrogate character, keeping 'i' the same
    }

    // High surrogate
    if (code >= 0xD800 && code <= 0xDBFF) {
      if (str.length <= (i + 1)) {
        // High surrogate without following low surrogate
        return [' ', i]
      }
      const next = str.charCodeAt(i + 1)
      if (next < 0xDC00 || next > 0xDFFF) {
        // High surrogate without following low surrogate
        return [' ', i]
      }
      return [str.charAt(i) + str.charAt(i + 1), i + 1]
    }

    // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
    if (i === 0) {
      // Low surrogate without preceding high surrogate
      return [' ', i]
    }

    const prev = str.charCodeAt(i - 1)

    /* istanbul ignore else */
    if (prev < 0xD800 || prev > 0xDBFF) {
      // Low surrogate without preceding high surrogate
      return [' ', i]
    }

    /* istanbul ignore next */
    throw new Error('String "' + str + '" reaches code believed to be unreachable; please open an issue at https://github.com/Trott/slug/issues/new')
  }

  if (typeof window !== 'undefined') {
    if (window.btoa) {
      base64 = function (input) {
        return btoa(unescape(encodeURIComponent(input)))
      }
    } else {
      // Polyfill for environments that don't have btoa or Buffer class (notably, React Native).
      // Based on https://github.com/davidchambers/Base64.js/blob/a121f75bb10c8dd5d557886c4b1069b31258d230/base64.js
      base64 = function (input) {
        const str = unescape(encodeURIComponent(input + ''))
        let output = ''
        for (
          let block, charCode, idx = 0, map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
          str.charAt(idx | 0) || (map = '=', idx % 1);
          output += map.charAt(63 & block >> 8 - idx % 1 * 8)
        ) {
          charCode = str.charCodeAt(idx += 3 / 4)
          // TODO: The if condition may be guaranteed to be false. Verify and
          // remove or otherwise write a test to cover it.
          /* istanbul ignore if */
          if (charCode > 0xFF) {
            throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
          }
          block = block << 8 | charCode
        }
        return output
      }
    }
  } else {
    base64 = function (input) {
      return Buffer.from(input).toString('base64')
    }
  }

  // IE11 doesn't have Object.assign(), hence this MDN-supplied polyfill.
  /* istanbul ignore if */
  if (typeof Object.assign !== 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
      value: function assign (target, varArgs) { // .length of function is 2
        'use strict'
        if (target === null || target === undefined) {
          throw new TypeError('Cannot convert undefined or null to object')
        }

        const to = Object(target)

        for (let index = 1; index < arguments.length; index++) {
          const nextSource = arguments[index]

          if (nextSource !== null && nextSource !== undefined) {
            // eslint-disable-next-line no-var
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey]
              }
            }
          }
        }
        return to
      },
      writable: true,
      configurable: true
    })
  }

  function slug (string, opts) {
    let result = slugify(string, opts)
    // If output is an empty string, try slug for base64 of string.
    if (result === '') {
      // Get rid of lone surrogates.
      let input = ''
      for (let i = 0; i < string.length; i++) {
        const charAndI = getWholeCharAndI(string, i)
        i = charAndI[1]
        input += charAndI[0]
      }
      result = slugify(base64(input), opts)
    }
    return result
  }

  const locales = {
    // http://www.eki.ee/wgrs/rom1_bg.pdf
    bg: { ??: 'Y', ??: 'y', X: 'H', x: 'h', ??: 'Ts', ??: 'ts', ??: 'Sht', ??: 'sht', ??: 'A', ??: 'a', ??: 'Y', ??: 'y' },
    // Need a reference URL for German, although this is pretty well-known.
    de: { ??: 'AE', ??: 'ae', ??: 'OE', ??: 'oe', ??: 'UE', ??: 'ue' },
    // Need a reference URL for Serbian.
    sr: { ??: 'dj', ??: 'DJ' },
    // https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/864314/ROMANIZATION_OF_UKRAINIAN.pdf
    uk: { ??: 'Y', ??: 'y', ??: 'Y', ??: 'y', ??: 'Ts', ??: 'ts', ??: 'Kh', ??: 'kh', ??: 'Shch', ??: 'shch', ??: 'H', ??: 'h' }
  }

  let defaultLocale = {}

  function slugify (string, opts) {
    if (typeof string !== 'string') {
      throw new Error('slug() requires a string argument, received ' + typeof string)
    }
    if (typeof opts === 'string') { opts = { replacement: opts } }
    opts = opts ? Object.assign({}, opts) : {}
    opts.mode = opts.mode || slug.defaults.mode
    const defaults = slug.defaults.modes[opts.mode]
    const keys = ['replacement', 'multicharmap', 'charmap', 'remove', 'lower', 'trim']
    for (let key, i = 0, l = keys.length; i < l; i++) {
      key = keys[i]
      opts[key] = (key in opts) ? opts[key] : defaults[key]
    }
    const localeMap = locales[opts.locale] || defaultLocale

    let lengths = []
    // "let" instead of "const" in next line is for IE11 compatibilty
    for (let key in opts.multicharmap) { // eslint-disable-line prefer-const
      if (!Object.prototype.hasOwnProperty.call(opts.multicharmap, key)) { continue }

      const len = key.length
      if (lengths.indexOf(len) === -1) { lengths.push(len) }
    }

    // We want to match the longest string if there are multiple matches, so
    // sort lengths in descending order.
    lengths = lengths.sort(function (a, b) { return b - a })

    const disallowedChars = opts.mode === 'rfc3986' ? /[^\w\s\-.~]/ : /[^A-Za-z0-9\s]/

    let result = ''
    for (let char, i = 0, l = string.length; i < l; i++) {
      char = string[i]
      let matchedMultichar = false
      for (let j = 0; j < lengths.length; j++) {
        const len = lengths[j]
        const str = string.substr(i, len)
        if (opts.multicharmap[str]) {
          i += len - 1
          char = opts.multicharmap[str]
          matchedMultichar = true
          break
        }
      }
      if (!matchedMultichar) {
        if (localeMap[char]) {
          char = localeMap[char]
        } else if (opts.charmap[char]) {
          char = opts.charmap[char].replace(opts.replacement, ' ')
        } else if (char.includes(opts.replacement)) {
          // preserve the replacement character in case it is excluded by disallowedChars
          char = char.replace(opts.replacement, ' ')
        } else {
          char = char.replace(disallowedChars, '')
        }
      }
      result += char
    }

    if (opts.remove) {
      result = result.replace(opts.remove, '')
    }
    if (opts.trim) {
      result = result.trim()
    }
    result = result.replace(/\s+/g, opts.replacement) // convert spaces
    if (opts.lower) {
      result = result.toLowerCase()
    }
    return result
  }

  const initialMulticharmap = {
    // multibyte devanagari characters (hindi, sanskrit, etc.)
    ??????: 'Fi',
    ??????: 'Ghi',
    ??????: 'Khi',
    ??????: 'Qi',
    ??????: 'ugDha',
    ??????: 'ugDhha',
    ??????: 'Yi',
    ??????: 'Za',
    // hebrew
    // Refs: http://www.eki.ee/wgrs/rom1_he.pdf
    // Refs: https://en.wikipedia.org/wiki/Niqqud
    ??????: 'i',
    ????: 'e',
    ??????: 'e',
    ????: 'e',
    ????: 'a',
    ????: 'a',
    ????: 'o',
    ????: 'o',
    ????: 'u',
    ????: 'u',
    ????: 'b',
    ????: 'k',
    ????: 'k',
    ????: 'p',
    ????: 'sh',
    ????: 's',
    ????: 'e',
    ????: 'e',
    ????: 'a',
    ????: 'o',
    ????: 'i'
  }

  // https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js
  const initialCharmap = {
    // latin
    ??: 'A',
    ??: 'A',
    ??: 'A',
    ??: 'A',
    ??: 'A',
    ??: 'A',
    ??: 'AE',
    ??: 'C',
    ??: 'E',
    ??: 'E',
    ??: 'E',
    ??: 'E',
    ??: 'I',
    ??: 'I',
    ??: 'I',
    ??: 'I',
    ??: 'D',
    ??: 'N',
    ??: 'O',
    ??: 'O',
    ??: 'O',
    ??: 'O',
    ??: 'O',
    ??: 'O',
    ??: 'O',
    ??: 'O',
    ??: 'U',
    ??: 'U',
    ??: 'U',
    ??: 'U',
    ??: 'U',
    ??: 'Y',
    ??: 'TH',
    ??: 'ss',
    ??: 'a',
    ??: 'a',
    ??: 'a',
    ??: 'a',
    ??: 'a',
    ??: 'a',
    ??: 'ae',
    ??: 'c',
    ??: 'e',
    ??: 'e',
    ??: 'e',
    ??: 'e',
    ??: 'i',
    ??: 'i',
    ??: 'i',
    ??: 'i',
    ??: 'd',
    ??: 'n',
    ??: 'o',
    ??: 'o',
    ??: 'o',
    ??: 'o',
    ??: 'o',
    ??: 'o',
    ??: 'o',
    ??: 'o',
    ??: 'OE',
    ??: 'oe',
    ??: 'u',
    ??: 'u',
    ??: 'u',
    ??: 'u',
    ??: 'u',
    ??: 'y',
    ??: 'th',
    ??: 'y',
    ???: 'SS',
    // greek
    ??: 'a',
    ??: 'b',
    ??: 'g',
    ??: 'd',
    ??: 'e',
    ??: 'z',
    ??: 'h',
    ??: '8',
    ??: 'i',
    ??: 'k',
    ??: 'l',
    ??: 'm',
    ??: 'n',
    ??: '3',
    ??: 'o',
    ??: 'p',
    ??: 'r',
    ??: 's',
    ??: 't',
    ??: 'y',
    ??: 'f',
    ??: 'x',
    ??: 'ps',
    ??: 'w',
    ??: 'a',
    ??: 'e',
    ??: 'i',
    ??: 'o',
    ??: 'y',
    ??: 'h',
    ??: 'w',
    ??: 's',
    ??: 'i',
    ??: 'y',
    ??: 'y',
    ??: 'i',
    ??: 'A',
    ??: 'B',
    ??: 'G',
    ??: 'D',
    ??: 'E',
    ??: 'Z',
    ??: 'H',
    ??: '8',
    ??: 'I',
    ??: 'K',
    ??: 'L',
    ??: 'M',
    ??: 'N',
    ??: '3',
    ??: 'O',
    ??: 'P',
    ??: 'R',
    ??: 'S',
    ??: 'T',
    ??: 'Y',
    ??: 'F',
    ??: 'X',
    ??: 'PS',
    ??: 'W',
    ??: 'A',
    ??: 'E',
    ??: 'I',
    ??: 'O',
    ??: 'Y',
    ??: 'H',
    ??: 'W',
    ??: 'I',
    ??: 'Y',
    // turkish
    ??: 's',
    ??: 'S',
    ??: 'i',
    ??: 'I',
    ??: 'g',
    ??: 'G',
    // russian
    ??: 'a',
    ??: 'b',
    ??: 'v',
    ??: 'g',
    ??: 'd',
    ??: 'e',
    ??: 'yo',
    ??: 'zh',
    ??: 'z',
    ??: 'i',
    ??: 'j',
    ??: 'k',
    ??: 'l',
    ??: 'm',
    ??: 'n',
    ??: 'o',
    ??: 'p',
    ??: 'r',
    ??: 's',
    ??: 't',
    ??: 'u',
    ??: 'f',
    ??: 'h',
    ??: 'c',
    ??: 'ch',
    ??: 'sh',
    ??: 'sh',
    ??: 'u',
    ??: 'y',
    ??: '',
    ??: 'e',
    ??: 'yu',
    ??: 'ya',
    ??: 'A',
    ??: 'B',
    ??: 'V',
    ??: 'G',
    ??: 'D',
    ??: 'E',
    ??: 'Yo',
    ??: 'Zh',
    ??: 'Z',
    ??: 'I',
    ??: 'J',
    ??: 'K',
    ??: 'L',
    ??: 'M',
    ??: 'N',
    ??: 'O',
    ??: 'P',
    ??: 'R',
    ??: 'S',
    ??: 'T',
    ??: 'U',
    ??: 'F',
    ??: 'H',
    ??: 'C',
    ??: 'Ch',
    ??: 'Sh',
    ??: 'Sh',
    ??: 'U',
    ??: 'Y',
    ??: '',
    ??: 'E',
    ??: 'Yu',
    ??: 'Ya',
    // ukranian
    ??: 'Ye',
    ??: 'I',
    ??: 'Yi',
    ??: 'G',
    ??: 'ye',
    ??: 'i',
    ??: 'yi',
    ??: 'g',
    // czech
    ??: 'c',
    ??: 'd',
    ??: 'e',
    ??: 'n',
    ??: 'r',
    ??: 's',
    ??: 't',
    ??: 'u',
    ??: 'z',
    ??: 'C',
    ??: 'D',
    ??: 'E',
    ??: 'N',
    ??: 'R',
    ??: 'S',
    ??: 'T',
    ??: 'U',
    ??: 'Z',
    // slovak
    ??: 'l',
    ??: 'l',
    ??: 'r',
    ??: 'L',
    ??: 'L',
    ??: 'R',
    // polish
    ??: 'a',
    ??: 'c',
    ??: 'e',
    ??: 'l',
    ??: 'n',
    ??: 's',
    ??: 'z',
    ??: 'z',
    ??: 'A',
    ??: 'C',
    ??: 'E',
    ??: 'L',
    ??: 'N',
    ??: 'S',
    ??: 'Z',
    ??: 'Z',
    // latvian
    ??: 'a',
    ??: 'e',
    ??: 'g',
    ??: 'i',
    ??: 'k',
    ??: 'l',
    ??: 'n',
    ??: 'u',
    ??: 'A',
    ??: 'E',
    ??: 'G',
    ??: 'I',
    ??: 'K',
    ??: 'L',
    ??: 'N',
    ??: 'U',
    // arabic
    ??: 'a',
    ??: 'i',
    ??: 'b',
    ??: 't',
    ??: 'th',
    ??: 'g',
    ??: 'h',
    ??: 'kh',
    ??: 'd',
    ??: 'th',
    ??: 'r',
    ??: 'z',
    ??: 's',
    ??: 'sh',
    ??: 's',
    ??: 'd',
    ??: 't',
    ??: 'th',
    ??: 'aa',
    ??: 'gh',
    ??: 'f',
    ??: 'k',
    ??: 'k',
    ??: 'l',
    ??: 'm',
    ??: 'n',
    ??: 'h',
    ??: 'o',
    ??: 'y',
    ??: 'aa',
    ??: 'a',
    // farsi
    ??: 'a',
    ??: 'a',
    ??: 'p',
    ??: 'zh',
    ??: 'g',
    ??: 'ch',
    ??: 'k',
    ??: 'i',
    // lithuanian
    ??: 'e',
    ??: 'i',
    ??: 'u',
    ??: 'E',
    ??: 'I',
    ??: 'U',
    // romanian
    ??: 't',
    ??: 'T',
    ??: 't',
    ??: 'T',
    ??: 's',
    ??: 'S',
    ??: 'a',
    ??: 'A',
    // vietnamese
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'A',
    ???: 'E',
    ???: 'E',
    ???: 'E',
    ???: 'E',
    ???: 'E',
    ???: 'E',
    ???: 'E',
    ???: 'E',
    ???: 'I',
    ???: 'I',
    ??: 'I',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ??: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'O',
    ???: 'U',
    ???: 'U',
    ??: 'U',
    ??: 'U',
    ???: 'U',
    ???: 'U',
    ???: 'U',
    ???: 'U',
    ???: 'U',
    ???: 'Y',
    ???: 'Y',
    ???: 'Y',
    ???: 'Y',
    ??: 'D',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'a',
    ???: 'e',
    ???: 'e',
    ???: 'e',
    ???: 'e',
    ???: 'e',
    ???: 'e',
    ???: 'e',
    ???: 'e',
    ???: 'i',
    ???: 'i',
    ??: 'i',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ??: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'o',
    ???: 'u',
    ???: 'u',
    ??: 'u',
    ??: 'u',
    ???: 'u',
    ???: 'u',
    ???: 'u',
    ???: 'u',
    ???: 'u',
    ???: 'y',
    ???: 'y',
    ???: 'y',
    ???: 'y',
    ??: 'd',
    // kazakh
    ??: 'AE',
    ??: 'ae',
    ??: 'GH',
    ??: 'gh',
    ??: 'KH',
    ??: 'kh',
    ??: 'NG',
    ??: 'ng',
    ??: 'UE',
    ??: 'ue',
    ??: 'U',
    ??: 'u',
    ??: 'H',
    ??: 'h',
    ??: 'OE',
    ??: 'oe',
    // serbian
    ??: 'dj',
    ??: 'j',
    ??: 'lj',
    ??: 'nj',
    ??: 'c',
    ??: 'dz',
    ??: 'Dj',
    ??: 'j',
    ??: 'Lj',
    ??: 'Nj',
    ??: 'C',
    ??: 'Dz',
    ??: 'nj',
    ??: 'lj',
    ??: 'NJ',
    ??: 'LJ',
    // hindi
    ???: 'a',
    ???: 'aa',
    ???: 'e',
    ???: 'ii',
    ???: 'ei',
    ???: 'ae',
    ???: 'ai',
    ???: 'i',
    ???: 'o',
    ???: 'oi',
    ???: 'oii',
    ???: 'uu',
    ???: 'ou',
    ???: 'u',
    ???: 'B',
    ???: 'Bha',
    ???: 'Ca',
    ???: 'Chha',
    ???: 'Da',
    ???: 'Dha',
    ???: 'Fa',
    ???: 'Ga',
    ???: 'Gha',
    ??????: 'Ghi',
    ???: 'Ha',
    ???: 'Ja',
    ???: 'Jha',
    ???: 'Ka',
    ???: 'Kha',
    ??????: 'Khi',
    ???: 'L',
    ???: 'Li',
    ???: 'Li',
    ???: 'Lii',
    ???: 'Lii',
    ???: 'Ma',
    ???: 'Na',
    ???: 'Na',
    ???: 'Nia',
    ???: 'Nae',
    ???: 'Ni',
    ???: 'oms',
    ???: 'Pa',
    ??????: 'Qi',
    ???: 'Ra',
    ???: 'Ri',
    ???: 'Ri',
    ???: 'Ri',
    ???: 'Sa',
    ???: 'Sha',
    ???: 'Shha',
    ???: 'Ta',
    ???: 'Ta',
    ???: 'Tha',
    ???: 'Tha',
    ???: 'Tha',
    ???: 'Thha',
    ??????: 'ugDha',
    ??????: 'ugDhha',
    ???: 'Va',
    ???: 'Ya',
    ??????: 'Yi',
    ??????: 'Za',
    // azerbaijani
    ??: 'e',
    ??: 'E',
    // georgian
    ???: 'a',
    ???: 'b',
    ???: 'g',
    ???: 'd',
    ???: 'e',
    ???: 'v',
    ???: 'z',
    ???: 't',
    ???: 'i',
    ???: 'k',
    ???: 'l',
    ???: 'm',
    ???: 'n',
    ???: 'o',
    ???: 'p',
    ???: 'zh',
    ???: 'r',
    ???: 's',
    ???: 't',
    ???: 'u',
    ???: 'p',
    ???: 'k',
    ???: 'gh',
    ???: 'q',
    ???: 'sh',
    ???: 'ch',
    ???: 'ts',
    ???: 'dz',
    ???: 'ts',
    ???: 'ch',
    ???: 'kh',
    ???: 'j',
    ???: 'h',
    // hebrew
    ??: 'v',
    ????: 'g',
    ??: 'g',
    ??: 'd',
    ????: 'd',
    ??: 'h',
    ??: 'v',
    ??: 'z',
    ??: 'h',
    ??: 't',
    ??: 'y',
    ??: 'kh',
    ??: 'kh',
    ??: 'l',
    ??: 'm',
    ??: 'm',
    ??: 'n',
    ??: 'n',
    ??: 's',
    ??: 'f',
    ??: 'f',
    ??: 'ts',
    ??: 'ts',
    ??: 'k',
    ??: 'r',
    ????: 't',
    ??: 't'
  }

  slug.charmap = Object.assign({}, initialCharmap)
  slug.multicharmap = Object.assign({}, initialMulticharmap)
  slug.defaults = {
    charmap: slug.charmap,
    mode: 'pretty',
    modes: {
      rfc3986: {
        replacement: '-',
        remove: null,
        lower: true,
        charmap: slug.charmap,
        multicharmap: slug.multicharmap,
        trim: true
      },
      pretty: {
        replacement: '-',
        remove: null,
        lower: true,
        charmap: slug.charmap,
        multicharmap: slug.multicharmap,
        trim: true
      }
    },
    multicharmap: slug.multicharmap
  }

  slug.reset = function () {
    slug.defaults.modes.rfc3986.charmap = slug.defaults.modes.pretty.charmap = slug.charmap = slug.defaults.charmap = Object.assign({}, initialCharmap)
    slug.defaults.modes.rfc3986.multicharmap = slug.defaults.modes.pretty.multicharmap = slug.multicharmap = slug.defaults.multicharmap = Object.assign({}, initialMulticharmap)
    defaultLocale = ''
  }

  slug.extend = function (customMap) {
    const keys = Object.keys(customMap)
    const multi = {}
    const single = {}
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].length > 1) {
        multi[keys[i]] = customMap[keys[i]]
      } else {
        single[keys[i]] = customMap[keys[i]]
      }
    }
    Object.assign(slug.charmap, single)
    Object.assign(slug.multicharmap, multi)
  }

  slug.setLocale = function (locale) {
    defaultLocale = locales[locale] || {}
  }

  /* global define */
  // Be compatible with different module systems

  if (typeof define !== 'undefined' && define.amd) { // AMD
    define([], function () { return slug })
  } else if (typeof module !== 'undefined' && module.exports) { // CommonJS
    module.exports = slug
  } else { // Script tag
    root.slug = slug
  }
}(this))
