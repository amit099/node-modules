/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Pricing = require('../Pricing');
import Version = require('../../base/Version');
import { CountryList } from './v2/country';
import { CountryListInstance } from './v2/country';
import { NumberList } from './v2/number';
import { NumberListInstance } from './v2/number';
import { VoiceList } from './v2/voice';
import { VoiceListInstance } from './v2/voice';


declare class V2 extends Version {
  /**
   * Initialize the V2 version of Pricing
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Pricing);

  readonly countries: CountryListInstance;
  readonly numbers: NumberListInstance;
  readonly voice: VoiceListInstance;
}

export = V2;
