export const TOAST_NOTIFY = '@@TOAST_NOTIFY';

/**
 * Send toast error notification.
 *
 * @param {String} message
 * @param {Object} settings
 * @return {Object}
 */
export const notifyError = (message, settings) => notify(message, 'error', settings);

/**
 * Send toast success notification.
 *
 * @param {String} message
 * @param {Object} settings
 * @return {Object}
 */
export const notifySuccess = (message, settings) => notify(message, 'success', settings);

/**
 * Generic function for sending toast-y messages.
 *
 * @param {String} message
 * @param {String} style
 * @param {Object} settings
 * @return {Object}
 */
const notify = (message, style = 'info', settings) => ({
	type: TOAST_NOTIFY,
	message,
	style,
	settings,
});
