import { get, post } from '../services';
import uuidv4 from 'uuid/v4';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const PROJECTS_ERROR = 'PROJECTS_ERROR';
export const IS_REQUESTING_PROJECTS = 'IS_REQUESTING_PROJECTS';






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
	
	return post('RDL-Ingest-Project', { "bucketName": bucketName, "projectName": projectName, "dataCustodian": dataCustodian, "folder" : folder })
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
};


/**
 * Request Unpublished Projects from API.
 * 
 * @param {Object} params
 * @param {Integer} limit
 * @param {Integer} offset
 * @return {Promise}
 */
export const requestUnIngestedProjects = (custodian, showAll) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return post('RDL-Publish-ListProjects',{ "dataCustodian": custodian, "showAll": showAll, "showUningested": true })
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
	
	
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
 * Prepare error to send to reducer.
 *
 * @param {Object} error 
 * @return {Object}
 */
export const requestProjectsError = (error) => ({
	type: PROJECTS_ERROR,
	error,
});
