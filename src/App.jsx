import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import { Favorite } from './pages/Favorite'
import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'

// 1. Створити папку редакс, слайс - Iliya [x]
// 2. Створити стор, підключити - Dmytro [x]
// 3. Створити селектори, використати - Uliya [x]
// 4. Створити на мокапі ресурс - Vitalii [x]
// 5. Файл операцій організувати - Arsen [x]
// 6. Отримати дані з api (products), обробити - Arsen [x]
// 7. Отримати дані з api (mockapi), обробити - Pavlo [x]
// 8. Додати до мокапі наші товари в улюблені - Pavlo [x]
// 9. Видалити товар з фейворитів - Dmytro [x]
// 10. Додати слайс фільтрації - Iliya [x]
// 11. Додати фільтр на сторінку улюблених - Uliya [x]
// 12. Використати createSelector- Arsen [x]
// 13. Створення слайсу юзера, і форми логіна - Pavlo [x]
// 14. Створення запиту на сервер для створення юзера - POST - Dmytro []
// 14. Створення запиту на сервер за юзером - GET - Dmytro []

const App = () => {
	// const [state, dispatch] = useReducer(first, second)
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<RegisterPage />} />

				<Route path='products' element={<Products />} />
				<Route path='items' element={<Navigate to='/products' />} />
				<Route path='favorite' element={<Favorite />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
