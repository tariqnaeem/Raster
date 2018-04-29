import reducer from './modal';
import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/types';
import { CREATE_ASSIGNMENT_FORM } from '../../constants/modalContentTypes';

const initialState = {
  modalContentType: null,
  isOpen: false
};

describe('modals reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  });

  it('should open the modal per type', () => {
    expect(
      reducer({
        modalContentType: null
      }, {
        type: OPEN_MODAL,
        modalContentType: CREATE_ASSIGNMENT_FORM
      })
    ).toEqual({
      modalContentType: CREATE_ASSIGNMENT_FORM,
      isOpen: true
    })
  })

  it('should close the modals', () => {
    expect(
      reducer({
        modalContentType: CREATE_ASSIGNMENT_FORM
      }, {
        type: CLOSE_MODAL
      })
    ).toEqual({
      modalContentType: null,
      isOpen: false
    })
  })
})
