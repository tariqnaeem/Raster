import merge from 'lodash/merge';
import hasIn from 'lodash/hasIn';

import * as type from '../../../actions/types';

function loadDiscrepancies(state, action) {
  return {
      ...state, isFetching: false,
      discrepancies: action.response
}
}

export default (state = {}, action) => {
  switch (action.type) {
      // REQUEST ACTIONS

    case type.FETCH_DISCREPANCIES[type.REQUEST]:
      return { ...state, isFetching: true }

  // SUCCESS ACTIONS
case type.FETCH_DISCREPANCIES[type.SUCCESS]:
  return loadDiscrepancies(state, action)

  // FAILURE ACTIONS
case type.FETCH_DISCREPANCIES[type.FAILURE]:
  return { ...state, isFetching: false }

  // DEFAULT ACTION
default: {
    return { ...state, isFetching: false }
  }
}
}
