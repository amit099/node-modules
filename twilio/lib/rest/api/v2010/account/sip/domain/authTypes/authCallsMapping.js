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
var AuthCallsCredentialListMappingList = require(
    './authCallsMapping/authCallsCredentialListMapping').AuthCallsCredentialListMappingList;
var AuthCallsIpAccessControlListMappingList = require(
    './authCallsMapping/authCallsIpAccessControlListMapping').AuthCallsIpAccessControlListMappingList;

var AuthTypeCallsList;

/* jshint ignore:start */
/**
 * Initialize the AuthTypeCallsList
 *
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext.AuthTypeCallsList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The SID of the Account that created the resource
 * @param {string} domainSid - The unique string that identifies the resource
 */
/* jshint ignore:end */
AuthTypeCallsList = function AuthTypeCallsList(version, accountSid, domainSid) {
  /* jshint ignore:start */
  /**
   * @function calls
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext.AuthTypeCallsContext}
   */
  /* jshint ignore:end */
  function AuthTypeCallsListInstance(sid) {
    return AuthTypeCallsListInstance.get(sid);
  }

  AuthTypeCallsListInstance._version = version;
  // Path Solution
  AuthTypeCallsListInstance._solution = {accountSid: accountSid, domainSid: domainSid};

  // Components
  AuthTypeCallsListInstance._credentialListMappings = undefined;
  AuthTypeCallsListInstance._ipAccessControlListMappings = undefined;

  Object.defineProperty(AuthTypeCallsListInstance,
    'credentialListMappings', {
      get: function credentialListMappings() {
        if (!this._credentialListMappings) {
          this._credentialListMappings = new AuthCallsCredentialListMappingList(
            this._version,
            this._solution.accountSid,
            this._solution.domainSid
          );
        }

        return this._credentialListMappings;
      }
  });

  Object.defineProperty(AuthTypeCallsListInstance,
    'ipAccessControlListMappings', {
      get: function ipAccessControlListMappings() {
        if (!this._ipAccessControlListMappings) {
          this._ipAccessControlListMappings = new AuthCallsIpAccessControlListMappingList(
            this._version,
            this._solution.accountSid,
            this._solution.domainSid
          );
        }

        return this._ipAccessControlListMappings;
      }
  });

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext.AuthTypeCallsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  AuthTypeCallsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  AuthTypeCallsListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return AuthTypeCallsListInstance;
};

module.exports = {
  AuthTypeCallsList: AuthTypeCallsList
};