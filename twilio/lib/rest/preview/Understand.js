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
var AssistantList = require('./understand/assistant').AssistantList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Understand version of Preview
 *
 * @constructor Twilio.Preview.Understand
 *
 * @property {Twilio.Preview.Understand.AssistantList} assistants -
 *          assistants resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Understand(domain) {
  Version.prototype.constructor.call(this, domain, 'understand');

  // Resources
  this._assistants = undefined;
}

_.extend(Understand.prototype, Version.prototype);
Understand.prototype.constructor = Understand;

Object.defineProperty(Understand.prototype,
  'assistants', {
    get: function() {
      this._assistants = this._assistants || new AssistantList(this);
      return this._assistants;
    }
});

module.exports = Understand;