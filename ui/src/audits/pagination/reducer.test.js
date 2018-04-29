import * as actions from '../actions';
import reducer from './reducer';

describe('Audit Table Pagination', () => {

	const state = {
		'test': 123,
	};

	it('can clear on requesting audits', () => {

		const action = actions.isRequestingAudits();

		expect(reducer(state, action)).toEqual({});
	});

	it('can map audit state', () => {
		const action = {
			type: actions.REQUEST_AUDITS,
			total: 50,
			limit: 10,
			offset: 1,
			testing: [ 'A', 'B', 'C' ],
		};

		expect(reducer(state, action)).toEqual({
			total: 50,
			limit: 10,
			offset: 1,
		});
	});

	it('can handle bogus state change', () => {

		const action = {
			type: 'BOGUS_STATE',
		};

		expect(reducer(state, action)).toBe(state);
	});

});
