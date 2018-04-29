import React from 'react';
import './style.css';
import Icon from '@fortawesome/react-fontawesome';
import faTachometerAlt from '@fortawesome/fontawesome-free-solid/faTachometerAlt';

const Header = ({ title }) => (
	<div className='header'>
		<h2>{title} <Icon icon={faTachometerAlt} /></h2>
	</div>
);

export default Header;
