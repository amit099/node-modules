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
var Page = require('../../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../../base/values');  /* jshint ignore:line */

var YesterdayList;
var YesterdayPage;
var YesterdayInstance;

/* jshint ignore:start */
/**
 * Initialize the YesterdayList
 *
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
YesterdayList = function YesterdayList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function yesterday
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayContext}
   */
  /* jshint ignore:end */
  function YesterdayListInstance(sid) {
    return YesterdayListInstance.get(sid);
  }

  YesterdayListInstance._version = version;
  // Path Solution
  YesterdayListInstance._solution = {accountSid: accountSid};
  YesterdayListInstance._uri = `/Accounts/${accountSid}/Usage/Records/Yesterday.json`;
  /* jshint ignore:start */
  /**
   * Streams YesterdayInstance records from the API.
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
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayList#
   *
   * @param {object} [opts] - Options for request
   * @param {yesterday.category} [opts.category] -
   *          The usage category of the UsageRecord resources to read
   * @param {Date} [opts.startDate] -
   *          Only include usage that has occurred on or after this date
   * @param {Date} [opts.endDate] -
   *          Only include usage that occurred on or before this date
   * @param {boolean} [opts.includeSubaccounts] -
   *          Whether to include usage from the master account and all its subaccounts
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
  YesterdayListInstance.each = function each(opts, callback) {
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
   * Lists YesterdayInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayList#
   *
   * @param {object} [opts] - Options for request
   * @param {yesterday.category} [opts.category] -
   *          The usage category of the UsageRecord resources to read
   * @param {Date} [opts.startDate] -
   *          Only include usage that has occurred on or after this date
   * @param {Date} [opts.endDate] -
   *          Only include usage that occurred on or before this date
   * @param {boolean} [opts.includeSubaccounts] -
   *          Whether to include usage from the master account and all its subaccounts
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
  YesterdayListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of YesterdayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayList#
   *
   * @param {object} [opts] - Options for request
   * @param {yesterday.category} [opts.category] -
   *          The usage category of the UsageRecord resources to read
   * @param {Date} [opts.startDate] -
   *          Only include usage that has occurred on or after this date
   * @param {Date} [opts.endDate] -
   *          Only include usage that occurred on or before this date
   * @param {boolean} [opts.includeSubaccounts] -
   *          Whether to include usage from the master account and all its subaccounts
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  YesterdayListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Category': _.get(opts, 'category'),
      'StartDate': serialize.iso8601Date(_.get(opts, 'startDate')),
      'EndDate': serialize.iso8601Date(_.get(opts, 'endDate')),
      'IncludeSubaccounts': serialize.bool(_.get(opts, 'includeSubaccounts')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new YesterdayPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of YesterdayInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  YesterdayListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new YesterdayPage(this._version, payload, this._solution));
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
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  YesterdayListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  YesterdayListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return YesterdayListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the YesterdayPage
 *
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayPage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {YesterdaySolution} solution - Path solution
 *
 * @returns YesterdayPage
 */
/* jshint ignore:end */
YesterdayPage = function YesterdayPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(YesterdayPage.prototype, Page.prototype);
YesterdayPage.prototype.constructor = YesterdayPage;

/* jshint ignore:start */
/**
 * Build an instance of YesterdayInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayPage#
 *
 * @param {YesterdayPayload} payload - Payload response from the API
 *
 * @returns YesterdayInstance
 */
/* jshint ignore:end */
YesterdayPage.prototype.getInstance = function getInstance(payload) {
  return new YesterdayInstance(this._version, payload, this._solution.accountSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
YesterdayPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

YesterdayPage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the YesterdayContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayInstance
 *
 * @property {string} accountSid - The SID of the Account accrued the usage
 * @property {string} apiVersion - The API version used to create the resource
 * @property {string} asOf - Usage records up to date as of this timestamp
 * @property {yesterday.category} category - The category of usage
 * @property {string} count - The number of usage events
 * @property {string} countUnit - The units in which count is measured
 * @property {string} description -
 *          A plain-language description of the usage category
 * @property {Date} endDate -
 *          The last date for which usage is included in the UsageRecord
 * @property {number} price - The total price of the usage
 * @property {string} priceUnit - The currency in which `price` is measured
 * @property {Date} startDate -
 *          The first date for which usage is included in this UsageRecord
 * @property {string} subresourceUris -
 *          A list of related resources identified by their relative URIs
 * @property {string} uri -
 *          The URI of the resource, relative to `https://api.twilio.com`
 * @property {string} usage - The amount of usage
 * @property {string} usageUnit - The units in which usage is measured
 *
 * @param {V2010} version - Version of the resource
 * @param {YesterdayPayload} payload - The instance payload
 * @param {sid} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
YesterdayInstance = function YesterdayInstance(version, payload, accountSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.asOf = payload.as_of; // jshint ignore:line
  this.category = payload.category; // jshint ignore:line
  this.count = payload.count; // jshint ignore:line
  this.countUnit = payload.count_unit; // jshint ignore:line
  this.description = payload.description; // jshint ignore:line
  this.endDate = deserialize.iso8601Date(payload.end_date); // jshint ignore:line
  this.price = deserialize.decimal(payload.price); // jshint ignore:line
  this.priceUnit = payload.price_unit; // jshint ignore:line
  this.startDate = deserialize.iso8601Date(payload.start_date); // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.usage = payload.usage; // jshint ignore:line
  this.usageUnit = payload.usage_unit; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.RecordContext.YesterdayInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
YesterdayInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

YesterdayInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  YesterdayList: YesterdayList,
  YesterdayPage: YesterdayPage,
  YesterdayInstance: YesterdayInstance
};