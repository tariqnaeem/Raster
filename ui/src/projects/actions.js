import { get, post, postIngest } from '../services';
import uuidv4 from 'uuid/v4';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const PROJECTS_ERROR = 'PROJECTS_ERROR';
export const IS_REQUESTING_PROJECTS = 'IS_REQUESTING_PROJECTS';

export const IS_REQUESTING_EDIT_METADATA = 'IS_REQUESTING_EDIT_METADATA'; 
export const REQUEST_EDIT_METADATA = 'REQUEST_EDIT_METADATA'; 
export const METADATA_ERROR = 'METADATA_ERROR'; 







/**
 * Request Unpublished Projects from API.
 * 
 * @param {Object} params
 * @param {Integer} limit
 * @param {Integer} offset
 * @return {Promise}
 */
export const requestUnPublishProjects = (custodian, showAll) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return post('RDL-Publish-ListProjects',{ "dataCustodian": custodian, "showAll": showAll, "showUningested": true })
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
	
	
};


/**
 * Request PUBLISH Project from API.
 * 
 * @param {String} projectName
 * @param {String} emailReport
 * @param {Bool} returnReport
 * @param {Bool} publish
 * @return {Promise}
 */

export const requestPublishProject = ( projectName, emailReport, returnReport, publish) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return post('RDL-Publish-ValidateProject', { "project": projectName, "emailReport": emailReport, "returnReport" : returnReport, "publish" : publish })
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
};


/**
 * Request INGEST Project from API.
 * 
 * @param {String} bucketName
 * @param {String} projectName
 * @param {String} dataCustodian
 * @param {String} folder
 * @return {Promise}
 */
export const requestIngestProject = (bucketName, projectName, dataCustodian, folder) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return postIngest('RDL-Ingest-Project', { "bucketName": bucketName, "projectName": projectName, "dataCustodian": dataCustodian, "folder" : folder })
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
};


/**
 * Request Unpublished Projects from API.
 * 
 * @param {Custodian} 
 * @param {Show All} 
 * @return {Promise}
 */
export const requestUnIngestedProjects = (custodian, showAll) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return post('RDL-Publish-ListProjects',{ "dataCustodian": custodian, "showAll": showAll, "showUningested": true })
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
};


/**
 * Request Project MetaData from API.
 * 
 * @param {Object} params
 * @param {Integer} limit
 * @param {Integer} offset
 * @return {Promise}
 */
export const requestProjectMetaData = (project, objectPath) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return post('RDL-Publish-ListMetadata',{ "project": project, "objectPath": objectPath })
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
	
	
};

/**
 * Request Project Edit MetaData from API.
 * 
 * @param {Object} 
 * @return {Promise}
 */
/**
 * {
"project": "Test-Publish",
"objectPath": "rdsdatalakelambdatesting/Test-Publish/data",
"updates": [
{
"name": "ANZLicId",
"value": "12345678",
"recursive": "true",
"overwriteChildren": "true"
},
{
"name": "datasetName",
"value": "dataset-02",
"recursive": "true",
"overwriteChildren": "true"
} ,
{
"name": "datasetOwnerId",
"value": "Akash",
"recursive": "true",
"overwriteChildren": "true"
}
]
}
 */
export const requestProjectEditMetaData = (project, objectPath, updates) => (dispatch) => {

	dispatch(isRequestingEditMetaData());
	return post('RDL-Publish-EditMetadata',{ "project": project, "objectPath": objectPath, "updates":updates })
			.then((response) => dispatch(requestProjectEditMetaDataSuccess(response)))
			.catch((error) => dispatch(requestProjectEditMetaDataError(error)));
	
	
};




/**
 * Clear / reset reducer to load projects.
 *
 * @return {Object}
 */
export const isRequestingProjects = () => ({
	type: IS_REQUESTING_PROJECTS,
	IsReady: false
});

/**
 * Clear / reset reducer to load.
 *
 * @return {Object}
 */
export const isRequestingEditMetaData = () => ({
	type: IS_REQUESTING_EDIT_METADATA,
	IsReady: false
});




/**
 * Successful loading of unpublished projects.
 *
 * @param {Object} projects
 * @return {Object}
 */
export const requestProjectsSuccess = (projects) => ({
	
	type: REQUEST_PROJECTS,
	projects: projects,
	IsReady: true
	
});


/**
 * Successful
 *
 * @param {Object} projects
 * @return {Object}
 */




export const requestProjectEditMetaDataSuccess = (response) => ({
	
	type: REQUEST_EDIT_METADATA,
	response: response,
	IsReady: true
	
});

/**
 * Prepare error to send to reducer.
 *
 * @param {Object} error 
 * @return {Object}
 */
export const requestProjectEditMetaDataError = (error) => ({
	type: METADATA_ERROR,
	error,
});



/**
 * Prepare error to send to reducer.
 *
 * @param {Object} error 
 * @return {Object}
 */
export const requestProjectsError = (error) => ({
	type: PROJECTS_ERROR,
	error,
});
