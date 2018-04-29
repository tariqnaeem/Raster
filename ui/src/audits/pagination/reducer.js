
import {
	IS_REQUESTING_AUDITS,
	REQUEST_AUDITS,
} from '../actions';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case IS_REQUESTING_AUDITS:
			return initialState;
		case REQUEST_AUDITS:
			return {
				total:  action.total,
				limit:  action.limit,
				offset: action.offset,
			};
		default:
			return state;
	}
};

export default reducer;
