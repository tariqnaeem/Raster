import { get } from '../services';
import uuidv4 from 'uuid/v4';
import { getDiscrepancies } from '../actions';
import { stringify } from 'querystringify';
import { QUERY } from '../constants';


export const IS_REQUESTING_AUDITS = 'IS_REQUESTING_AUDITS';
export const REQUEST_AUDITS = 'REQUEST_AUDITS';
export const REQUEST_AUDITS_ERROR = 'REQUEST_AUDITS_ERROR';

/**
 * Rerun audit over supplied AVCs.
 * 
 * @param {String} file_name
 * @param {String} avcs
 * @return {Function}
 */
export const rerunAudit = (file_name, avcs) => (
	getDiscrepancies.request({
		avcs,
		fileName: file_name,
		localGuid: uuidv4(),
	})
);

/**
 * Request audits from API.
 * 
 * @param {Object} params
 * @param {Integer} limit
 * @param {Integer} offset
 * @return {Promise}
 */
export const requestAudits = (params = {}, limit = 20, offset = 0) => (dispatch) => {

	dispatch(isRequestingAudits());
	
	return get('/sql?q='+QUERY.replace("YEAR", '2016'))
		.then((audits) => dispatch(requestAuditsSuccess(audits)))
		.catch((error) => dispatch(requestAuditsError(error)));
};

/**
 * Clear / reset reducer to load audits.
 *
 * @return {Object}
 */
export const isRequestingAudits = () => ({
	type: IS_REQUESTING_AUDITS,
});

/**
 * Successful loading of audits.
 *
 * @param {Object} audits
 * @return {Object}
 */
export const requestAuditsSuccess = (audits) => ({
	type: REQUEST_AUDITS,
	...audits,
});

/**
 * Prepare error to send to reducer.
 *
 * @param {Object} error 
 * @return {Object}
 */
export const requestAuditsError = (error) => ({
	type: REQUEST_AUDITS_ERROR,
	error,
});
