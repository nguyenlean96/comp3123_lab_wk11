import axios from 'axios';
import React, { Component, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Nav from './Nav';

const log = whatever => console.log(whatever);

export default function UserDetails(props) {
	const [user, setUser] = React.useState({});
	const search = useLocation().search;
	const get_id = new URLSearchParams(search).get('id');
	
	const getUserById = id => {
		const USERS_URL = `http://jsonplaceholder.typicode.com/users/${id}`;
		axios.get(USERS_URL)
		.then(res => {
			log(res);
			setUser(res.data);
		})
		.catch(err => {
			console.log(err);
		})
	}
	useEffect(() => {
		getUserById(get_id);
		log(user);
	}, []);

	return (
		<div>
			<Nav page={'User Details'} lefts={[{url: '/', title: 'Home'}]} />
			<div className='d-flex justify-content-center align-items-center p-5 mt-3'>
				<div className="card mb-3" style={{maxWidth: '540px',}}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src='' className="img-fluid rounded-start" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h3 className="card-title">{user.name}</h3>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
