import axios from 'axios';
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

const log = whatever => console.log(whatever);

class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};	
	}

	componentDidMount = () => {
		this.getUsers();
	}
	getUsers = () => {
		const USERS_URL = 'http://jsonplaceholder.typicode.com/users';
		axios.get(USERS_URL)
		.then(res => {
			this.setState(
				{
					...this.state,
					users: res.data
				}
			);
		}).catch(err => {
			console.log(err);
		})
	}

	getUserById = id => {
		const USERS_URL = `http://jsonplaceholder.typicode.com/users/${id}`;
		axios.get(USERS_URL)
		.then(res => {
			
			log(res);
		}).catch(err => {
			console.log(err);
		})
	}
	render() {
		return (
			<div>
				<Nav page={'Users List'} rights={[]} />
				<div className='p-3 px-5'>
					<div className='d-flex flex-row-reverse p-3'>
						<button className='btn btn-primary mt-3 me-4' onClick={() => {
							this.getUsers();
							}}>Fetch From Original Source</button>
					</div>
					<hr/>
					<div className='d-flex flex-column justify-content-center align-items-center'>
					{
						this.state.users.map((user, index) => (
							<div key={user.id} className={'card text-bg-'+ ((index %2 == 0) ? 'info' : 'light') +' mb-3'} style={{width: '80%',}}>
								<div className="card-header">{user.name}</div>
								<div className="card-body container row">
									<div className='col-md-3'>
										<div className='d-flex flex-column justify-content-center align-items-center text-center'>
											<div className='border border-dark rounded-circle mb-3' style={{height: 180, width: 180}}>
												<img src='' className="img-fluid rounded-start" alt="..." />
											</div>
											<div className='row mt-2'>
												<a className='btn btn-primary' href={`/user?id=${user.id}`}>View</a>
												<button type="button" className="btn btn-secondary mt-2">Update</button>
												<button type="button" className="btn btn-danger mt-2">Delete</button>
											</div>
										</div>
									</div>
									<div className='col-md-9'>
										<div className='row'>
											<div className='col-md-3 text-end'>User Name</div>
											<div className='col-md-auto'>
												<h4 className="card-title">	{user.username}</h4>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-3 text-end'>Address</div>
											<div className='col-md-auto'>
												<p>{user.address.street + ' (' + user.address.suite + '), ' + user.address.city + ', ' + user.address.zipcode}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-3 text-end'>Email</div>
											<div className='col-md-auto'>
												<h5 className="card-title">	{user.email}</h5>
											</div>
										</div>
										
										<div className='row'>
											<div className='col-md-3 text-end'>Phone</div>
											<div className='col-md-auto'>
												<p>{user.phone}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-3 text-end'>Website</div>
											<div className='col-md-auto'>
												<p>{user.website}</p>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-3 text-end'>Company</div>
											<div className='col-md-auto'>
												{user.company.name}
											</div>
										</div>
										<div className='row'>
											<div className='col-md-3 text-end'></div>
											<div className='col-md-auto'></div>
										</div>
									</div>
								</div>
							</div>
						))
					}
					</div>
				</div>
			</div>
		)
	}
}

export default function WithNavigate(props) {
	let navigate = useNavigate();
	return <UserList navigate={navigate} {...props} />;
}