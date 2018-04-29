import { reportEntity } from './schema';
import { normalize } from 'normalizr';

describe('Entity normalizer', () => {

	it('can normalize result', () => {
		const audit = {
			guid: 999,
			api_result: '{ "test": true }',
		};

		const expected = {
			entities: {
				reports: {
					999: {
						isReady: true,
						guid: 999,
						api_result: {
							test: true,
						},
					},
				},
			},
			result: 999,
		};

		expect(normalize(audit, reportEntity)).toEqual(expected);
	});

});
