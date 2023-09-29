import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { logoutThunk } from '../redux/user/operations'
import { useDispatch, useSelector } from 'react-redux'
import { selectEmail, selectIsLogin } from '../redux/user/selectors'

const Layout = () => {
	const dispatch = useDispatch()
	const userEmail = useSelector(selectEmail)
	const isLogin = useSelector(selectIsLogin)

	const handleLogout = () => {
		dispatch(logoutThunk())
	}
	return (
		<>
			<StyledNavList>
				<Links>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					{!isLogin ? (
						<>
							<li>
								<NavLink to='/register'>Register</NavLink>
							</li>
							<li>
								<NavLink to='/login'>Login</NavLink>
							</li>
						</>
					) : (
						<>
							<h2>{userEmail}</h2>
							<button onClick={handleLogout}>Log Out</button>
						</>
					)}
				</Links>
			</StyledNavList>
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

const StyledNavList = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 5px;

	padding: 10px;
`

export default Layout
