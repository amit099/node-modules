/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./voice/V1');
import { ArchivedCallListInstance } from './voice/v1/archivedCall';
import { ByocTrunkListInstance } from './voice/v1/byocTrunk';
import { ConnectionPolicyListInstance } from './voice/v1/connectionPolicy';
import { DialingPermissionsListInstance } from './voice/v1/dialingPermissions';
import { IpRecordListInstance } from './voice/v1/ipRecord';
import { SourceIpMappingListInstance } from './voice/v1/sourceIpMapping';


declare class Voice extends Domain {
  /**
   * Initialize voice domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly archivedCalls: ArchivedCallListInstance;
  readonly byocTrunks: ByocTrunkListInstance;
  readonly connectionPolicies: ConnectionPolicyListInstance;
  readonly dialingPermissions: DialingPermissionsListInstance;
  readonly ipRecords: IpRecordListInstance;
  readonly sourceIpMappings: SourceIpMappingListInstance;
  readonly v1: V1;
}

export = Voice;
