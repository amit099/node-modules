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

/**
 * Initialize the EndUserList
 *
 * @param version - Version of the resource
 */
declare function EndUserList(version: V1): EndUserListInstance;

/**
 * Options to pass to update
 *
 * @property attributes - The set of parameters that compose the End User resource
 * @property friendlyName - The string that you assigned to describe the resource
 */
interface EndUserInstanceUpdateOptions {
  attributes?: object;
  friendlyName?: string;
}

interface EndUserListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EndUserContext;
  /**
   * create a EndUserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: EndUserListInstanceCreateOptions, callback?: (error: Error | null, item: EndUserInstance) => any): Promise<EndUserInstance>;
  /**
   * Streams EndUserInstance records from the API.
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
  each(callback?: (item: EndUserInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams EndUserInstance records from the API.
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
  each(opts?: EndUserListInstanceEachOptions, callback?: (item: EndUserInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a end_user
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): EndUserContext;
  /**
   * Retrieve a single target page of EndUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
  /**
   * Retrieve a single target page of EndUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
  /**
   * Lists EndUserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: EndUserInstance[]) => any): Promise<EndUserInstance[]>;
  /**
   * Lists EndUserInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: EndUserListInstanceOptions, callback?: (error: Error | null, items: EndUserInstance[]) => any): Promise<EndUserInstance[]>;
  /**
   * Retrieve a single page of EndUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
  /**
   * Retrieve a single page of EndUserInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: EndUserListInstancePageOptions, callback?: (error: Error | null, items: EndUserPage) => any): Promise<EndUserPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - The set of parameters that compose the End User resource
 * @property friendlyName - The string that you assigned to describe the resource
 * @property type - The type of end user of the Bundle resource
 */
interface EndUserListInstanceCreateOptions {
  attributes?: object;
  friendlyName: string;
  type: string;
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
interface EndUserListInstanceEachOptions {
  callback?: (item: EndUserInstance, done: (err?: Error) => void) => void;
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
interface EndUserListInstanceOptions {
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
interface EndUserListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface EndUserPayload extends EndUserResource, Page.TwilioResponsePayload {
}

interface EndUserResource {
  account_sid: string;
  attributes: object;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  type: string;
  url: string;
}

interface EndUserSolution {
}


declare class EndUserContext {
  /**
   * Initialize the EndUserContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a EndUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EndUserInstance) => any): Promise<EndUserInstance>;
  /**
   * remove a EndUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: EndUserInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a EndUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: EndUserInstance) => any): Promise<EndUserInstance>;
  /**
   * update a EndUserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: EndUserInstanceUpdateOptions, callback?: (error: Error | null, items: EndUserInstance) => any): Promise<EndUserInstance>;
}


declare class EndUserInstance extends SerializableClass {
  /**
   * Initialize the EndUserContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: EndUserPayload, sid: string);

  private _proxy: EndUserContext;
  accountSid: string;
  attributes: any;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a EndUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EndUserInstance) => any): Promise<EndUserInstance>;
  friendlyName: string;
  /**
   * remove a EndUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: EndUserInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: string;
  /**
   * update a EndUserInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: EndUserInstance) => any): Promise<EndUserInstance>;
  /**
   * update a EndUserInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: EndUserInstanceUpdateOptions, callback?: (error: Error | null, items: EndUserInstance) => any): Promise<EndUserInstance>;
  url: string;
}


declare class EndUserPage extends Page<V1, EndUserPayload, EndUserResource, EndUserInstance> {
  /**
   * Initialize the EndUserPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EndUserSolution);

  /**
   * Build an instance of EndUserInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EndUserPayload): EndUserInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { EndUserContext, EndUserInstance, EndUserInstanceUpdateOptions, EndUserList, EndUserListInstance, EndUserListInstanceCreateOptions, EndUserListInstanceEachOptions, EndUserListInstanceOptions, EndUserListInstancePageOptions, EndUserPage, EndUserPayload, EndUserResource, EndUserSolution }
