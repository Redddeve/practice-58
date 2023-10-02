import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todos: [],
	mustBeDeleted: [],
}

const slice = createSlice({
	name: 'archive',
	initialState,
	reducers: {
		addToArchive: (state, { payload }) => {
			state.todos.push(payload)
		},
		deleteFromArchiveTodo: (state, { payload }) => {
			state.todos = state.todos.filter(todo => todo.id !== payload)
		},
		deleteAllArchiveTodo: (state, { payload }) => {
			state.todos = []
		},
		deleteCheckedTodo: (state, { payload }) => {
			state.mustBeDeleted.push(payload)
		},
		deleteCheckedTodosById: (state, { payload }) => {
			state.todos = state.todos.filter(todo => !state.mustBeDeleted.includes(todo.id))
		},
	},
})

export const archiveReducer = slice.reducer
export const { addToArchive, deleteFromArchiveTodo, deleteAllArchiveTodo, deleteCheckedTodo, deleteCheckedTodosById } =
	slice.actions
