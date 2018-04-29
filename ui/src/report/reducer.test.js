import * as actions from './actions';
import { getState, default as reducer } from './reducer';

describe('Report selector', () => {

	const state = {
		report: {
			entities: {
				reports: {
					999: { guid: 999 },
				},
			},
		},
	};

	it('returns record', () => {
		const expected = { guid: 999 };

		expect(getState(state, { reportGuid: 999 })).toEqual(expected);
	});

});

describe('Report reducer', () => {

	it('resets on requesting audits', () => {
		const action = () => ({
			type: actions.IS_REQUESTING_AUDITS,
		});

		expect(reducer(undefined, action)).toEqual({});
	});

	it('sets state on successful response', () => {
		const action = {
			type: actions.REQUEST_REPORT,
			audits: [
				{ guid: 'AAA' },
			],
		};

		const expected ={
			entities: {
				reports: {
					AAA: {
						api_result: undefined,
						guid: 'AAA',
						isReady: true,
					},
				},
			},
			result: [ 'AAA'],
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
