import * as actions from './actions';

describe('Audits list actions', () => {

	it('can set initial state', () => {
		const expected = {
			type: actions.IS_REQUESTING_AUDITS,
		};

		expect(actions.isRequestingAudits()).toEqual(expected);
	});

	it('can handle successful response', () => {
		const response = {
			audits: [
				{ guid: 999 },
				{ guid: 888 },
				{ guid: 777 },
			],
		};

		const expected = {
			type: actions.REQUEST_AUDITS,
			audits: [
				{ guid: 999 },
				{ guid: 888 },
				{ guid: 777 },
			],
		};

		expect(actions.requestAuditsSuccess(response)).toEqual(expected);
	});

	it('can handle error response', () => {
		const error = {
			message: 'Something went wrong :(',
		};

		const expected = {
			type: actions.REQUEST_AUDITS_ERROR,
			error,
		};

		expect(actions.requestAuditsError(error)).toEqual(expected);
	});

});
