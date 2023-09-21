import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
						<NavLink to='/products'>Products</NavLink>
					</li>
				</ul>
			</nav>
			<hr />
			<OtletWrapper>
				<Outlet />
			</OtletWrapper>
		</>
	)
}

const OtletWrapper = styled.div`
	min-height: 100vh;
	padding: 10px 45px;
`

export default Layout
