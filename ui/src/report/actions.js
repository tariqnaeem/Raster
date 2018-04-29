import { get } from '../services';

export const IS_REQUESTING_REPORT = 'IS_REQUESTING_REPORT';
export const REQUEST_REPORT = 'REQUEST_REPORT';
export const REQUEST_REPORT_ERROR = 'REQUEST_REPORT_ERROR';

/**
 * Request report from API.
 * 
 * @return {Promise}
 */
export const requestReport = (guid) => (dispatch) => {

	dispatch(isRequestingReport(guid));

	return get(`/audit?guid=${guid}`)
		.then((audits) => dispatch(requestReportSuccess(guid, audits)))
		.catch((error) => dispatch(requestReportError(guid, error)));
};

/**
 * Requesting report with guid.
 *
 * @param {String} guid
 * @return {Object}
 */
export const isRequestingReport = (guid) => ({
	type: IS_REQUESTING_REPORT,
	guid,
});

/**
 * Successfully load reports.
 *
 * @param {String} guid
 * @param {Object} result
 * @return {Object}
 */
export const requestReportSuccess = (guid, { audits = [] }) => ({
	type: REQUEST_REPORT,
	guid,
	audits,
});

/**
 * Notify report failed to load.
 *
 * @param {String} guid
 * @param {Object} error 
 * @return {Object}
 */
export const requestReportError = (guid, error) => ({
	type: REQUEST_REPORT_ERROR,
	guid,
	error,
});
