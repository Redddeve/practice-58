// https://6513d1618e505cebc2ea317b.mockapi.io/user
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const userApi = axios.create({
	baseURL: 'https://6513d1618e505cebc2ea317b.mockapi.io/',
})

export const createUser = createAsyncThunk('createUser', async (body, thunkAPI) => {
	try {
		const { data } = await userApi.post('user', body)
		return data
	} catch (err) {
		return thunkAPI.rejectWithValue(err.message)
	}
})

export const logInUser = createAsyncThunk('logInUser', async (body, thunkAPI) => {
	try {
		const { data } = await userApi.get(`user?search=${body.email}`, body)
		if (data[0].password === body.password) {
			return data[0]
		} else {
			return thunkAPI.rejectWithValue('Incorrect data')
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err.message)
	}
})
