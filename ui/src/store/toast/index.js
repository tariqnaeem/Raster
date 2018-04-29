import { TOAST_NOTIFY } from './actions';
import { toast } from 'react-toastify';

/**
 * Listen for any toast-y messages and pass to UI.
 */
const toastMiddleware = () => (next) => (action) => {
	if (action.type === TOAST_NOTIFY) {
		switch (action.style) {
			case 'error':
				toast.error(action.message, action.settings);
				break;
			case 'success':
				toast.success(action.message, action.settings);
				break;
			case 'info':
			default:
				toast.info(action.message, action.settings);
				break;
		}
	}

	return next(action);
};

export default toastMiddleware;
