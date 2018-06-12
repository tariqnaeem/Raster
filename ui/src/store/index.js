import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // required by react-redux-form - use sagas for custom async actions
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../projects/reducer';

import toast from './toast';



const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;
