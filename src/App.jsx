import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Todolist from './components/Todolist/Todolist'
import Login from './pages/Login'
import Register from './pages/Register'
import { selectIsRefresh } from './redux/user/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/user/operations'
import Archive from './pages/Archive'

const App = () => {
	// 1. Створити слайс для юзера, підключити його - [x] - Iliya
	// 2. Створити файл operations, selectors, додати хелпери для токену та інстанс - [x] - Iliya
	// 3. Додати в навбар всі роути  - [x] - Vitalii
	// 4. Додати реестрацію, авторизацію - [x] - Uliya
	// 5. Додати логаут, кнопки на вхід і вихід - [x] Vitalii
	// 6. Показати інфо про юзера, його емейл по умові логінізації - [x] - Arsen
	// 7. Додати можливість редіректу при логіні / реестрації - [x] - Arsen
	// 8. Додати персіст в проект для токену - [x] Arsen
	// 9. Refresh user - [x] - Uliya
	// 10. Переїхати на бекенд задач - [x] - Pavlo
	// 11.Зробити слайс архіву - [x] - Iliya
	// 12. Зробити можливість перенесення todo в архів - [x] - Arsen
	// 13. Зробити видалення в архіві - [] - Vitalii
	// 14. Додати анімації - [] - ???
	const isRefresh = useSelector(selectIsRefresh)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	return !isRefresh ? (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Todolist />} />
				<Route path='/archive' element={<Archive />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Route>

			<Route path='*' element={<NotFound />} />
		</Routes>
	) : (
		<h1 className=''>Loading...</h1>
	)
}

export default App
