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
var util = require('util');  /* jshint ignore:line */
var CountryList = require('./phoneNumber/country').CountryList;
var Page = require('../../../base/Page');  /* jshint ignore:line */

var PhoneNumberList;
var PhoneNumberPage;
var PhoneNumberInstance;

/* jshint ignore:start */
/**
 * Initialize the PhoneNumberList
 *
 * @constructor Twilio.Pricing.V1.PhoneNumberList
 *
 * @param {Twilio.Pricing.V1} version - Version of the resource
 */
/* jshint ignore:end */
PhoneNumberList = function PhoneNumberList(version) {
  /* jshint ignore:start */
  /**
   * @function phoneNumbers
   * @memberof Twilio.Pricing.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V1.PhoneNumberContext}
   */
  /* jshint ignore:end */
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};

  // Components
  PhoneNumberListInstance._countries = undefined;

  Object.defineProperty(PhoneNumberListInstance,
    'countries', {
      get: function countries() {
        if (!this._countries) {
          this._countries = new CountryList(this._version);
        }

        return this._countries;
      }
  });

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Pricing.V1.PhoneNumberList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  PhoneNumberListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return PhoneNumberListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberPage
 *
 * @constructor Twilio.Pricing.V1.PhoneNumberPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {PhoneNumberSolution} solution - Path solution
 *
 * @returns PhoneNumberPage
 */
/* jshint ignore:end */
PhoneNumberPage = function PhoneNumberPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(PhoneNumberPage.prototype, Page.prototype);
PhoneNumberPage.prototype.constructor = PhoneNumberPage;

/* jshint ignore:start */
/**
 * Build an instance of PhoneNumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Pricing.V1.PhoneNumberPage#
 *
 * @param {PhoneNumberPayload} payload - Payload response from the API
 *
 * @returns PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new PhoneNumberInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Pricing.V1.PhoneNumberPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberContext
 *
 * @constructor Twilio.Pricing.V1.PhoneNumberInstance
 *
 * @property {string} name - The name
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {V1} version - Version of the resource
 * @param {PhoneNumberPayload} payload - The instance payload
 */
/* jshint ignore:end */
PhoneNumberInstance = function PhoneNumberInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.name = payload.name; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Pricing.V1.PhoneNumberInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberPage: PhoneNumberPage,
  PhoneNumberInstance: PhoneNumberInstance
};
