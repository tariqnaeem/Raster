import moment from 'moment';

export const normalize = (audit) => {
	const { record_created_date = {}, file_contents = '' } = audit;

	return {
		...audit,
		date: moment(record_created_date.date).format('MMM D YYYY, HH:mm'),
		avcs: file_contents ? file_contents.split(' ') : [],
	};
};
