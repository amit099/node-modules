'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var LocalList;
var LocalPage;
var LocalInstance;

/* jshint ignore:start */
/**
 * Initialize the LocalList
 *
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 * @param {string} countryCode - The ISO-3166-1 country code of the country.
 */
/* jshint ignore:end */
LocalList = function LocalList(version, accountSid, countryCode) {
  /* jshint ignore:start */
  /**
   * @function local
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalContext}
   */
  /* jshint ignore:end */
  function LocalListInstance(sid) {
    return LocalListInstance.get(sid);
  }

  LocalListInstance._version = version;
  // Path Solution
  LocalListInstance._solution = {accountSid: accountSid, countryCode: countryCode};
  LocalListInstance._uri = `/Accounts/${accountSid}/AvailablePhoneNumbers/${countryCode}/Local.json`;
  /* jshint ignore:start */
  /**
   * Streams LocalInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.areaCode] - The area code of the phone numbers to read
   * @param {string} [opts.contains] - The pattern on which to match phone numbers
   * @param {boolean} [opts.smsEnabled] -
   *          Whether the phone numbers can receive text messages
   * @param {boolean} [opts.mmsEnabled] -
   *          Whether the phone numbers can receive MMS messages
   * @param {boolean} [opts.voiceEnabled] -
   *          Whether the phone numbers can receive calls.
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          Whether to exclude phone numbers that require an Address
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          Whether to exclude phone numbers that require a local address
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          Whether to exclude phone numbers that require a foreign address
   * @param {boolean} [opts.beta] -
   *          Whether to read phone numbers new to the Twilio platform
   * @param {string} [opts.nearNumber] -
   *          Given a phone number, find a geographically close number within distance miles. (US/Canada only)
   * @param {string} [opts.nearLatLong] -
   *          Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
   * @param {number} [opts.distance] -
   *          The search radius, in miles, for a near_ query. (US/Canada only)
   * @param {string} [opts.inPostalCode] -
   *          Limit results to a particular postal code. (US/Canada only)
   * @param {string} [opts.inRegion] -
   *          Limit results to a particular region. (US/Canada only)
   * @param {string} [opts.inRateCenter] -
   *          Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
   * @param {string} [opts.inLata] -
   *          Limit results to a specific local access and transport area. (US/Canada only)
   * @param {string} [opts.inLocality] - Limit results to a particular locality
   * @param {boolean} [opts.faxEnabled] - Whether the phone numbers can receive faxes
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  LocalListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        } else {
          onComplete();
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists LocalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.areaCode] - The area code of the phone numbers to read
   * @param {string} [opts.contains] - The pattern on which to match phone numbers
   * @param {boolean} [opts.smsEnabled] -
   *          Whether the phone numbers can receive text messages
   * @param {boolean} [opts.mmsEnabled] -
   *          Whether the phone numbers can receive MMS messages
   * @param {boolean} [opts.voiceEnabled] -
   *          Whether the phone numbers can receive calls.
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          Whether to exclude phone numbers that require an Address
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          Whether to exclude phone numbers that require a local address
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          Whether to exclude phone numbers that require a foreign address
   * @param {boolean} [opts.beta] -
   *          Whether to read phone numbers new to the Twilio platform
   * @param {string} [opts.nearNumber] -
   *          Given a phone number, find a geographically close number within distance miles. (US/Canada only)
   * @param {string} [opts.nearLatLong] -
   *          Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
   * @param {number} [opts.distance] -
   *          The search radius, in miles, for a near_ query. (US/Canada only)
   * @param {string} [opts.inPostalCode] -
   *          Limit results to a particular postal code. (US/Canada only)
   * @param {string} [opts.inRegion] -
   *          Limit results to a particular region. (US/Canada only)
   * @param {string} [opts.inRateCenter] -
   *          Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
   * @param {string} [opts.inLata] -
   *          Limit results to a specific local access and transport area. (US/Canada only)
   * @param {string} [opts.inLocality] - Limit results to a particular locality
   * @param {boolean} [opts.faxEnabled] - Whether the phone numbers can receive faxes
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  LocalListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of LocalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.areaCode] - The area code of the phone numbers to read
   * @param {string} [opts.contains] - The pattern on which to match phone numbers
   * @param {boolean} [opts.smsEnabled] -
   *          Whether the phone numbers can receive text messages
   * @param {boolean} [opts.mmsEnabled] -
   *          Whether the phone numbers can receive MMS messages
   * @param {boolean} [opts.voiceEnabled] -
   *          Whether the phone numbers can receive calls.
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          Whether to exclude phone numbers that require an Address
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          Whether to exclude phone numbers that require a local address
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          Whether to exclude phone numbers that require a foreign address
   * @param {boolean} [opts.beta] -
   *          Whether to read phone numbers new to the Twilio platform
   * @param {string} [opts.nearNumber] -
   *          Given a phone number, find a geographically close number within distance miles. (US/Canada only)
   * @param {string} [opts.nearLatLong] -
   *          Given a latitude/longitude pair lat,long find geographically close numbers within distance miles. (US/Canada only)
   * @param {number} [opts.distance] -
   *          The search radius, in miles, for a near_ query. (US/Canada only)
   * @param {string} [opts.inPostalCode] -
   *          Limit results to a particular postal code. (US/Canada only)
   * @param {string} [opts.inRegion] -
   *          Limit results to a particular region. (US/Canada only)
   * @param {string} [opts.inRateCenter] -
   *          Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
   * @param {string} [opts.inLata] -
   *          Limit results to a specific local access and transport area. (US/Canada only)
   * @param {string} [opts.inLocality] - Limit results to a particular locality
   * @param {boolean} [opts.faxEnabled] - Whether the phone numbers can receive faxes
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  LocalListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'AreaCode': _.get(opts, 'areaCode'),
      'Contains': _.get(opts, 'contains'),
      'SmsEnabled': serialize.bool(_.get(opts, 'smsEnabled')),
      'MmsEnabled': serialize.bool(_.get(opts, 'mmsEnabled')),
      'VoiceEnabled': serialize.bool(_.get(opts, 'voiceEnabled')),
      'ExcludeAllAddressRequired': serialize.bool(_.get(opts, 'excludeAllAddressRequired')),
      'ExcludeLocalAddressRequired': serialize.bool(_.get(opts, 'excludeLocalAddressRequired')),
      'ExcludeForeignAddressRequired': serialize.bool(_.get(opts, 'excludeForeignAddressRequired')),
      'Beta': serialize.bool(_.get(opts, 'beta')),
      'NearNumber': _.get(opts, 'nearNumber'),
      'NearLatLong': _.get(opts, 'nearLatLong'),
      'Distance': _.get(opts, 'distance'),
      'InPostalCode': _.get(opts, 'inPostalCode'),
      'InRegion': _.get(opts, 'inRegion'),
      'InRateCenter': _.get(opts, 'inRateCenter'),
      'InLata': _.get(opts, 'inLata'),
      'InLocality': _.get(opts, 'inLocality'),
      'FaxEnabled': serialize.bool(_.get(opts, 'faxEnabled')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new LocalPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of LocalInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  LocalListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new LocalPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  LocalListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  LocalListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return LocalListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the LocalPage
 *
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalPage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {LocalSolution} solution - Path solution
 *
 * @returns LocalPage
 */
/* jshint ignore:end */
LocalPage = function LocalPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(LocalPage.prototype, Page.prototype);
LocalPage.prototype.constructor = LocalPage;

/* jshint ignore:start */
/**
 * Build an instance of LocalInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalPage#
 *
 * @param {LocalPayload} payload - Payload response from the API
 *
 * @returns LocalInstance
 */
/* jshint ignore:end */
LocalPage.prototype.getInstance = function getInstance(payload) {
  return new LocalInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.countryCode
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
LocalPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

LocalPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the LocalContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalInstance
 *
 * @property {string} friendlyName - A formatted version of the phone number
 * @property {string} phoneNumber - The phone number in E.164 format
 * @property {string} lata - The LATA of this phone number
 * @property {string} locality -
 *          The locality or city of this phone number's location
 * @property {string} rateCenter - The rate center of this phone number
 * @property {number} latitude - The latitude of this phone number's location
 * @property {number} longitude - The longitude of this phone number's location
 * @property {string} region -
 *          The two-letter state or province abbreviation of this phone number's location
 * @property {string} postalCode -
 *          The postal or ZIP code of this phone number's location
 * @property {string} isoCountry - The ISO country code of this phone number
 * @property {string} addressRequirements -
 *          The type of Address resource the phone number requires
 * @property {boolean} beta -
 *          Whether the phone number is new to the Twilio platform
 * @property {PhoneNumberCapabilities} capabilities -
 *          Whether a phone number can receive calls or messages
 *
 * @param {V2010} version - Version of the resource
 * @param {LocalPayload} payload - The instance payload
 * @param {account_sid} accountSid - The account_sid
 * @param {iso_country_code} countryCode -
 *          The ISO-3166-1 country code of the country.
 */
/* jshint ignore:end */
LocalInstance = function LocalInstance(version, payload, accountSid,
                                        countryCode) {
  this._version = version;

  // Marshaled Properties
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.lata = payload.lata; // jshint ignore:line
  this.locality = payload.locality; // jshint ignore:line
  this.rateCenter = payload.rate_center; // jshint ignore:line
  this.latitude = deserialize.decimal(payload.latitude); // jshint ignore:line
  this.longitude = deserialize.decimal(payload.longitude); // jshint ignore:line
  this.region = payload.region; // jshint ignore:line
  this.postalCode = payload.postal_code; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.addressRequirements = payload.address_requirements; // jshint ignore:line
  this.beta = payload.beta; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, countryCode: countryCode, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
LocalInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

LocalInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  LocalList: LocalList,
  LocalPage: LocalPage,
  LocalInstance: LocalInstance
};