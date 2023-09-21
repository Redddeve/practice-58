import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
	return (
		<Wrapper>
			<h1>This page is not exist! 👌</h1>
			<Link to='/'>To home page</Link>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	min-height: 100vh;
	font-size: 2rem;
	display: grid;
	place-content: center;
`

export default NotFound
