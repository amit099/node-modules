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
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var WebhookList;
var WebhookPage;
var WebhookInstance;
var WebhookContext;

/* jshint ignore:start */
/**
 * Initialize the WebhookList
 *
 * @constructor Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookList
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {string} chatServiceSid - The unique string that identifies the resource
 */
/* jshint ignore:end */
WebhookList = function WebhookList(version, chatServiceSid) {
  /* jshint ignore:start */
  /**
   * @function webhooks
   * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookContext}
   */
  /* jshint ignore:end */
  function WebhookListInstance(sid) {
    return WebhookListInstance.get(sid);
  }

  WebhookListInstance._version = version;
  // Path Solution
  WebhookListInstance._solution = {chatServiceSid: chatServiceSid};
  /* jshint ignore:start */
  /**
   * Constructs a webhook
   *
   * @function get
   * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookList#
   *
   * @returns {Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookContext}
   */
  /* jshint ignore:end */
  WebhookListInstance.get = function get() {
    return new WebhookContext(this._version, this._solution.chatServiceSid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  WebhookListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  WebhookListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return WebhookListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the WebhookPage
 *
 * @constructor Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {WebhookSolution} solution - Path solution
 *
 * @returns WebhookPage
 */
/* jshint ignore:end */
WebhookPage = function WebhookPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WebhookPage.prototype, Page.prototype);
WebhookPage.prototype.constructor = WebhookPage;

/* jshint ignore:start */
/**
 * Build an instance of WebhookInstance
 *
 * @function getInstance
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookPage#
 *
 * @param {WebhookPayload} payload - Payload response from the API
 *
 * @returns WebhookInstance
 */
/* jshint ignore:end */
WebhookPage.prototype.getInstance = function getInstance(payload) {
  return new WebhookInstance(this._version, payload, this._solution.chatServiceSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
WebhookPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

WebhookPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the WebhookContext
 *
 * @constructor Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookInstance
 *
 * @property {string} accountSid -
 *          The unique ID of the Account responsible for this service.
 * @property {string} chatServiceSid -
 *          The unique ID of the {@link https://www.twilio.com/docs/conversations/api/service-resource|Conversation Service} this conversation belongs to.
 * @property {string} preWebhookUrl -
 *          The absolute url the pre-event webhook request should be sent to.
 * @property {string} postWebhookUrl -
 *          The absolute url the post-event webhook request should be sent to.
 * @property {string} filters -
 *          The list of events that your configured webhook targets will receive. Events not configured here will not fire.
 * @property {webhook.method} method -
 *          The HTTP method to be used when sending a webhook request
 * @property {string} url - An absolute URL for this webhook.
 *
 * @param {V1} version - Version of the resource
 * @param {WebhookPayload} payload - The instance payload
 * @param {sid} chatServiceSid - The unique string that identifies the resource
 */
/* jshint ignore:end */
WebhookInstance = function WebhookInstance(version, payload, chatServiceSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.chatServiceSid = payload.chat_service_sid; // jshint ignore:line
  this.preWebhookUrl = payload.pre_webhook_url; // jshint ignore:line
  this.postWebhookUrl = payload.post_webhook_url; // jshint ignore:line
  this.filters = payload.filters; // jshint ignore:line
  this.method = payload.method; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {chatServiceSid: chatServiceSid, };
};

Object.defineProperty(WebhookInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new WebhookContext(this._version, this._solution.chatServiceSid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * update a WebhookInstance
 *
 * @function update
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.preWebhookUrl] -
 *          The absolute url the pre-event webhook request should be sent to.
 * @param {string} [opts.postWebhookUrl] -
 *          The absolute url the post-event webhook request should be sent to.
 * @param {string|list} [opts.filters] -
 *          The list of events that your configured webhook targets will receive. Events not configured here will not fire.
 * @param {string} [opts.method] -
 *          The HTTP method to be used when sending a webhook request
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WebhookInstance
 */
/* jshint ignore:end */
WebhookInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * fetch a WebhookInstance
 *
 * @function fetch
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WebhookInstance
 */
/* jshint ignore:end */
WebhookInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
WebhookInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

WebhookInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the WebhookContext
 *
 * @constructor Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} chatServiceSid -
 *          The unique ID of the {@link https://www.twilio.com/docs/conversations/api/service-resource|Conversation Service} this conversation belongs to.
 */
/* jshint ignore:end */
WebhookContext = function WebhookContext(version, chatServiceSid) {
  this._version = version;

  // Path Solution
  this._solution = {chatServiceSid: chatServiceSid, };
  this._uri = `/Services/${chatServiceSid}/Configuration/Webhooks`;
};

/* jshint ignore:start */
/**
 * update a WebhookInstance
 *
 * @function update
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.preWebhookUrl] -
 *          The absolute url the pre-event webhook request should be sent to.
 * @param {string} [opts.postWebhookUrl] -
 *          The absolute url the post-event webhook request should be sent to.
 * @param {string|list} [opts.filters] -
 *          The list of events that your configured webhook targets will receive. Events not configured here will not fire.
 * @param {string} [opts.method] -
 *          The HTTP method to be used when sending a webhook request
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WebhookInstance
 */
/* jshint ignore:end */
WebhookContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'PreWebhookUrl': _.get(opts, 'preWebhookUrl'),
    'PostWebhookUrl': _.get(opts, 'postWebhookUrl'),
    'Filters': serialize.map(_.get(opts, 'filters'), function(e) { return e; }),
    'Method': _.get(opts, 'method')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new WebhookInstance(this._version, payload, this._solution.chatServiceSid));
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
 * fetch a WebhookInstance
 *
 * @function fetch
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WebhookInstance
 */
/* jshint ignore:end */
WebhookContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new WebhookInstance(this._version, payload, this._solution.chatServiceSid));
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
 * @memberof Twilio.Conversations.V1.ServiceContext.ConfigurationContext.WebhookContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
WebhookContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

WebhookContext.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  WebhookList: WebhookList,
  WebhookPage: WebhookPage,
  WebhookInstance: WebhookInstance,
  WebhookContext: WebhookContext
};
