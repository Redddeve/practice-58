import React, { useEffect, useState } from 'react'
import { fetchAllUsers } from '../services/api'
import { Link, Outlet } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import styled from 'styled-components'

const Users = () => {
	const { data: users, setData } = useHttp(fetchAllUsers)

	return (
		<StyledWrapper>
			<StyledList>
				{users.map(user => (
					<li key={user.id}>
						<Link to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</StyledList>
			<div>
				<Outlet />
			</div>
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	display: flex;
`

const StyledList = styled.ol`
	width: 30%;
	border-right: 2px solid gray;
`
export default Users
