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
var BindingList = require('./service/binding').BindingList;
var ChannelList = require('./service/channel').ChannelList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var RoleList = require('./service/role').RoleList;
var UserList = require('./service/user').UserList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var ServiceList;
var ServicePage;
var ServiceInstance;
var ServiceContext;

/* jshint ignore:start */
/**
 * Initialize the ServiceList
 *
 * @constructor Twilio.Chat.V2.ServiceList
 *
 * @param {Twilio.Chat.V2} version - Version of the resource
 */
/* jshint ignore:end */
ServiceList = function ServiceList(version) {
  /* jshint ignore:start */
  /**
   * @function services
   * @memberof Twilio.Chat.V2#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Chat.V2.ServiceContext}
   */
  /* jshint ignore:end */
  function ServiceListInstance(sid) {
    return ServiceListInstance.get(sid);
  }

  ServiceListInstance._version = version;
  // Path Solution
  ServiceListInstance._solution = {};
  ServiceListInstance._uri = `/Services`;
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Chat.V2.ServiceList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.friendlyName - A string to describe the resource
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts['friendlyName'])) {
      throw new Error('Required parameter "opts[\'friendlyName\']" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'FriendlyName': _.get(opts, 'friendlyName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
   * Streams ServiceInstance records from the API.
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
   * @memberof Twilio.Chat.V2.ServiceList#
   *
   * @param {object} [opts] - Options for request
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
  ServiceListInstance.each = function each(opts, callback) {
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
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Chat.V2.ServiceList#
   *
   * @param {object} [opts] - Options for request
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
  ServiceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Chat.V2.ServiceList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V2.ServiceList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * Constructs a service
   *
   * @function get
   * @memberof Twilio.Chat.V2.ServiceList#
   *
   * @param {string} sid - The SID of the Service resource to fetch
   *
   * @returns {Twilio.Chat.V2.ServiceContext}
   */
  /* jshint ignore:end */
  ServiceListInstance.get = function get(sid) {
    return new ServiceContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Chat.V2.ServiceList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ServiceListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ServiceListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return ServiceListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ServicePage
 *
 * @constructor Twilio.Chat.V2.ServicePage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ServiceSolution} solution - Path solution
 *
 * @returns ServicePage
 */
/* jshint ignore:end */
ServicePage = function ServicePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ServicePage.prototype, Page.prototype);
ServicePage.prototype.constructor = ServicePage;

/* jshint ignore:start */
/**
 * Build an instance of ServiceInstance
 *
 * @function getInstance
 * @memberof Twilio.Chat.V2.ServicePage#
 *
 * @param {ServicePayload} payload - Payload response from the API
 *
 * @returns ServiceInstance
 */
/* jshint ignore:end */
ServicePage.prototype.getInstance = function getInstance(payload) {
  return new ServiceInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Chat.V2.ServicePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ServicePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ServicePage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ServiceContext
 *
 * @constructor Twilio.Chat.V2.ServiceInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT when the resource was last updated
 * @property {string} defaultServiceRoleSid -
 *          The service role assigned to users when they are added to the service
 * @property {string} defaultChannelRoleSid -
 *          The channel role assigned to users when they are added to a channel
 * @property {string} defaultChannelCreatorRoleSid -
 *          The channel role assigned to a channel creator when they join a new channel
 * @property {boolean} readStatusEnabled -
 *          Whether the Message Consumption Horizon feature is enabled
 * @property {boolean} reachabilityEnabled -
 *          Whether the Reachability Indicator feature is enabled for this Service instance
 * @property {number} typingIndicatorTimeout -
 *          How long in seconds to wait before assuming the user is no longer typing
 * @property {number} consumptionReportInterval - DEPRECATED
 * @property {object} limits -
 *          An object that describes the limits of the service instance
 * @property {string} preWebhookUrl - The webhook URL for pre-event webhooks
 * @property {string} postWebhookUrl - The URL for post-event webhooks
 * @property {string} webhookMethod -
 *          The HTTP method  to use for both PRE and POST webhooks
 * @property {string} webhookFilters -
 *          The list of webhook events that are enabled for this Service instance
 * @property {number} preWebhookRetryCount -
 *          Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses
 * @property {number} postWebhookRetryCount -
 *          The number of times calls to the `post_webhook_url` will be retried
 * @property {object} notifications -
 *          The notification configuration for the Service instance
 * @property {object} media - The properties of the media that the service supports
 * @property {string} url - The absolute URL of the Service resource
 * @property {string} links -
 *          The absolute URLs of the Service's Channels, Roles, and Users
 *
 * @param {V2} version - Version of the resource
 * @param {ServicePayload} payload - The instance payload
 * @param {sid} sid - The SID of the Service resource to fetch
 */
/* jshint ignore:end */
ServiceInstance = function ServiceInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.defaultServiceRoleSid = payload.default_service_role_sid; // jshint ignore:line
  this.defaultChannelRoleSid = payload.default_channel_role_sid; // jshint ignore:line
  this.defaultChannelCreatorRoleSid = payload.default_channel_creator_role_sid; // jshint ignore:line
  this.readStatusEnabled = payload.read_status_enabled; // jshint ignore:line
  this.reachabilityEnabled = payload.reachability_enabled; // jshint ignore:line
  this.typingIndicatorTimeout = deserialize.integer(payload.typing_indicator_timeout); // jshint ignore:line
  this.consumptionReportInterval = deserialize.integer(payload.consumption_report_interval); // jshint ignore:line
  this.limits = payload.limits; // jshint ignore:line
  this.preWebhookUrl = payload.pre_webhook_url; // jshint ignore:line
  this.postWebhookUrl = payload.post_webhook_url; // jshint ignore:line
  this.webhookMethod = payload.webhook_method; // jshint ignore:line
  this.webhookFilters = payload.webhook_filters; // jshint ignore:line
  this.preWebhookRetryCount = deserialize.integer(payload.pre_webhook_retry_count); // jshint ignore:line
  this.postWebhookRetryCount = deserialize.integer(payload.post_webhook_retry_count); // jshint ignore:line
  this.notifications = payload.notifications; // jshint ignore:line
  this.media = payload.media; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(ServiceInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ServiceContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.defaultServiceRoleSid] -
 *          The service role assigned to users when they are added to the service
 * @param {string} [opts.defaultChannelRoleSid] -
 *          The channel role assigned to users when they are added to a channel
 * @param {string} [opts.defaultChannelCreatorRoleSid] -
 *          The channel role assigned to a channel creator when they join a new channel
 * @param {boolean} [opts.readStatusEnabled] -
 *          Whether to enable the Message Consumption Horizon feature
 * @param {boolean} [opts.reachabilityEnabled] -
 *          Whether to enable the Reachability Indicator feature for this Service instance
 * @param {number} [opts.typingIndicatorTimeout] -
 *          How long in seconds to wait before assuming the user is no longer typing
 * @param {number} [opts.consumptionReportInterval] - DEPRECATED
 * @param {boolean} [opts.notifications.newMessage.enabled] -
 *          Whether to send a notification when a new message is added to a channel
 * @param {string} [opts.notifications.newMessage.template] -
 *          The template to use to create the notification text displayed when a new message is added to a channel
 * @param {string} [opts.notifications.newMessage.sound] -
 *          The name of the sound to play when a new message is added to a channel
 * @param {boolean} [opts.notifications.newMessage.badgeCountEnabled] -
 *          Whether the new message badge is enabled
 * @param {boolean} [opts.notifications.addedToChannel.enabled] -
 *          Whether to send a notification when a member is added to a channel
 * @param {string} [opts.notifications.addedToChannel.template] -
 *          The template to use to create the notification text displayed when a member is added to a channel
 * @param {string} [opts.notifications.addedToChannel.sound] -
 *          The name of the sound to play when a member is added to a channel
 * @param {boolean} [opts.notifications.removedFromChannel.enabled] -
 *          Whether to send a notification to a user when they are removed from a channel
 * @param {string} [opts.notifications.removedFromChannel.template] -
 *          The template to use to create the notification text displayed to a user when they are removed
 * @param {string} [opts.notifications.removedFromChannel.sound] -
 *          The name of the sound to play to a user when they are removed from a channel
 * @param {boolean} [opts.notifications.invitedToChannel.enabled] -
 *          Whether to send a notification when a user is invited to a channel
 * @param {string} [opts.notifications.invitedToChannel.template] -
 *          The template to use to create the notification text displayed when a user is invited to a channel
 * @param {string} [opts.notifications.invitedToChannel.sound] -
 *          The name of the sound to play when a user is invited to a channel
 * @param {string} [opts.preWebhookUrl] - The webhook URL for pre-event webhooks
 * @param {string} [opts.postWebhookUrl] - The URL for post-event webhooks
 * @param {string} [opts.webhookMethod] -
 *          The HTTP method  to use for both PRE and POST webhooks
 * @param {string|list} [opts.webhookFilters] -
 *          The list of webhook events that are enabled for this Service instance
 * @param {number} [opts.limits.channelMembers] -
 *          The maximum number of Members that can be added to Channels within this Service
 * @param {number} [opts.limits.userChannels] -
 *          The maximum number of Channels Users can be a Member of within this Service
 * @param {string} [opts.media.compatibilityMessage] -
 *          The message to send when a media message has no text
 * @param {number} [opts.preWebhookRetryCount] -
 *          Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses
 * @param {number} [opts.postWebhookRetryCount] -
 *          The number of times calls to the `post_webhook_url` will be retried
 * @param {boolean} [opts.notifications.logEnabled] - Whether to log notifications
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the channels
 *
 * @function channels
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @returns {Twilio.Chat.V2.ServiceContext.ChannelList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.channels = function channels() {
  return this._proxy.channels;
};

/* jshint ignore:start */
/**
 * Access the roles
 *
 * @function roles
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @returns {Twilio.Chat.V2.ServiceContext.RoleList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.roles = function roles() {
  return this._proxy.roles;
};

/* jshint ignore:start */
/**
 * Access the users
 *
 * @function users
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @returns {Twilio.Chat.V2.ServiceContext.UserList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.users = function users() {
  return this._proxy.users;
};

/* jshint ignore:start */
/**
 * Access the bindings
 *
 * @function bindings
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @returns {Twilio.Chat.V2.ServiceContext.BindingList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.bindings = function bindings() {
  return this._proxy.bindings;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Chat.V2.ServiceInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ServiceInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ServiceInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ServiceContext
 *
 * @constructor Twilio.Chat.V2.ServiceContext
 *
 * @property {Twilio.Chat.V2.ServiceContext.ChannelList} channels -
 *          channels resource
 * @property {Twilio.Chat.V2.ServiceContext.RoleList} roles - roles resource
 * @property {Twilio.Chat.V2.ServiceContext.UserList} users - users resource
 * @property {Twilio.Chat.V2.ServiceContext.BindingList} bindings -
 *          bindings resource
 *
 * @param {V2} version - Version of the resource
 * @param {sid} sid - The SID of the Service resource to fetch
 */
/* jshint ignore:end */
ServiceContext = function ServiceContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/Services/${sid}`;

  // Dependents
  this._channels = undefined;
  this._roles = undefined;
  this._users = undefined;
  this._bindings = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V2.ServiceContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V2.ServiceContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
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
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Chat.V2.ServiceContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.defaultServiceRoleSid] -
 *          The service role assigned to users when they are added to the service
 * @param {string} [opts.defaultChannelRoleSid] -
 *          The channel role assigned to users when they are added to a channel
 * @param {string} [opts.defaultChannelCreatorRoleSid] -
 *          The channel role assigned to a channel creator when they join a new channel
 * @param {boolean} [opts.readStatusEnabled] -
 *          Whether to enable the Message Consumption Horizon feature
 * @param {boolean} [opts.reachabilityEnabled] -
 *          Whether to enable the Reachability Indicator feature for this Service instance
 * @param {number} [opts.typingIndicatorTimeout] -
 *          How long in seconds to wait before assuming the user is no longer typing
 * @param {number} [opts.consumptionReportInterval] - DEPRECATED
 * @param {boolean} [opts.notifications.newMessage.enabled] -
 *          Whether to send a notification when a new message is added to a channel
 * @param {string} [opts.notifications.newMessage.template] -
 *          The template to use to create the notification text displayed when a new message is added to a channel
 * @param {string} [opts.notifications.newMessage.sound] -
 *          The name of the sound to play when a new message is added to a channel
 * @param {boolean} [opts.notifications.newMessage.badgeCountEnabled] -
 *          Whether the new message badge is enabled
 * @param {boolean} [opts.notifications.addedToChannel.enabled] -
 *          Whether to send a notification when a member is added to a channel
 * @param {string} [opts.notifications.addedToChannel.template] -
 *          The template to use to create the notification text displayed when a member is added to a channel
 * @param {string} [opts.notifications.addedToChannel.sound] -
 *          The name of the sound to play when a member is added to a channel
 * @param {boolean} [opts.notifications.removedFromChannel.enabled] -
 *          Whether to send a notification to a user when they are removed from a channel
 * @param {string} [opts.notifications.removedFromChannel.template] -
 *          The template to use to create the notification text displayed to a user when they are removed
 * @param {string} [opts.notifications.removedFromChannel.sound] -
 *          The name of the sound to play to a user when they are removed from a channel
 * @param {boolean} [opts.notifications.invitedToChannel.enabled] -
 *          Whether to send a notification when a user is invited to a channel
 * @param {string} [opts.notifications.invitedToChannel.template] -
 *          The template to use to create the notification text displayed when a user is invited to a channel
 * @param {string} [opts.notifications.invitedToChannel.sound] -
 *          The name of the sound to play when a user is invited to a channel
 * @param {string} [opts.preWebhookUrl] - The webhook URL for pre-event webhooks
 * @param {string} [opts.postWebhookUrl] - The URL for post-event webhooks
 * @param {string} [opts.webhookMethod] -
 *          The HTTP method  to use for both PRE and POST webhooks
 * @param {string|list} [opts.webhookFilters] -
 *          The list of webhook events that are enabled for this Service instance
 * @param {number} [opts.limits.channelMembers] -
 *          The maximum number of Members that can be added to Channels within this Service
 * @param {number} [opts.limits.userChannels] -
 *          The maximum number of Channels Users can be a Member of within this Service
 * @param {string} [opts.media.compatibilityMessage] -
 *          The message to send when a media message has no text
 * @param {number} [opts.preWebhookRetryCount] -
 *          Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses
 * @param {number} [opts.postWebhookRetryCount] -
 *          The number of times calls to the `post_webhook_url` will be retried
 * @param {boolean} [opts.notifications.logEnabled] - Whether to log notifications
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'DefaultServiceRoleSid': _.get(opts, 'defaultServiceRoleSid'),
    'DefaultChannelRoleSid': _.get(opts, 'defaultChannelRoleSid'),
    'DefaultChannelCreatorRoleSid': _.get(opts, 'defaultChannelCreatorRoleSid'),
    'ReadStatusEnabled': serialize.bool(_.get(opts, 'readStatusEnabled')),
    'ReachabilityEnabled': serialize.bool(_.get(opts, 'reachabilityEnabled')),
    'TypingIndicatorTimeout': _.get(opts, 'typingIndicatorTimeout'),
    'ConsumptionReportInterval': _.get(opts, 'consumptionReportInterval'),
    'Notifications.NewMessage.Enabled': serialize.bool(_.get(opts, 'notifications.newMessage.enabled')),
    'Notifications.NewMessage.Template': _.get(opts, 'notifications.newMessage.template'),
    'Notifications.NewMessage.Sound': _.get(opts, 'notifications.newMessage.sound'),
    'Notifications.NewMessage.BadgeCountEnabled': serialize.bool(_.get(opts, 'notifications.newMessage.badgeCountEnabled')),
    'Notifications.AddedToChannel.Enabled': serialize.bool(_.get(opts, 'notifications.addedToChannel.enabled')),
    'Notifications.AddedToChannel.Template': _.get(opts, 'notifications.addedToChannel.template'),
    'Notifications.AddedToChannel.Sound': _.get(opts, 'notifications.addedToChannel.sound'),
    'Notifications.RemovedFromChannel.Enabled': serialize.bool(_.get(opts, 'notifications.removedFromChannel.enabled')),
    'Notifications.RemovedFromChannel.Template': _.get(opts, 'notifications.removedFromChannel.template'),
    'Notifications.RemovedFromChannel.Sound': _.get(opts, 'notifications.removedFromChannel.sound'),
    'Notifications.InvitedToChannel.Enabled': serialize.bool(_.get(opts, 'notifications.invitedToChannel.enabled')),
    'Notifications.InvitedToChannel.Template': _.get(opts, 'notifications.invitedToChannel.template'),
    'Notifications.InvitedToChannel.Sound': _.get(opts, 'notifications.invitedToChannel.sound'),
    'PreWebhookUrl': _.get(opts, 'preWebhookUrl'),
    'PostWebhookUrl': _.get(opts, 'postWebhookUrl'),
    'WebhookMethod': _.get(opts, 'webhookMethod'),
    'WebhookFilters': serialize.map(_.get(opts, 'webhookFilters'), function(e) { return e; }),
    'Limits.ChannelMembers': _.get(opts, 'limits.channelMembers'),
    'Limits.UserChannels': _.get(opts, 'limits.userChannels'),
    'Media.CompatibilityMessage': _.get(opts, 'media.compatibilityMessage'),
    'PreWebhookRetryCount': _.get(opts, 'preWebhookRetryCount'),
    'PostWebhookRetryCount': _.get(opts, 'postWebhookRetryCount'),
    'Notifications.LogEnabled': serialize.bool(_.get(opts, 'notifications.logEnabled'))
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(ServiceContext.prototype,
  'channels', {
    get: function() {
      if (!this._channels) {
        this._channels = new ChannelList(this._version, this._solution.sid);
      }
      return this._channels;
    }
});

Object.defineProperty(ServiceContext.prototype,
  'roles', {
    get: function() {
      if (!this._roles) {
        this._roles = new RoleList(this._version, this._solution.sid);
      }
      return this._roles;
    }
});

Object.defineProperty(ServiceContext.prototype,
  'users', {
    get: function() {
      if (!this._users) {
        this._users = new UserList(this._version, this._solution.sid);
      }
      return this._users;
    }
});

Object.defineProperty(ServiceContext.prototype,
  'bindings', {
    get: function() {
      if (!this._bindings) {
        this._bindings = new BindingList(this._version, this._solution.sid);
      }
      return this._bindings;
    }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Chat.V2.ServiceContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ServiceContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ServiceContext.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ServiceList: ServiceList,
  ServicePage: ServicePage,
  ServiceInstance: ServiceInstance,
  ServiceContext: ServiceContext
};