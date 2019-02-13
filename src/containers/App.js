import React, { Component } from 'react';
import _ from 'lodash';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store';
import './App.css';

const App = () => {
	const { contacts } = store.getState();
	return (
		<div className="App">
			<Sidebar contacts={Object.values(contacts)} />
			<Main />
		</div>
	);
};

export default App;
