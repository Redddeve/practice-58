import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {
	return (
		<>
			<nav>
				<Links>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>
					<li>
						<NavLink to='/favorite'>Favorite</NavLink>
					</li>
				</Links>
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
const Links = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;
`

export default Layout
