import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Users from './pages/Users'
import PageNotFound from './pages/PageNotFound'
import Layout from './components/Layout'
// 1. Створити роути, лейаут, додати заглушку - Віталій

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='users' element={<Users />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	)
}
