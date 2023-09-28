import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	filter: '',
}

const slice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filterData: (state, { payload }) => {
			state.filter = payload
		},
	},
})

export const filterReducer = slice.reducer
export const { filterData } = slice.actions
