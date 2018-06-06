import React from 'react';
import SectionHeader from '../header';
import Menu from '../menu';
import ContentViewer from '../content-viewer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const App = () => (
	<div className="App">
		<SectionHeader title="Welcome" />
		<Menu />
	</div>
);

export default App;
