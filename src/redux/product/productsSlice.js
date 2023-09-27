import { createSlice } from '@reduxjs/toolkit'
import { fetchProductsThunk } from './operations'
const initialState = {
	products: [],
	loading: false,
	error: false,
}

const slice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
			state.products = action.payload
		})
	},
})

export const productsReducer = slice.reducer
