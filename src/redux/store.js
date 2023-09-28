import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todoList/slice'
// https://goit-task-manager.herokuapp.com/
export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
})
