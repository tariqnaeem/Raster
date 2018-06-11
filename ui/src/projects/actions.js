import { get, post } from '../services';
import uuidv4 from 'uuid/v4';

import { stringify } from 'querystringify';
import { QUERY } from '../constants';


export const IS_REQUESTING_AUDITS = 'IS_REQUESTING_AUDITS';
export const REQUEST_AUDITS = 'REQUEST_AUDITS';
export const REQUEST_AUDITS_ERROR = 'REQUEST_AUDITS_ERROR';


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
export const requestUnIngestedProjects = (payload) => (dispatch) => {

	dispatch(isRequestingProjects());

	return 	post('RDL-Publish-ListProjects',payload)
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
export const requestUnPublishProjects = (params = {}, limit = 20, offset = 0) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return 	get('/sql?q='+QUERY.replace("YEAR", params.year ))
			.then((projects) => dispatch(requestProjectsSuccess(projects)))
			.catch((error) => dispatch(requestProjectsError(error)));
	
	
};

/**
 * Request Published Projects from API.
 * 
 * @param {Object} params
 * @param {Integer} limit
 * @param {Integer} offset
 * @return {Promise}
 */
export const requestPublishProjects = (params = {}, limit = 20, offset = 0) => (dispatch) => {

	dispatch(isRequestingProjects());
	
	return 	get('/sql?q='+QUERY.replace("YEAR", params.year ))
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
});



/**
 * Successful loading of unpublished projects.
 *
 * @param {Object} projects
 * @return {Object}
 */
export const requestProjectsSuccess = (projects) => ({
	type: REQUEST_PROJECTS,
	...projects,
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
