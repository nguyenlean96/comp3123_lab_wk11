import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
import './index.css';
import Nav from './Nav';
import UserList from './UserList';
import reportWebVitals from './reportWebVitals';
import UserDetails from './UserDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Routes>
			<Route path="/" element={<UserList />} />
			<Route path="/user" element={<UserDetails />} />
		</Routes>
	</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
