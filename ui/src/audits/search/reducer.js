import {
	UPDATE_SEARCH_FORM, HAS_SUBMITTED_SEARCH,
} from './actions';

export const getState = ({ audits }) => audits.search;

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SEARCH_FORM:
			return {
				query: {
					...state.query,
					...action.query,
				},
			};
		case HAS_SUBMITTED_SEARCH:
			return {
				...state,
				isSubmitted: true,
			};
		default:
			return state;
	}
};

export default reducer;
