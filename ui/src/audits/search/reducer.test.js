import * as actions from './actions';
import { getState, default as reducer } from './reducer';

describe('Search form selector', () => {

	const state = {
		audits: {
			search: {
				test: '999',
			},
		},
	};

	it('returns search form', () => {
		const expected = {
			test: '999',
		};

		expect(getState(state)).toEqual(expected);
	});

});

describe('Search form reducer', () => {

	it('update form when user changes query', () => {

		const action = {
			type: actions.UPDATE_SEARCH_FORM,
			query: {
				test: '999',
			},
		};

		const expected = {
			query: {
				test: '999',
			},
		};

		expect(reducer(undefined, action)).toEqual(expected);
	});

	it('sets flag when form is submitted', () => {

		const state = {
			query: {
				test: 'aaa',
			},
		};

		const expected = {
			query: {
				test: 'aaa',
			},
			isSubmitted: true,
		};

		const action = {
			type: actions.HAS_SUBMITTED_SEARCH,
		};

		expect(reducer(state, action)).toEqual(expected);
	});

	it('can handle bogus state', () => {

		const state = 'potato';

		const action = {
			type: 'TEST_ACTION',
		};

		expect(reducer(state, action)).toBe(state);
	});

});
