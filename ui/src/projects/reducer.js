
import {
	REQUEST_PROJECTS,
	IS_REQUESTING_PROJECTS,
	PROJECTS_ERROR,
	IS_REQUESTING_EDIT_METADATA, 
	REQUEST_EDIT_METADATA, 
	METADATA_ERROR,
	DIRECTORY_ERROR,
	REQUEST_DIRECTORY,
	IS_REQUESTING_DIRECTORY,
	IS_REQUESTING_METADATA,
	REQUEST_METADATA,
	IS_REQUESTING_PUBLISH_PROJECTS,
	IS_PUBLISH_PROJECTS,
	PUBLISH_PROJECTS_ERROR

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

	switch (action.type) {
		case IS_REQUESTING_PROJECTS:
			updated = {
				isReady: false,
			};
			break;
		case IS_REQUESTING_PUBLISH_PROJECTS:
			updated = {
				IsReadyPublishProjects: false,
			};
			break;
		case IS_PUBLISH_PROJECTS:
			updated = {
				IsReadyPublishProjects: true,
				publishProjects: action.publishProjects,
			};
			break;
		
		case PUBLISH_PROJECTS_ERROR:	
			
				
				updated = {
				Error : action.error,
				IsReadyPublishProjects: true,
			}
			break;
		case IS_REQUESTING_EDIT_METADATA:
			updated = {
				IsReadyMetaData: false,
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
				IsReadyMetaData: true,
				response: action.response,
			};
			break;
		case METADATA_ERROR:
			updated = initialState;
			break;
		case PROJECTS_ERROR:
			
			updated = {
				Error : action.error,
				isReady: false,
				projects : ""
			}
			
			break;
		
		case IS_REQUESTING_DIRECTORY:
			updated = {
				isDirectory: false,
			};
			break;
		case IS_REQUESTING_METADATA:
			updated = {
				IsReadyMetaData: false,
			};
			break;
		case REQUEST_DIRECTORY:
			updated = {
				isDirectory: true,
				directory: action.directory
			}
			break;
		case REQUEST_METADATA:
		updated = {
			IsReadyMetaData: true,
			metaData: action.metaData
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
