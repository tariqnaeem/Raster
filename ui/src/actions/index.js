import * as type from './types';
import { notifySuccess } from '../store/toast/actions';

const actionCreator = (type, payload = {}) => {

	return { type, ...payload };
};

export const initBones = () => actionCreator(type.INIT_BONES);


export const openModal = (modalContentType, assignmentId) => actionCreator(type.OPEN_MODAL, { modalContentType, assignmentId });
export const closeModal = () => actionCreator(type.CLOSE_MODAL);
export const addNotification = (message) => actionCreator(type.ADD_NOTIFICATION, { message });
export const removeNotification = (id) => actionCreator(type.REMOVE_NOTIFICATION, { id });
export const showAlert = (message) => actionCreator(type.SHOW_ALERT, { message });
export const dismissAlert = () => actionCreator(type.DISMISS_ALERT);
export const acceptAlert = () => actionCreator(type.ACCEPT_ALERT);
export const stopLoading = () => actionCreator(type.STOP_LOADING);


export const getDiscrepancies = {
	request: (payload) => (dispatch) => {
		dispatch(notifySuccess('Migration file has been uploaded. You will be notified when processing is complete.'));
		dispatch(actionCreator(type.FETCH_DISCREPANCIES[type.REQUEST], {...payload}));
	},
	success: (response, args) => (dispatch) => {
		dispatch(notifySuccess(`Migration file ${args.fileName} has been processed. Refresh the page to see the results.`, { autoClose: 15000 }));
		dispatch(actionCreator(type.FETCH_DISCREPANCIES[type.SUCCESS], { response, ...args }));
	},
	failure: (error) => actionCreator(type.FETCH_DISCREPANCIES[type.FAILURE], {error}),

};

export const populateGraph = {
	
	request: (payload) => (dispatch) => {
		dispatch(actionCreator(type.POPULATE_GRAPH[type.REQUEST], {...payload}));
	},
	success: (response, args) => (dispatch) => {
		dispatch(actionCreator(type.POPULATE_GRAPH[type.SUCCESS], { response, ...args }));
	},
	failure: (error) => actionCreator(type.POPULATE_GRAPH[type.FAILURE], {error}),

};


