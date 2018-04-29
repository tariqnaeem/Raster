import search from './search/reducer';
import pagination from './pagination/reducer';
import { normalize } from './helpers';

import {
	IS_REQUESTING_AUDITS,
	REQUEST_AUDITS,
	REQUEST_AUDITS_ERROR } from './actions';

const initialState = {};

/**
 *
 *
 * @param {Object} state
 * @return {Object}
 */
export const getState = ({ audits = {} }) => audits;

const reducer = (state = initialState, action) => {
	let updated = initialState;

	switch (action.type) {
		case IS_REQUESTING_AUDITS:
			updated = {
				isReady: false,
			};
			break;
		case REQUEST_AUDITS:
			updated = {
				isReady: true,
				audits: action.audits.map(normalize),
			};
			break;
		case REQUEST_AUDITS_ERROR:
			updated = initialState;
			break;
	}

	return {
		...state,
		...updated,
		search: search(state.search, action),
		pagination: pagination(state.pagination, action),
	};
};

export default reducer;
