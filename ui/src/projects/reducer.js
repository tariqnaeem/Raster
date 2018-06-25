
import {
	REQUEST_PROJECTS,
	IS_REQUESTING_PROJECTS,
	PROJECTS_ERROR,
	IS_REQUESTING_EDIT_METADATA, 
	REQUEST_EDIT_METADATA, 
	METADATA_ERROR,
	DIRECTORY_ERROR,
	REQUEST_DIRECTORY,
	IS_REQUESTING_DIRECTORY
} from './actions';

const initialState = {};

/**
 *
 *
 * @param {Object} state
 * @return {Object}
 */
export const getState = ({ projects = {} }) => reducer;

const reducer = (state = initialState, action) => {
	let updated = initialState;
console.log(action);
	switch (action.type) {
		case IS_REQUESTING_PROJECTS:
			updated = {
				isReady: false,
			};
			break;
		case IS_REQUESTING_EDIT_METADATA:
			updated = {
				isReady: false,
			};
			break;
		case REQUEST_PROJECTS:
			updated = {
				isReady: true,
				projects: action.projects,
			};
			break;
		case REQUEST_EDIT_METADATA:
			updated = {
				isReady: true,
				response: action.response,
			};
			break;
		case METADATA_ERROR:
			updated = initialState;
			break;
		case PROJECTS_ERROR:
			updated = initialState;
			break;
		case IS_REQUESTING_DIRECTORY:
			updated = {
				isDirectory: false,
			};
			break;
		case REQUEST_DIRECTORY:
			updated = {
				isDirectory: true,
				directory: action.directory
			}
			break;
		case DIRECTORY_ERROR:
			updated = initialState;
			break;
	}
	

	return {
		...state,
		...updated
	};
};

export default reducer;
