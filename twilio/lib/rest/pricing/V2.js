'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var CountryList = require('./v2/country').CountryList;
var NumberList = require('./v2/number').NumberList;
var Version = require('../../base/Version');  /* jshint ignore:line */
var VoiceList = require('./v2/voice').VoiceList;


/* jshint ignore:start */
/**
 * Initialize the V2 version of Pricing
 *
 * @constructor Twilio.Pricing.V2
 *
 * @property {Twilio.Pricing.V2.CountryList} countries - countries resource
 * @property {Twilio.Pricing.V2.NumberList} numbers - numbers resource
 * @property {Twilio.Pricing.V2.VoiceList} voice - voice resource
 *
 * @param {Twilio.Pricing} domain - The twilio domain
 */
/* jshint ignore:end */
function V2(domain) {
  Version.prototype.constructor.call(this, domain, 'v2');

  // Resources
  this._countries = undefined;
  this._numbers = undefined;
  this._voice = undefined;
}

_.extend(V2.prototype, Version.prototype);
V2.prototype.constructor = V2;

Object.defineProperty(V2.prototype,
  'countries', {
    get: function() {
      this._countries = this._countries || new CountryList(this);
      return this._countries;
    }
});

Object.defineProperty(V2.prototype,
  'numbers', {
    get: function() {
      this._numbers = this._numbers || new NumberList(this);
      return this._numbers;
    }
});

Object.defineProperty(V2.prototype,
  'voice', {
    get: function() {
      this._voice = this._voice || new VoiceList(this);
      return this._voice;
    }
});

module.exports = V2;
