import * as actions from './actions';

describe('Audit report actions', () => {

	it('can set initial state', () => {
		const expected = {
			type: actions.IS_REQUESTING_REPORT,
		};

		expect(actions.isRequestingReport()).toEqual(expected);
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
			type: actions.REQUEST_REPORT,
			guid: 999,
			audits: [
				{ guid: 999 },
				{ guid: 888 },
				{ guid: 777 },
			],
		};

		expect(actions.requestReportSuccess(999, response)).toEqual(expected);
	});

	it('can handle error response', () => {
		const error = {
			message: 'Something went wrong :(',
		};

		const expected = {
			type: actions.REQUEST_REPORT_ERROR,
			guid: 999,
			error,
		};

		expect(actions.requestReportError(999, error)).toEqual(expected);
	});

});
