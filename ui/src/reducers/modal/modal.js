import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/types';

const initialState = {
  modalContentType: null,
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalContentType: action.modalContentType,
        isOpen: true,
        assignmentId: action.assignmentId
      }
    case CLOSE_MODAL:
      return initialState
    default:
     return state
  }
}
