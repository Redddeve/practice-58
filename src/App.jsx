import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

// 1. Зробити роути, підключити browserRouter, Зробити заглушку - Pavlo [+]
// 2. Створення контекста, контекст провайдера і власний хук для контекста - Dmytro Popko [+]
// 3. Організація редьюсера, екшенів та констант в файл actionTypes - Arsen - [+]
// 4. Зробимо апі - Vitalii
// 5. Модалка, клік, власний хук, показ даних на модалці - Uliya
// 6. Організація улюблених, додавання, видалення, стейт, роут - Iliya
// 7. Пошук по улюбленим використовуючи useSearchParams - Diana

const App = () => {
	// const [state, dispatch] = useReducer(first, second)
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='products' element={<Products />} />
				<Route path='items' element={<Navigate to='/products' />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
