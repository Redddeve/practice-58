import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { setCurrentItem } from './slice'
import { taskApi } from '../user/operations'
import { addToArchive } from '../archive/slice'

export const fetchTodosThunk = createAsyncThunk('fetchTodos', async (_, thunkApi) => {
	const { data } = await taskApi.get('/tasks')
	return data
})
export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkApi) => {
	await taskApi.post('/tasks', body)
	thunkApi.dispatch(fetchTodosThunk())
})
export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (todo, thunkApi) => {
	const author = thunkApi.getState().user.user.name
	await taskApi.delete(`/tasks/${todo.id}`) // delete
	thunkApi.dispatch(addToArchive({ ...todo, author, date: new Date().toLocaleString() })) // add?
	thunkApi.dispatch(fetchTodosThunk())
})
export const toggleTodoThunk = createAsyncThunk('toggleTodo', async (body, thunkApi) => {
	thunkApi.dispatch(setCurrentItem(body.id))
	await taskApi.patch(`/tasks/${body.id}`, { ...body, completed: !body.completed })
	thunkApi.dispatch(fetchTodosThunk())
})
