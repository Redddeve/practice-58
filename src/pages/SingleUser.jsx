import React, { useRef } from 'react'
import { useHttp } from '../hooks/useHttp'
import { fetchUserById } from '../services/api'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const SingleUser = () => {
	const { id } = useParams()
	const location = useLocation()
	console.log(location)
	const navigate = useNavigate()

	const ref = useRef(location.state?.from || '/')
	const handleGoBack = () => {
		navigate(ref.current)
	}
	const { data: user } = useHttp(fetchUserById, id)
	const { firstName, lastName, age, email, gender, phone, password, image } = user
	return (
		<StyledWrapper style={{ padding: '0 20px' }}>
			<button onClick={handleGoBack}>Go back</button>
			<div>
				<img width={100} height={100} src={image} alt={firstName} />
				<h1>
					{firstName} {lastName}
				</h1>
				<p>Age:{age}</p>
				<p>Email:{email}</p>
				<p>Gender:{gender}</p>
				<p>Phone:{phone}</p>
				<p>Password:{password}</p>
				<Link to='todos'>Todos by user</Link>
			</div>
			<Outlet />
		</StyledWrapper>
	)
}

const StyledWrapper = styled.div`
	display: flex;
	gap: 50px;
`
export default SingleUser
// "id": 1,
//   "firstName": "Terry",
//   "lastName": "Medhurst",
//   "maidenName": "Smitham",
//   "age": 50,
//   "gender": "male",
//   "email": "atuny0@sohu.com",
//   "phone": "+63 791 675 8914",
//   "username": "atuny0",
//   "password": "9uQFF1Lh",
//   "birthDate": "2000-12-25",
//   "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1",
//   "bloodGroup": "A−",
//   "height": 189,
//   "weight": 75.4,
//   "eyeColor": "Green",
