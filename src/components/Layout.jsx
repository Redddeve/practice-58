import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/users'>Users</NavLink>
					</li>
				</ul>
			</nav>
			<hr />
			<OtletWrapper>
				<Suspense fallback={<h1>Loading...</h1>}>
					<Outlet />
				</Suspense>
			</OtletWrapper>
			<footer>
				<h1>Created with GOIT</h1>
			</footer>
		</>
	)
}

const OtletWrapper = styled.div`
	min-height: 100vh;
	padding: 10px 45px;
`

export default Layout
