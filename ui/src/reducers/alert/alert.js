import { SHOW_ALERT, DISMISS_ALERT } from '../../actions/types';

const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        message: action.message,
        isOpen: true,
      }
    case DISMISS_ALERT:
      return {
        ...state,
        isOpen: false
      }
    default:
     return state
  }
}
