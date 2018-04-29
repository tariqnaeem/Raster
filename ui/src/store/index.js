import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // required by react-redux-form - use sagas for custom async actions
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import toast from './toast';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, composeWithDevTools(
	applyMiddleware(sagaMiddleware, thunk, toast)
));

sagaMiddleware.run(rootSaga);

export default store;
