import React, { useEffect, useState } from 'react'
import { fetchAllUsers } from '../services/api'
import { Link } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'

const Users = () => {
	const { data: users, setData } = useHttp(fetchAllUsers)

	const del = id => {
		setData(users.filter(item => item.id !== id))
	}
	return (
		<ol>
			{users.map(user => (
				<li key={user.id}>
					<button onClick={() => del(user.id)}>DELTE</button>
					<Link to={user.id.toString()}>
						{user.firstName} {user.lastName}
					</Link>
				</li>
			))}
		</ol>
	)
}

export default Users
