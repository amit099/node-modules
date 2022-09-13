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
var UserList = require('./v1/user').UserList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of FrontlineApi
 *
 * @constructor Twilio.FrontlineApi.V1
 *
 * @property {Twilio.FrontlineApi.V1.UserList} users - users resource
 *
 * @param {Twilio.FrontlineApi} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._users = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'users', {
    get: function() {
      this._users = this._users || new UserList(this);
      return this._users;
    }
});

module.exports = V1;
