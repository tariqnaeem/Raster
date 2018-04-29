import { schema } from 'normalizr';

export const reportEntity = new schema.Entity('reports', {}, {
	idAttribute: 'guid',
	processStrategy: (audit) => {
		const { guid, file_name, api_result } = audit;

		return {
			guid,
			isReady: true,
			file_name,
			api_result: api_result ? JSON.parse(api_result) : undefined,
		};
	},
});

export const reportsSchema = new schema.Array(reportEntity);
