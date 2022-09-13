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
var CustomerProfilesList = require(
    './v1/customerProfiles').CustomerProfilesList;
var EndUserList = require('./v1/endUser').EndUserList;
var EndUserTypeList = require('./v1/endUserType').EndUserTypeList;
var PoliciesList = require('./v1/policies').PoliciesList;
var SupportingDocumentList = require(
    './v1/supportingDocument').SupportingDocumentList;
var SupportingDocumentTypeList = require(
    './v1/supportingDocumentType').SupportingDocumentTypeList;
var TrustProductsList = require('./v1/trustProducts').TrustProductsList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Trusthub
 *
 * @constructor Twilio.Trusthub.V1
 *
 * @property {Twilio.Trusthub.V1.CustomerProfilesList} customerProfiles -
 *          customerProfiles resource
 * @property {Twilio.Trusthub.V1.EndUserList} endUsers - endUsers resource
 * @property {Twilio.Trusthub.V1.EndUserTypeList} endUserTypes -
 *          endUserTypes resource
 * @property {Twilio.Trusthub.V1.PoliciesList} policies - policies resource
 * @property {Twilio.Trusthub.V1.SupportingDocumentList} supportingDocuments -
 *          supportingDocuments resource
 * @property {Twilio.Trusthub.V1.SupportingDocumentTypeList} supportingDocumentTypes -
 *          supportingDocumentTypes resource
 * @property {Twilio.Trusthub.V1.TrustProductsList} trustProducts -
 *          trustProducts resource
 *
 * @param {Twilio.Trusthub} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._customerProfiles = undefined;
  this._endUsers = undefined;
  this._endUserTypes = undefined;
  this._policies = undefined;
  this._supportingDocuments = undefined;
  this._supportingDocumentTypes = undefined;
  this._trustProducts = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'customerProfiles', {
    get: function() {
      this._customerProfiles = this._customerProfiles || new CustomerProfilesList(this);
      return this._customerProfiles;
    }
});

Object.defineProperty(V1.prototype,
  'endUsers', {
    get: function() {
      this._endUsers = this._endUsers || new EndUserList(this);
      return this._endUsers;
    }
});

Object.defineProperty(V1.prototype,
  'endUserTypes', {
    get: function() {
      this._endUserTypes = this._endUserTypes || new EndUserTypeList(this);
      return this._endUserTypes;
    }
});

Object.defineProperty(V1.prototype,
  'policies', {
    get: function() {
      this._policies = this._policies || new PoliciesList(this);
      return this._policies;
    }
});

Object.defineProperty(V1.prototype,
  'supportingDocuments', {
    get: function() {
      this._supportingDocuments = this._supportingDocuments || new SupportingDocumentList(this);
      return this._supportingDocuments;
    }
});

Object.defineProperty(V1.prototype,
  'supportingDocumentTypes', {
    get: function() {
      this._supportingDocumentTypes = this._supportingDocumentTypes || new SupportingDocumentTypeList(this);
      return this._supportingDocumentTypes;
    }
});

Object.defineProperty(V1.prototype,
  'trustProducts', {
    get: function() {
      this._trustProducts = this._trustProducts || new TrustProductsList(this);
      return this._trustProducts;
    }
});

module.exports = V1;
