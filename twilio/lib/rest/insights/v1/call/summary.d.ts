/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

type CallSummaryCallState = 'ringing'|'completed'|'busy'|'fail'|'noanswer'|'canceled'|'answered'|'undialed';

type CallSummaryCallType = 'carrier'|'sip'|'trunking'|'client';

type CallSummaryProcessingState = 'complete'|'partial';

/**
 * Initialize the CallSummaryList
 *
 * @param version - Version of the resource
 * @param callSid - The call_sid
 */
declare function CallSummaryList(version: V1, callSid: string): CallSummaryListInstance;

/**
 * Options to pass to fetch
 *
 * @property processingState - The processing_state
 */
interface CallSummaryInstanceFetchOptions {
  processingState?: CallSummaryProcessingState;
}

interface CallSummaryListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CallSummaryContext;
  /**
   * Constructs a call_summary
   */
  get(): CallSummaryContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface CallSummaryPayload extends CallSummaryResource, Page.TwilioResponsePayload {
}

interface CallSummaryResource {
  account_sid: string;
  attributes: object;
  call_sid: string;
  call_state: CallSummaryCallState;
  call_type: CallSummaryCallType;
  carrier_edge: object;
  client_edge: object;
  connect_duration: number;
  created_time: Date;
  duration: number;
  end_time: Date;
  from: object;
  processing_state: CallSummaryProcessingState;
  properties: object;
  sdk_edge: object;
  sip_edge: object;
  start_time: Date;
  tags: string[];
  to: object;
  trust: object;
  url: string;
}

interface CallSummarySolution {
  callSid?: string;
}


declare class CallSummaryContext {
  /**
   * Initialize the CallSummaryContext
   *
   * @param version - Version of the resource
   * @param callSid - The call_sid
   */
  constructor(version: V1, callSid: string);

  /**
   * fetch a CallSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  /**
   * fetch a CallSummaryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: CallSummaryInstanceFetchOptions, callback?: (error: Error | null, items: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class CallSummaryInstance extends SerializableClass {
  /**
   * Initialize the CallSummaryContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param callSid - The call_sid
   */
  constructor(version: V1, payload: CallSummaryPayload, callSid: string);

  private _proxy: CallSummaryContext;
  accountSid: string;
  attributes: any;
  callSid: string;
  callState: CallSummaryCallState;
  callType: CallSummaryCallType;
  carrierEdge: any;
  clientEdge: any;
  connectDuration: number;
  createdTime: Date;
  duration: number;
  endTime: Date;
  /**
   * fetch a CallSummaryInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  /**
   * fetch a CallSummaryInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: CallSummaryInstanceFetchOptions, callback?: (error: Error | null, items: CallSummaryInstance) => any): Promise<CallSummaryInstance>;
  from: any;
  processingState: CallSummaryProcessingState;
  properties: any;
  sdkEdge: any;
  sipEdge: any;
  startTime: Date;
  tags: string[];
  to: any;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trust: any;
  url: string;
}


declare class CallSummaryPage extends Page<V1, CallSummaryPayload, CallSummaryResource, CallSummaryInstance> {
  /**
   * Initialize the CallSummaryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CallSummarySolution);

  /**
   * Build an instance of CallSummaryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CallSummaryPayload): CallSummaryInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CallSummaryCallState, CallSummaryCallType, CallSummaryContext, CallSummaryInstance, CallSummaryInstanceFetchOptions, CallSummaryList, CallSummaryListInstance, CallSummaryPage, CallSummaryPayload, CallSummaryProcessingState, CallSummaryResource, CallSummarySolution }
