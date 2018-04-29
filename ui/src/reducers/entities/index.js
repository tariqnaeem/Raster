import { combineReducers } from 'redux';
import discrepancies from './discrepancies';
import graph from './graph';

export default combineReducers({
  discrepancies, graph
});
