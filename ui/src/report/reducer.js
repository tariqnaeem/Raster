import { REQUEST_REPORT } from './actions';

import { normalize } from 'normalizr';
import { reportsSchema } from './schema';

const initialState = {};

/**
 * 
 * @param {Object} state
 * @param {Object} params
 * @return {Object}
 */
export const getState = ({ report }, { reportGuid }) => {
	const { entities = {} } = report;

	return entities.reports
		? entities.reports[reportGuid] || {}
		: {};
};

export const updateReports = (state, reports) => {
	const normalized = normalize(reports, reportsSchema);

	const mergeResult = (fromState = [], normalized) => {
		return [
			...normalized,
			...fromState,
		];
	};

	const mergeEntities = (fromState, normalized) => {
		return {
			reports: {
				...((fromState && fromState.reports) ? fromState.reports: {}),
				...normalized.reports,
			},
		};
	};

	return {
		result:   mergeResult(state.result, normalized.result),
		entities: mergeEntities(state.entities, normalized.entities),
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_REPORT:
			return updateReports(state, action.audits);
		default:
			return state;
	}
};

export default reducer;
