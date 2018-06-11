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






