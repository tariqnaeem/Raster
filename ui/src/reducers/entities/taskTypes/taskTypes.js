import merge from 'lodash/merge';
import hasIn from 'lodash/hasIn';

export default (state = {}, action) => {
  switch (action.type) {
    default: {
      if (hasIn(action.response, 'entities.taskTypes')) {
        return merge({}, state, action.response.entities.taskTypes)
      }
      return state;
    }
  }
}
