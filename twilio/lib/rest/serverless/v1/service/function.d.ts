/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { FunctionVersionList } from './function/functionVersion';
import { FunctionVersionListInstance } from './function/functionVersion';
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the FunctionList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the Function resource is associated with
 */
declare function FunctionList(version: V1, serviceSid: string): FunctionListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A string to describe the Function resource
 */
interface FunctionInstanceUpdateOptions {
  friendlyName: string;
}

interface FunctionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FunctionContext;
  /**
   * create a FunctionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FunctionListInstanceCreateOptions, callback?: (error: Error | null, item: FunctionInstance) => any): Promise<FunctionInstance>;
  /**
   * Streams FunctionInstance records from the API.
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
  each(callback?: (item: FunctionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FunctionInstance records from the API.
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
  each(opts?: FunctionListInstanceEachOptions, callback?: (item: FunctionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a function
   *
   * @param sid - The SID of the Function resource to fetch
   */
  get(sid: string): FunctionContext;
  /**
   * Retrieve a single target page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  /**
   * Retrieve a single target page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  /**
   * Lists FunctionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FunctionInstance[]) => any): Promise<FunctionInstance[]>;
  /**
   * Lists FunctionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FunctionListInstanceOptions, callback?: (error: Error | null, items: FunctionInstance[]) => any): Promise<FunctionInstance[]>;
  /**
   * Retrieve a single page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  /**
   * Retrieve a single page of FunctionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FunctionListInstancePageOptions, callback?: (error: Error | null, items: FunctionPage) => any): Promise<FunctionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A string to describe the Function resource
 */
interface FunctionListInstanceCreateOptions {
  friendlyName: string;
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
interface FunctionListInstanceEachOptions {
  callback?: (item: FunctionInstance, done: (err?: Error) => void) => void;
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
interface FunctionListInstanceOptions {
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
interface FunctionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FunctionPayload extends FunctionResource, Page.TwilioResponsePayload {
}

interface FunctionResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface FunctionSolution {
  serviceSid?: string;
}


declare class FunctionContext {
  /**
   * Initialize the FunctionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the Function resource from
   * @param sid - The SID of the Function resource to fetch
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FunctionInstance) => any): Promise<FunctionInstance>;
  functionVersions: FunctionVersionListInstance;
  /**
   * remove a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FunctionInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FunctionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FunctionInstanceUpdateOptions, callback?: (error: Error | null, items: FunctionInstance) => any): Promise<FunctionInstance>;
}


declare class FunctionInstance extends SerializableClass {
  /**
   * Initialize the FunctionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the Function resource is associated with
   * @param sid - The SID of the Function resource to fetch
   */
  constructor(version: V1, payload: FunctionPayload, serviceSid: string, sid: string);

  private _proxy: FunctionContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FunctionInstance) => any): Promise<FunctionInstance>;
  friendlyName: string;
  /**
   * Access the functionVersions
   */
  functionVersions(): FunctionVersionListInstance;
  links: string;
  /**
   * remove a FunctionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FunctionInstance) => any): Promise<boolean>;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FunctionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: FunctionInstanceUpdateOptions, callback?: (error: Error | null, items: FunctionInstance) => any): Promise<FunctionInstance>;
  url: string;
}


declare class FunctionPage extends Page<V1, FunctionPayload, FunctionResource, FunctionInstance> {
  /**
   * Initialize the FunctionPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: FunctionSolution);

  /**
   * Build an instance of FunctionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FunctionPayload): FunctionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FunctionContext, FunctionInstance, FunctionInstanceUpdateOptions, FunctionList, FunctionListInstance, FunctionListInstanceCreateOptions, FunctionListInstanceEachOptions, FunctionListInstanceOptions, FunctionListInstancePageOptions, FunctionPage, FunctionPayload, FunctionResource, FunctionSolution }