import { createSlice } from '@reduxjs/toolkit'
import { createUser, logInUser } from './userOperations'

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
	extraReducers: builder => {
		builder.addCase(logInUser.fulfilled, (state, { payload }) => {
			return (state = { ...payload })
		})

		// builder.addCase(createUser.fulfilled, (state, action) => {})
	},
})

export const userReducer = userSlice.reducer
