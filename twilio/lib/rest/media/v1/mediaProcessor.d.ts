/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type MediaProcessorOrder = 'asc'|'desc';

type MediaProcessorStatus = 'failed'|'started'|'ended';

type MediaProcessorUpdateStatus = 'ended';

/**
 * Initialize the MediaProcessorList
 *
 * @param version - Version of the resource
 */
declare function MediaProcessorList(version: V1): MediaProcessorListInstance;

/**
 * Options to pass to update
 *
 * @property status - The status of the MediaProcessor
 */
interface MediaProcessorInstanceUpdateOptions {
  status: MediaProcessorUpdateStatus;
}

interface MediaProcessorListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MediaProcessorContext;
  /**
   * create a MediaProcessorInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MediaProcessorListInstanceCreateOptions, callback?: (error: Error | null, item: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
  /**
   * Streams MediaProcessorInstance records from the API.
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
  each(callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams MediaProcessorInstance records from the API.
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
  each(opts?: MediaProcessorListInstanceEachOptions, callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a media_processor
   *
   * @param sid - The SID that identifies the resource to fetch
   */
  get(sid: string): MediaProcessorContext;
  /**
   * Retrieve a single target page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  /**
   * Retrieve a single target page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  /**
   * Lists MediaProcessorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MediaProcessorInstance[]) => any): Promise<MediaProcessorInstance[]>;
  /**
   * Lists MediaProcessorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: MediaProcessorListInstanceOptions, callback?: (error: Error | null, items: MediaProcessorInstance[]) => any): Promise<MediaProcessorInstance[]>;
  /**
   * Retrieve a single page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  /**
   * Retrieve a single page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: MediaProcessorListInstancePageOptions, callback?: (error: Error | null, items: MediaProcessorPage) => any): Promise<MediaProcessorPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property extension - The Media Extension name or URL
 * @property extensionContext - The Media Extension context
 * @property extensionEnvironment - The Media Extension environment
 * @property maxDuration - Maximum MediaProcessor duration in minutes
 * @property statusCallback - The URL to send MediaProcessor event updates to your application
 * @property statusCallbackMethod - The HTTP method Twilio should use to call the `status_callback` URL
 */
interface MediaProcessorListInstanceCreateOptions {
  extension: string;
  extensionContext: string;
  extensionEnvironment?: object;
  maxDuration?: number;
  statusCallback?: string;
  statusCallbackMethod?: string;
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
 * @property order - The sort order of the list
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property status - Status to filter by
 */
interface MediaProcessorListInstanceEachOptions {
  callback?: (item: MediaProcessorInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  order?: MediaProcessorOrder;
  pageSize?: number;
  status?: MediaProcessorStatus;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - The sort order of the list
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property status - Status to filter by
 */
interface MediaProcessorListInstanceOptions {
  limit?: number;
  order?: MediaProcessorOrder;
  pageSize?: number;
  status?: MediaProcessorStatus;
}

/**
 * Options to pass to page
 *
 * @property order - The sort order of the list
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - Status to filter by
 */
interface MediaProcessorListInstancePageOptions {
  order?: MediaProcessorOrder;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: MediaProcessorStatus;
}

interface MediaProcessorPayload extends MediaProcessorResource, Page.TwilioResponsePayload {
}

interface MediaProcessorResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  ended_reason: string;
  extension: string;
  extension_context: string;
  max_duration: number;
  sid: string;
  status: MediaProcessorStatus;
  status_callback: string;
  status_callback_method: string;
  url: string;
}

interface MediaProcessorSolution {
}


declare class MediaProcessorContext {
  /**
   * Initialize the MediaProcessorContext
   *
   * @param version - Version of the resource
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a MediaProcessorInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MediaProcessorInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MediaProcessorInstanceUpdateOptions, callback?: (error: Error | null, items: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
}


declare class MediaProcessorInstance extends SerializableClass {
  /**
   * Initialize the MediaProcessorContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, payload: MediaProcessorPayload, sid: string);

  private _proxy: MediaProcessorContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  endedReason: string;
  extension: string;
  extensionContext: string;
  /**
   * fetch a MediaProcessorInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
  maxDuration: number;
  sid: string;
  status: MediaProcessorStatus;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a MediaProcessorInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MediaProcessorInstanceUpdateOptions, callback?: (error: Error | null, items: MediaProcessorInstance) => any): Promise<MediaProcessorInstance>;
  url: string;
}


declare class MediaProcessorPage extends Page<V1, MediaProcessorPayload, MediaProcessorResource, MediaProcessorInstance> {
  /**
   * Initialize the MediaProcessorPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: MediaProcessorSolution);

  /**
   * Build an instance of MediaProcessorInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MediaProcessorPayload): MediaProcessorInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { MediaProcessorContext, MediaProcessorInstance, MediaProcessorInstanceUpdateOptions, MediaProcessorList, MediaProcessorListInstance, MediaProcessorListInstanceCreateOptions, MediaProcessorListInstanceEachOptions, MediaProcessorListInstanceOptions, MediaProcessorListInstancePageOptions, MediaProcessorOrder, MediaProcessorPage, MediaProcessorPayload, MediaProcessorResource, MediaProcessorSolution, MediaProcessorStatus, MediaProcessorUpdateStatus }