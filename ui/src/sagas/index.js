import { all, call, put, take, takeEvery, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions';
import * as type from '../actions/types';
import * as api from '../services';

const DEFAULT = {
  putRequest: false,
  closeModal: false,
  clearComment: false
}

const SERVER_TIMEOUT_MS = process.env.REACT_APP_SERVER_TIMEOUT_MS || 15000; // 15 secs

/*
 * Reusable fetch mechanism
 * entity: assignments | engineers
 * apiFn: fetchAssignments | fetchEngineers
 * args: filters params for filtering assignments || payload
 */
function* fetchEntityWithTimeout(options = DEFAULT, entity, apiFn, args) {

  options = Object.assign({}, DEFAULT, options);

  if (options.putRequest) {
    yield put(entity.request());
  }

  const { serverResponse: {response, error} } = yield race({
    serverResponse: call(apiFn, args),
    timeout: call(delay, SERVER_TIMEOUT_MS) // if server doesn't respond within n secs dispatch a timeout error
  })

  if (response) {
    yield put(entity.success(response, args));
    if (options.closeModal) yield put(actions.closeModal());
  } else {
    const { type } = entity.request();
    const errorMsg = error ? error : `${type} timeout error.`;
    yield put(entity.failure(errorMsg))
    yield put(actions.addNotification(errorMsg))
  }
}

export const getDiscrepanciesFx = fetchEntityWithTimeout.bind(null, null, actions.getDiscrepancies, api.getDiscrepancies);

export const populateGraphFx = fetchEntityWithTimeout.bind(null, null, actions.populateGraph, api.populateGraph);


function* displayAlert(message) {
  yield put(actions.showAlert(message));
  yield take(type.ACCEPT_ALERT);
  yield put(actions.dismissAlert());
}

function* hideAlert() {
  yield put(actions.dismissAlert());
}

function* getDiscrepancies(action) {
  const { type, ...payload } = action;
  yield call(getDiscrepanciesFx, { ...payload });
}

function* populateGraph(action) {
  const { type, ...payload } = action;
  yield call(populateGraphFx, { ...payload });
}

function* loadEntities() {
  yield all([
    call(getDiscrepancies),
      call(displayAlert),
      call(populateGraph)
  ]);
}

export default function* rootSaga() {
  yield all([
    takeEvery(type.ACCEPT_ALERT, hideAlert), //This is here as a placeholder, should be removed when you need a different action on accept alert
    takeEvery(type.FETCH_DISCREPANCIES[type.REQUEST], getDiscrepancies),
    takeEvery(type.POPULATE_GRAPH[type.REQUEST], populateGraph),
    takeEvery(type.INIT_BONES, loadEntities)
  ])
}
