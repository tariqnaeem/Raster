import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return state.concat([
        {
          id: state.length + 1,
          message: action.message
        }
      ]);
    case REMOVE_NOTIFICATION:
      return state.reduce((accumulator, currentValue, currentIndex) => {
        if (currentValue.id === action.id) {
          return accumulator;
        } else {
          accumulator.push(currentValue)
          return accumulator;
        }
      }, [])
    default:
     return state
  }
}
