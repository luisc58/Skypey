import React, { Component } from 'react';
import _ from 'lodash';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store';
import './App.css';

const App = () => {
	const { contacts, user, activeUserId } = store.getState();
	return (
		<div className="App">
			<Sidebar contacts={Object.values(contacts)} />
			<Main user={user} activeUserid={activeUserId} />
		</div>
	);
};

export default App;
