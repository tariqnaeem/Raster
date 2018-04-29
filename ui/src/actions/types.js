export const OPEN_MODAL          = 'OPEN_MODAL';
export const CLOSE_MODAL         = 'CLOSE_MODAL';
export const ADD_NOTIFICATION    = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const SHOW_ALERT          = 'SHOW_ALERT';
export const ACCEPT_ALERT        = 'ACCEPT_ALERT';
export const DISMISS_ALERT       = 'DISMISS_ALERT';
export const INIT_BONES          = 'INIT_BONES';
export const AVC_FILE_UPLOAD     = 'AVC_FILE_UPLOAD';
/*
 * Generate async types
 */
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc;
  }, {})
}

/*
 *  CRUD action types
 */
export const FETCH_USERS = createRequestTypes('FETCH_USERS');
export const FETCH_DISCREPANCIES = createRequestTypes('FETCH_DISCREPANCIES');
export const POPULATE_GRAPH = createRequestTypes('POPULATE_GRAPH');
export const STOP_LOADING        = 'STOP_LOADING';
