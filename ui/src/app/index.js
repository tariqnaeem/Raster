import React from 'react';
import SectionHeader from '../header';
import ContentViewer from '../content-viewer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const App = () => (
	<div className="App">
		<SectionHeader title='Test Project' />
		<ToastContainer />
		<ContentViewer />
	</div>
);

export default App;
