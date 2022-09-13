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
var CompositionHookList = require('./v1/compositionHook').CompositionHookList;
var CompositionList = require('./v1/composition').CompositionList;
var CompositionSettingsList = require(
    './v1/compositionSettings').CompositionSettingsList;
var RecordingList = require('./v1/recording').RecordingList;
var RecordingSettingsList = require(
    './v1/recordingSettings').RecordingSettingsList;
var RoomList = require('./v1/room').RoomList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V1 version of Video
 *
 * @constructor Twilio.Video.V1
 *
 * @property {Twilio.Video.V1.CompositionList} compositions - compositions resource
 * @property {Twilio.Video.V1.CompositionHookList} compositionHooks -
 *          compositionHooks resource
 * @property {Twilio.Video.V1.CompositionSettingsList} compositionSettings -
 *          compositionSettings resource
 * @property {Twilio.Video.V1.RecordingList} recordings - recordings resource
 * @property {Twilio.Video.V1.RecordingSettingsList} recordingSettings -
 *          recordingSettings resource
 * @property {Twilio.Video.V1.RoomList} rooms - rooms resource
 *
 * @param {Twilio.Video} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._compositions = undefined;
  this._compositionHooks = undefined;
  this._compositionSettings = undefined;
  this._recordings = undefined;
  this._recordingSettings = undefined;
  this._rooms = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'compositions', {
    get: function() {
      this._compositions = this._compositions || new CompositionList(this);
      return this._compositions;
    }
});

Object.defineProperty(V1.prototype,
  'compositionHooks', {
    get: function() {
      this._compositionHooks = this._compositionHooks || new CompositionHookList(this);
      return this._compositionHooks;
    }
});

Object.defineProperty(V1.prototype,
  'compositionSettings', {
    get: function() {
      this._compositionSettings = this._compositionSettings || new CompositionSettingsList(this);
      return this._compositionSettings;
    }
});

Object.defineProperty(V1.prototype,
  'recordings', {
    get: function() {
      this._recordings = this._recordings || new RecordingList(this);
      return this._recordings;
    }
});

Object.defineProperty(V1.prototype,
  'recordingSettings', {
    get: function() {
      this._recordingSettings = this._recordingSettings || new RecordingSettingsList(this);
      return this._recordingSettings;
    }
});

Object.defineProperty(V1.prototype,
  'rooms', {
    get: function() {
      this._rooms = this._rooms || new RoomList(this);
      return this._rooms;
    }
});

module.exports = V1;