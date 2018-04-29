import { SWITCH_VIEW } from './actions';

/**
 * Get state of content viewer reducer.
 * 
 * @param {Object} state
 * @return {Object}
 */
export const getState = ({ contentViewer }) => contentViewer;

const initialState = {};

export const reducer = (state = initialState, action) => {
	switch(action.type) {
		case SWITCH_VIEW:
			return {
				active: action.name,
				parameters: action.parameters,
			};
		default:
			return state;
	}
};

export default reducer;
