import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Users from './pages/Users'
import PageNotFound from './pages/PageNotFound'
import Layout from './components/Layout'
import SingleUser from './pages/SingleUser'
import UserTodos from './pages/UserTodos'
// 1. Створити роути, лейаут, додати заглушку - Віталій

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />

				<Route path='users' element={<Users />}>
					<Route index element={<h1>If you want to see info, click on user name</h1>} />
					<Route path=':id' element={<SingleUser />}>
						<Route path='todos' element={<UserTodos />} />
					</Route>
				</Route>

				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	)
}
