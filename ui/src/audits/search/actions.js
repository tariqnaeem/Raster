import { requestAudits } from '../actions';

export const UPDATE_SEARCH_FORM = 'UPDATE_SEARCH_FORM';
export const HAS_SUBMITTED_SEARCH = 'HAS_SUBMITTED_QUERY';

/**
 * Update search form values.
 *
 * @param {String} name 
 * @param {Mixed} value
 * @return {Object}
 */
export const updateForm = (name, value) => ({
	type: UPDATE_SEARCH_FORM,
	query: {
		[name]: value,
	},
});

/**
 * Set flag to notify search has been submitted.
 * 
 * @return {Object}
 */
export const hasSubmittedQuery = () => ({
	type: HAS_SUBMITTED_SEARCH,
});

/**
 * Notify query has been submitted, Execute report.
 *
 * @param {Object} parameters
 * @return {Object}
 */
export const filterReports = (parameters) => (dispatch) => {
	dispatch(hasSubmittedQuery());
	dispatch(requestAudits(parameters));
};
