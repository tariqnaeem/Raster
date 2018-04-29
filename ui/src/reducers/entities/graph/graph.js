import merge from 'lodash/merge';
import hasIn from 'lodash/hasIn';

import * as type from '../../../actions/types';

function populateGraph(state, action) {
  return {
      ...state, isFetching: false,
      populateGraph: action.response
}
}

export default (state = {}, action) => {
  switch (action.type) {
      // REQUEST ACTIONS

    case type.POPULATE_GRAPH[type.REQUEST]:
      return { ...state, isFetching: true }

  // SUCCESS ACTIONS
case type.POPULATE_GRAPH[type.SUCCESS]:
  return populateGraph(state, action)

  // FAILURE ACTIONS
case type.POPULATE_GRAPH[type.FAILURE]:
  return { ...state, isFetching: false }

  // DEFAULT ACTION
default: {
    return { ...state, isFetching: false }
  }
}
}
