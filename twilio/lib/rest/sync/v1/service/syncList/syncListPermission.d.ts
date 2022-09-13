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

/**
 * Initialize the SyncListPermissionList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Sync Service that the resource is associated with
 * @param listSid - The SID of the Sync List to which the Permission applies
 */
declare function SyncListPermissionList(version: V1, serviceSid: string, listSid: string): SyncListPermissionListInstance;

/**
 * Options to pass to update
 *
 * @property manage - Manage access
 * @property read - Read access
 * @property write - Write access
 */
interface SyncListPermissionInstanceUpdateOptions {
  manage: boolean;
  read: boolean;
  write: boolean;
}

interface SyncListPermissionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncListPermissionContext;
  /**
   * Streams SyncListPermissionInstance records from the API.
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
  each(callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncListPermissionInstance records from the API.
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
  each(opts?: SyncListPermissionListInstanceEachOptions, callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_list_permission
   *
   * @param identity - The application-defined string that uniquely identifies the User's Sync List Permission resource to fetch
   */
  get(identity: string): SyncListPermissionContext;
  /**
   * Retrieve a single target page of SyncListPermissionInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
  /**
   * Retrieve a single target page of SyncListPermissionInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
  /**
   * Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncListPermissionInstance[]) => any): Promise<SyncListPermissionInstance[]>;
  /**
   * Lists SyncListPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncListPermissionListInstanceOptions, callback?: (error: Error | null, items: SyncListPermissionInstance[]) => any): Promise<SyncListPermissionInstance[]>;
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
  /**
   * Retrieve a single page of SyncListPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncListPermissionListInstancePageOptions, callback?: (error: Error | null, items: SyncListPermissionPage) => any): Promise<SyncListPermissionPage>;
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
 */
interface SyncListPermissionListInstanceEachOptions {
  callback?: (item: SyncListPermissionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
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
 */
interface SyncListPermissionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SyncListPermissionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncListPermissionPayload extends SyncListPermissionResource, Page.TwilioResponsePayload {
}

interface SyncListPermissionResource {
  account_sid: string;
  identity: string;
  list_sid: string;
  manage: boolean;
  read: boolean;
  service_sid: string;
  url: string;
  write: boolean;
}

interface SyncListPermissionSolution {
  listSid?: string;
  serviceSid?: string;
}


declare class SyncListPermissionContext {
  /**
   * Initialize the SyncListPermissionContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Sync Service with the Sync List Permission resource to fetch
   * @param listSid - The SID of the Sync List with the Sync List Permission resource to fetch
   * @param identity - The application-defined string that uniquely identifies the User's Sync List Permission resource to fetch
   */
  constructor(version: V1, serviceSid: string, listSid: string, identity: string);

  /**
   * fetch a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
  /**
   * remove a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListPermissionInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
}


declare class SyncListPermissionInstance extends SerializableClass {
  /**
   * Initialize the SyncListPermissionContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Sync Service that the resource is associated with
   * @param listSid - The SID of the Sync List to which the Permission applies
   * @param identity - The application-defined string that uniquely identifies the User's Sync List Permission resource to fetch
   */
  constructor(version: V1, payload: SyncListPermissionPayload, serviceSid: string, listSid: string, identity: string);

  private _proxy: SyncListPermissionContext;
  accountSid: string;
  /**
   * fetch a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
  identity: string;
  listSid: string;
  manage: boolean;
  read: boolean;
  /**
   * remove a SyncListPermissionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListPermissionInstance) => any): Promise<boolean>;
  serviceSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncListPermissionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SyncListPermissionInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListPermissionInstance) => any): Promise<SyncListPermissionInstance>;
  url: string;
  write: boolean;
}


declare class SyncListPermissionPage extends Page<V1, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionInstance> {
  /**
   * Initialize the SyncListPermissionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncListPermissionSolution);

  /**
   * Build an instance of SyncListPermissionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListPermissionPayload): SyncListPermissionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SyncListPermissionContext, SyncListPermissionInstance, SyncListPermissionInstanceUpdateOptions, SyncListPermissionList, SyncListPermissionListInstance, SyncListPermissionListInstanceEachOptions, SyncListPermissionListInstanceOptions, SyncListPermissionListInstancePageOptions, SyncListPermissionPage, SyncListPermissionPayload, SyncListPermissionResource, SyncListPermissionSolution }
