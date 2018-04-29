import * as actions from './actions';

describe('Content viewer actions', () => {

	it('can switch view', () => {
		const action = actions.switchView('test', { guid: 'test' });

		const expected = {
			type: actions.SWITCH_VIEW,
			name: 'test',
			parameters: {
				guid: 'test',
			},
		};

		expect(action).toEqual(expected);
	});

});
