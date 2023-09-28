import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: '',
	login: '',
	email: '',
	password: '',
	age: '',
	isAdmin: false,
	bio: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export const userReducer = userSlice.reducer
