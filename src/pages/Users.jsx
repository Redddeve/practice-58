import React, { Suspense, useEffect, useState } from 'react'
import { fetchAllUsers, fetchUserByQuery } from '../services/api'
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import { useHttp } from '../hooks/useHttp'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

const Users = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { register, handleSubmit } = useForm()

	const submitForm = data => {
		console.log(data)
		setSearchParams(
			data.query
				? {
						query: data.query,
				  }
				: {}
		)
	}

	const query = searchParams.get('query') || ''
	const location = useLocation()
	// console.log(location)

	useEffect(() => {
		document.title = location.pathname.slice(1)
	}, [location.pathname])
	const { data: users, setData } = useHttp(fetchUserByQuery, query)

	return (
		<StyledWrapper>
			<StyledList>
				<form onSubmit={handleSubmit(submitForm)}>
					<input {...register('query')} />
					<button>Search</button>
				</form>
				{users.map(user => (
					<li key={user.id}>
						<Link state={{ from: location }} to={user.id.toString()}>
							{user.firstName} {user.lastName}
						</Link>
					</li>
				))}
			</StyledList>
			<div>
				<Suspense>
					<Outlet />
				</Suspense>
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
