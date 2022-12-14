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
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ChannelList;
var ChannelPage;
var ChannelInstance;

/* jshint ignore:start */
/**
 * Initialize the ChannelList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelList
 *
 * @param {Twilio.Preview.TrustedComms} version - Version of the resource
 * @param {string} brandedChannelSid - Branded Channel Sid.
 */
/* jshint ignore:end */
ChannelList = function ChannelList(version, brandedChannelSid) {
  /* jshint ignore:start */
  /**
   * @function channels
   * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelContext}
   */
  /* jshint ignore:end */
  function ChannelListInstance(sid) {
    return ChannelListInstance.get(sid);
  }

  ChannelListInstance._version = version;
  // Path Solution
  ChannelListInstance._solution = {brandedChannelSid: brandedChannelSid};
  ChannelListInstance._uri = `/BrandedChannels/${brandedChannelSid}/Channels`;
  /* jshint ignore:start */
  /**
   * create a ChannelInstance
   *
   * @function create
   * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.phoneNumberSid - Phone Number Sid to be branded.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ChannelInstance
   */
  /* jshint ignore:end */
  ChannelListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts['phoneNumberSid'])) {
      throw new Error('Required parameter "opts[\'phoneNumberSid\']" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'PhoneNumberSid': _.get(opts, 'phoneNumberSid')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ChannelInstance(this._version, payload));
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
   * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ChannelListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ChannelListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return ChannelListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ChannelPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelPage
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ChannelSolution} solution - Path solution
 *
 * @returns ChannelPage
 */
/* jshint ignore:end */
ChannelPage = function ChannelPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ChannelPage.prototype, Page.prototype);
ChannelPage.prototype.constructor = ChannelPage;

/* jshint ignore:start */
/**
 * Build an instance of ChannelInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelPage#
 *
 * @param {ChannelPayload} payload - Payload response from the API
 *
 * @returns ChannelInstance
 */
/* jshint ignore:end */
ChannelPage.prototype.getInstance = function getInstance(payload) {
  return new ChannelInstance(this._version, payload, this._solution.brandedChannelSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ChannelPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ChannelPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ChannelContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelInstance
 *
 * @property {string} accountSid - Account Sid.
 * @property {string} businessSid - Business Sid.
 * @property {string} brandSid - Brand Sid.
 * @property {string} brandedChannelSid - Branded Channel Sid.
 * @property {string} phoneNumberSid - Phone Number Sid to be branded.
 * @property {string} phoneNumber - Twilio number to assign to the Branded Channel
 * @property {string} url - The URL of this resource.
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {ChannelPayload} payload - The instance payload
 * @param {sid} brandedChannelSid - Branded Channel Sid.
 */
/* jshint ignore:end */
ChannelInstance = function ChannelInstance(version, payload, brandedChannelSid)
                                            {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.businessSid = payload.business_sid; // jshint ignore:line
  this.brandSid = payload.brand_sid; // jshint ignore:line
  this.brandedChannelSid = payload.branded_channel_sid; // jshint ignore:line
  this.phoneNumberSid = payload.phone_number_sid; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {brandedChannelSid: brandedChannelSid, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ChannelInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ChannelInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ChannelList: ChannelList,
  ChannelPage: ChannelPage,
  ChannelInstance: ChannelInstance
};
