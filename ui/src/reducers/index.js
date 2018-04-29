import { combineReducers } from 'redux';

import entities from './entities';
import alert from './alert';
import notification from './notification';
import contentViewer from '../content-viewer/reducer';
import audits from '../audits/reducer';
import report from '../report/reducer';

const rootReducer = combineReducers({
	entities,
	audits,
	report,
	contentViewer,
	ui: combineReducers({
		alert,
		notification,
	}),
});

export default rootReducer;
