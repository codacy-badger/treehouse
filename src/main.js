/**
 * Main entry point for the built Treehouse dist/library.
 * @module main
 * @exports Allthethings
 */

import ApiError, {
  AuthorizationError,
  InternalError,
  InvalidRequestError,
  ServiceUnavailableError,
} from 'treehouse/error';
import Logger from 'treehouse/utils/logger';
import Server from 'treehouse/server';

import * as codes from 'treehouse/error/codes';

export default Server;
export {
  ApiError,
  AuthorizationError,
  codes,
  InternalError,
  InvalidRequestError,
  Logger,
  ServiceUnavailableError,
};
