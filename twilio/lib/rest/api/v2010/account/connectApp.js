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
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ConnectAppList;
var ConnectAppPage;
var ConnectAppInstance;
var ConnectAppContext;

/* jshint ignore:start */
/**
 * Initialize the ConnectAppList
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The SID of the Account that created the resource
 */
/* jshint ignore:end */
ConnectAppList = function ConnectAppList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function connectApps
   * @memberof Twilio.Api.V2010.AccountContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConnectAppContext}
   */
  /* jshint ignore:end */
  function ConnectAppListInstance(sid) {
    return ConnectAppListInstance.get(sid);
  }

  ConnectAppListInstance._version = version;
  // Path Solution
  ConnectAppListInstance._solution = {accountSid: accountSid};
  ConnectAppListInstance._uri = `/Accounts/${accountSid}/ConnectApps.json`;
  /* jshint ignore:start */
  /**
   * Streams ConnectAppInstance records from the API.
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
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList#
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
  ConnectAppListInstance.each = function each(opts, callback) {
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
   * Lists ConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList#
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
  ConnectAppListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList#
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
  ConnectAppListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new ConnectAppPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConnectAppListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ConnectAppPage(this._version, payload, this._solution));
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
   * Constructs a connect_app
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConnectAppContext}
   */
  /* jshint ignore:end */
  ConnectAppListInstance.get = function get(sid) {
    return new ConnectAppContext(this._version, this._solution.accountSid, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ConnectAppListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ConnectAppListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return ConnectAppListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ConnectAppPage
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppPage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ConnectAppSolution} solution - Path solution
 *
 * @returns ConnectAppPage
 */
/* jshint ignore:end */
ConnectAppPage = function ConnectAppPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ConnectAppPage.prototype, Page.prototype);
ConnectAppPage.prototype.constructor = ConnectAppPage;

/* jshint ignore:start */
/**
 * Build an instance of ConnectAppInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppPage#
 *
 * @param {ConnectAppPayload} payload - Payload response from the API
 *
 * @returns ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppPage.prototype.getInstance = function getInstance(payload) {
  return new ConnectAppInstance(this._version, payload, this._solution.accountSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConnectAppPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ConnectAppPage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ConnectAppContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} authorizeRedirectUrl -
 *          The URL to redirect the user to after authorization
 * @property {string} companyName - The company name set for the Connect App
 * @property {string} deauthorizeCallbackMethod -
 *          The HTTP method we use to call deauthorize_callback_url
 * @property {string} deauthorizeCallbackUrl -
 *          The URL we call to de-authorize the Connect App
 * @property {string} description - The description of the Connect App
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {string} homepageUrl - The URL users can obtain more information
 * @property {connect_app.permission} permissions -
 *          The set of permissions that your ConnectApp requests
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} uri -
 *          The URI of the resource, relative to `https://api.twilio.com`
 *
 * @param {V2010} version - Version of the resource
 * @param {ConnectAppPayload} payload - The instance payload
 * @param {sid} accountSid - The SID of the Account that created the resource
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ConnectAppInstance = function ConnectAppInstance(version, payload, accountSid,
                                                  sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.authorizeRedirectUrl = payload.authorize_redirect_url; // jshint ignore:line
  this.companyName = payload.company_name; // jshint ignore:line
  this.deauthorizeCallbackMethod = payload.deauthorize_callback_method; // jshint ignore:line
  this.deauthorizeCallbackUrl = payload.deauthorize_callback_url; // jshint ignore:line
  this.description = payload.description; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.homepageUrl = payload.homepage_url; // jshint ignore:line
  this.permissions = payload.permissions; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, sid: sid || this.sid, };
};

Object.defineProperty(ConnectAppInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ConnectAppContext(this._version, this._solution.accountSid, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ConnectAppInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ConnectAppInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.authorizeRedirectUrl] -
 *          The URL to redirect the user to after authorization
 * @param {string} [opts.companyName] - The company name to set for the Connect App
 * @param {string} [opts.deauthorizeCallbackMethod] -
 *          The HTTP method to use when calling deauthorize_callback_url
 * @param {string} [opts.deauthorizeCallbackUrl] -
 *          The URL to call to de-authorize the Connect App
 * @param {string} [opts.description] - A description of the Connect App
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.homepageUrl] -
 *          A public URL where users can obtain more information
 * @param {connect_app.permission|list} [opts.permissions] -
 *          The set of permissions that your ConnectApp will request
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a ConnectAppInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConnectAppInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ConnectAppInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ConnectAppContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppContext
 *
 * @param {V2010} version - Version of the resource
 * @param {sid} accountSid -
 *          The SID of the Account that created the resource to fetch
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ConnectAppContext = function ConnectAppContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {accountSid: accountSid, sid: sid, };
  this._uri = `/Accounts/${accountSid}/ConnectApps/${sid}.json`;
};

/* jshint ignore:start */
/**
 * fetch a ConnectAppInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
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
 * update a ConnectAppInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.authorizeRedirectUrl] -
 *          The URL to redirect the user to after authorization
 * @param {string} [opts.companyName] - The company name to set for the Connect App
 * @param {string} [opts.deauthorizeCallbackMethod] -
 *          The HTTP method to use when calling deauthorize_callback_url
 * @param {string} [opts.deauthorizeCallbackUrl] -
 *          The URL to call to de-authorize the Connect App
 * @param {string} [opts.description] - A description of the Connect App
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.homepageUrl] -
 *          A public URL where users can obtain more information
 * @param {connect_app.permission|list} [opts.permissions] -
 *          The set of permissions that your ConnectApp will request
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AuthorizeRedirectUrl': _.get(opts, 'authorizeRedirectUrl'),
    'CompanyName': _.get(opts, 'companyName'),
    'DeauthorizeCallbackMethod': _.get(opts, 'deauthorizeCallbackMethod'),
    'DeauthorizeCallbackUrl': _.get(opts, 'deauthorizeCallbackUrl'),
    'Description': _.get(opts, 'description'),
    'FriendlyName': _.get(opts, 'friendlyName'),
    'HomepageUrl': _.get(opts, 'homepageUrl'),
    'Permissions': serialize.map(_.get(opts, 'permissions'), function(e) { return e; })
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
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
 * remove a ConnectAppInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppContext.prototype.remove = function remove(callback) {
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
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConnectAppContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ConnectAppContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ConnectAppList: ConnectAppList,
  ConnectAppPage: ConnectAppPage,
  ConnectAppInstance: ConnectAppInstance,
  ConnectAppContext: ConnectAppContext
};