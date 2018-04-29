import { getState, default as reducer }  from './reducer';
import * as actions from './actions';

import * as searchReducer from './search/reducer';
import * as paginationReducer from './pagination/reducer';
import * as helpers from './helpers';

describe('get audits state', () => {

	it('returns state from tree', () => {
		const state = {
			audits: {
				test: 'aaa',
			},
		};

		expect(getState(state)).toBe(state.audits);
	});

});

describe('audits reducer', () => {
	beforeEach(() => {
		searchReducer.default = jest.fn().mockReturnValue(true);
		paginationReducer.default = jest.fn().mockReturnValue(true);
		helpers.normalize = jest.fn().mockReturnValue(true);
	});

	it('resets when requesting audits', () => {

		const action = {
			type: actions.REQUEST_AUDITS,
			audits: [
				{ guid: 111 },
			],
		};

		const expected = {
			audits: [
				true,
			],
			isReady: true,
			pagination: true,
			search: true,
		};

		expect(reducer(undefined, action)).toEqual(expected);
	});

	it('handles bogus state', () => {
		const state = {
			isReady: true,
			pagination: true,
			search: true,
		};

		const action = {
			type: 'BOGUS_ACTION',
		};

		expect(reducer(state, action)).toEqual(state);
	});

	afterEach(() => {
		searchReducer.default.mockReset();
		paginationReducer.default.mockReset();
		helpers.normalize.mockReset();
	});

});
