import React from 'react';

class Pagination extends React.Component {

	constructor () {
		super();

		this.state = {
			pages: [],
		};
	}

	createPages (total, limit, offset) {
		let i = 1;
		let pages = [];

		while (i <= Math.ceil((total / limit))) {
			pages.push(i);

			i++;
		}

		const current = Number(offset) === 0 ? 1 : Math.ceil((offset / limit) + 1);

		this.setState({ pages, current });
	}

	componentDidMount () {
		const { limit, total, offset } = this.props;

		this.createPages(total, limit, offset);
	}

	componentWillReceiveProps (next) {
		const { limit, offset, total } = this.props;

		if (next.limit != limit
			|| next.offset != offset
			|| next.total != total
		) {
			this.createPages(next.total, next.limit, next.offset);
		}
	}

	render () {
		const { pages, current } = this.state;
		const { setOffset, limit } = this.props;

		return (
			<div data-automation='Pagination'>
				{pages.map((page) => (
					<button key={page} className={`btn ${current === page && 'btn-primary'}`} onClick={() => setOffset(limit * (page - 1))}>{page}</button>
				))}
			</div>
		);
	}

}

export default Pagination;
