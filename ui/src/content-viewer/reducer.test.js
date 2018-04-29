import * as actions from './actions';
import { getState, default as reducer } from './reducer';

describe('Content viewer state selector', () => {

	const state = {
		contentViewer: 'content viewer',
	};

	it('returns basic state', () => {
		expect(getState(state)).toEqual(state.contentViewer);
	});

});

describe('Content viewer reducer', () => {

	it('tracks view selection and parameters', () => {

		const action = {
			type: actions.SWITCH_VIEW,
			name: 'test',
			parameters: {
				test: true,
			},
		};

		const expected = {
			active: 'test',
			parameters: {
				test: true,
			},
		};

		expect(reducer(undefined, action)).toEqual(expected);

	});

	it('can handle bogus state', () => {

		const state = 'potato';

		const action = {
			type: 'TEST_ACTION',
		};

		expect(reducer(state, action)).toBe(state);
	});

});
