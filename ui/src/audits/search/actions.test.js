import * as actions from './actions';

describe('Search view actions', () => {

	it('can set state', () => {
		const expected = {
			type: actions.UPDATE_SEARCH_FORM,
			query: {
				test: '999',
			},
		};

		expect(actions.updateForm('test', '999')).toEqual(expected);
	});

	it('set flag is submitted', () => {

		const expected = {
			type: actions.HAS_SUBMITTED_SEARCH,
		};

		expect(actions.hasSubmittedQuery()).toEqual(expected);
	});

});
