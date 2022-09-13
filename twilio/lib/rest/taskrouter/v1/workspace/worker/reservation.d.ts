/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type ReservationCallStatus = 'initiated'|'ringing'|'answered'|'completed';

type ReservationConferenceEvent = 'start'|'end'|'join'|'leave'|'mute'|'hold'|'speaker';

type ReservationStatus = 'pending'|'accepted'|'rejected'|'timeout'|'canceled'|'rescinded'|'wrapping'|'completed';

/**
 * Initialize the ReservationList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The SID of the Workspace that this worker is contained within.
 * @param workerSid - The SID of the reserved Worker resource
 */
declare function ReservationList(version: V1, workspaceSid: string, workerSid: string): ReservationListInstance;

/**
 * Options to pass to update
 *
 * @property beep - Whether to play a notification beep when the participant joins
 * @property beepOnCustomerEntrance - Whether to play a notification beep when the customer joins
 * @property callAccept - Whether to accept a reservation when executing a Call instruction
 * @property callFrom - The Caller ID of the outbound call when executing a Call instruction
 * @property callRecord - Whether to record both legs of a call when executing a Call instruction
 * @property callStatusCallbackUrl - The URL to call for the completed call event when executing a Call instruction
 * @property callTimeout - The timeout for a call when executing a Call instruction
 * @property callTo - The contact URI of the worker when executing a Call instruction
 * @property callUrl - TwiML URI executed on answering the worker's leg as a result of the Call instruction
 * @property conferenceRecord - Whether to record the conference the participant is joining
 * @property conferenceRecordingStatusCallback - The URL we should call using the `conference_recording_status_callback_method` when the conference recording is available
 * @property conferenceRecordingStatusCallbackMethod - The HTTP method we should use to call `conference_recording_status_callback`
 * @property conferenceStatusCallback - The callback URL for conference events
 * @property conferenceStatusCallbackEvent - The conference status events that we will send to conference_status_callback
 * @property conferenceStatusCallbackMethod - HTTP method for requesting `conference_status_callback` URL
 * @property conferenceTrim - Whether to trim leading and trailing silence from your recorded conference audio files
 * @property dequeueFrom - The caller ID of the call to the worker when executing a Dequeue instruction
 * @property dequeuePostWorkActivitySid - The SID of the Activity resource to start after executing a Dequeue instruction
 * @property dequeueRecord - Whether to record both legs of a call when executing a Dequeue instruction
 * @property dequeueStatusCallbackEvent - The call progress events sent via webhooks as a result of a Dequeue instruction
 * @property dequeueStatusCallbackUrl - The callback URL for completed call event when executing a Dequeue instruction
 * @property dequeueTimeout - The timeout for call when executing a Dequeue instruction
 * @property dequeueTo - The contact URI of the worker when executing a Dequeue instruction
 * @property earlyMedia - Whether agents can hear the state of the outbound call
 * @property endConferenceOnCustomerExit - Whether to end the conference when the customer leaves
 * @property endConferenceOnExit - Whether to end the conference when the agent leaves
 * @property from - The caller ID of the call to the worker when executing a Conference instruction
 * @property ifMatch - The If-Match HTTP request header
 * @property instruction - The assignment instruction for the reservation
 * @property maxParticipants - The maximum number of agent conference participants
 * @property muted - Whether to mute the agent
 * @property postWorkActivitySid - The new worker activity SID after executing a Conference instruction
 * @property record - Whether to record the participant and their conferences
 * @property recordingChannels - Specify `mono` or `dual` recording channels
 * @property recordingStatusCallback - The URL that we should call using the `recording_status_callback_method` when the recording status changes
 * @property recordingStatusCallbackMethod - The HTTP method we should use when we call `recording_status_callback`
 * @property redirectAccept - Whether the reservation should be accepted when executing a Redirect instruction
 * @property redirectCallSid - The Call SID of the call parked in the queue when executing a Redirect instruction
 * @property redirectUrl - TwiML URI to redirect the call to when executing the Redirect instruction
 * @property region - The region where we should mix the conference audio
 * @property reservationStatus - The new status of the reservation
 * @property sipAuthPassword - The SIP password for authentication
 * @property sipAuthUsername - The SIP username used for authentication
 * @property startConferenceOnEnter - Whether the conference starts when the participant joins the conference
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackEvent - The call progress events that we will send to status_callback
 * @property statusCallbackMethod - The HTTP method we should use to call status_callback
 * @property timeout - The timeout for a call when executing a Conference instruction
 * @property to - The Contact URI of the worker when executing a Conference instruction
 * @property waitMethod - The HTTP method we should use to call `wait_url`
 * @property waitUrl - URL that hosts pre-conference hold music
 * @property workerActivitySid - The new worker activity SID if rejecting a reservation
 */
interface ReservationInstanceUpdateOptions {
  beep?: string;
  beepOnCustomerEntrance?: boolean;
  callAccept?: boolean;
  callFrom?: string;
  callRecord?: string;
  callStatusCallbackUrl?: string;
  callTimeout?: number;
  callTo?: string;
  callUrl?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: ReservationConferenceEvent | ReservationConferenceEvent[];
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  dequeueFrom?: string;
  dequeuePostWorkActivitySid?: string;
  dequeueRecord?: string;
  dequeueStatusCallbackEvent?: string | string[];
  dequeueStatusCallbackUrl?: string;
  dequeueTimeout?: number;
  dequeueTo?: string;
  earlyMedia?: boolean;
  endConferenceOnCustomerExit?: boolean;
  endConferenceOnExit?: boolean;
  from?: string;
  ifMatch?: string;
  instruction?: string;
  maxParticipants?: number;
  muted?: boolean;
  postWorkActivitySid?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackMethod?: string;
  redirectAccept?: boolean;
  redirectCallSid?: string;
  redirectUrl?: string;
  region?: string;
  reservationStatus?: ReservationStatus;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: ReservationCallStatus | ReservationCallStatus[];
  statusCallbackMethod?: string;
  timeout?: number;
  to?: string;
  waitMethod?: string;
  waitUrl?: string;
  workerActivitySid?: string;
}

interface ReservationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ReservationContext;
  /**
   * Streams ReservationInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: ReservationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams ReservationInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ReservationListInstanceEachOptions, callback?: (item: ReservationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a reservation
   *
   * @param sid - The SID of the WorkerReservation resource to fetch
   */
  get(sid: string): ReservationContext;
  /**
   * Retrieve a single target page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  /**
   * Retrieve a single target page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  /**
   * Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ReservationInstance[]) => any): Promise<ReservationInstance[]>;
  /**
   * Lists ReservationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ReservationListInstanceOptions, callback?: (error: Error | null, items: ReservationInstance[]) => any): Promise<ReservationInstance[]>;
  /**
   * Retrieve a single page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  /**
   * Retrieve a single page of ReservationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ReservationListInstancePageOptions, callback?: (error: Error | null, items: ReservationPage) => any): Promise<ReservationPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property reservationStatus - Returns the list of reservations for a worker with a specified ReservationStatus
 */
interface ReservationListInstanceEachOptions {
  callback?: (item: ReservationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  reservationStatus?: ReservationStatus;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property reservationStatus - Returns the list of reservations for a worker with a specified ReservationStatus
 */
interface ReservationListInstanceOptions {
  limit?: number;
  pageSize?: number;
  reservationStatus?: ReservationStatus;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property reservationStatus - Returns the list of reservations for a worker with a specified ReservationStatus
 */
interface ReservationListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  reservationStatus?: ReservationStatus;
}

interface ReservationPayload extends ReservationResource, Page.TwilioResponsePayload {
}

interface ReservationResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  links: string;
  reservation_status: ReservationStatus;
  sid: string;
  task_sid: string;
  url: string;
  worker_name: string;
  worker_sid: string;
  workspace_sid: string;
}

interface ReservationSolution {
  workerSid?: string;
  workspaceSid?: string;
}


declare class ReservationContext {
  /**
   * Initialize the ReservationContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The SID of the Workspace with the WorkerReservation resource to fetch
   * @param workerSid - The SID of the reserved Worker resource with the WorkerReservation resource to fetch
   * @param sid - The SID of the WorkerReservation resource to fetch
   */
  constructor(version: V1, workspaceSid: string, workerSid: string, sid: string);

  /**
   * fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ReservationInstance) => any): Promise<ReservationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ReservationInstance) => any): Promise<ReservationInstance>;
  /**
   * update a ReservationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ReservationInstanceUpdateOptions, callback?: (error: Error | null, items: ReservationInstance) => any): Promise<ReservationInstance>;
}


declare class ReservationInstance extends SerializableClass {
  /**
   * Initialize the ReservationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The SID of the Workspace that this worker is contained within.
   * @param workerSid - The SID of the reserved Worker resource
   * @param sid - The SID of the WorkerReservation resource to fetch
   */
  constructor(version: V1, payload: ReservationPayload, workspaceSid: string, workerSid: string, sid: string);

  private _proxy: ReservationContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ReservationInstance) => any): Promise<ReservationInstance>;
  links: string;
  reservationStatus: ReservationStatus;
  sid: string;
  taskSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ReservationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ReservationInstance) => any): Promise<ReservationInstance>;
  /**
   * update a ReservationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ReservationInstanceUpdateOptions, callback?: (error: Error | null, items: ReservationInstance) => any): Promise<ReservationInstance>;
  url: string;
  workerName: string;
  workerSid: string;
  workspaceSid: string;
}


declare class ReservationPage extends Page<V1, ReservationPayload, ReservationResource, ReservationInstance> {
  /**
   * Initialize the ReservationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ReservationSolution);

  /**
   * Build an instance of ReservationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ReservationPayload): ReservationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ReservationCallStatus, ReservationConferenceEvent, ReservationContext, ReservationInstance, ReservationInstanceUpdateOptions, ReservationList, ReservationListInstance, ReservationListInstanceEachOptions, ReservationListInstanceOptions, ReservationListInstancePageOptions, ReservationPage, ReservationPayload, ReservationResource, ReservationSolution, ReservationStatus }
