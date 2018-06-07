
import {
	REQUEST_PROJECTS,
	IS_REQUESTING_PROJECTS,
	PROJECTS_ERROR
	} from './actions';

const initialState = {};

/**
 *
 *
 * @param {Object} state
 * @return {Object}
 */
export const getState = ({ projects = {} }) => projects;

const reducer = (state = initialState, action) => {
	let updated = initialState;
	
	switch (action.type) {
		case IS_REQUESTING_PROJECTS:
			updated = {
				isReady: false,
			};
			break;
		case REQUEST_PROJECTS:
			updated = {
				isReady: true,
				projects: action.rows,
			};
			break;
		case PROJECTS_ERROR:
			updated = initialState;
			break;
	}

	return {
		...state,
		...updated
	};
};

export default reducer;
