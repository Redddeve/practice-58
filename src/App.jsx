import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Todolist from './components/Todolist/Todolist'

const App = () => {
	// 1. Створити слайс для юзера, підключити його
	// 2. Створити файл operations, selectors, додати хелпери для токену та інстанс
	// 3. Додати в навбар всі роути
	// 4. Додати реестрацію, авторизацію
	// 5. Додати логаут, кнопки на вхід і вихід
	// 6. Показати інфо про юзера, його емейл по умові логінізації
	// 7. Додати можливість редіректу при логіні / реестрації
	// 8. Додати персіст в проект для токену
	// 9.
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Todolist />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}

export default App
