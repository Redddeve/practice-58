import { createSlice } from '@reduxjs/toolkit'
import { addToFavoritesThunk, deleteFromFavoritesThunk, fetchFavoritesThunk } from './operations'
const initialState = {
	favorites: [],
	loading: false,
	error: false,
}

const slice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchFavoritesThunk.fulfilled, (state, { payload }) => {
				state.favorites = payload
			})
			.addCase(addToFavoritesThunk.fulfilled, (state, { payload }) => {
				state.favorites.push(payload)
			})
			.addCase(deleteFromFavoritesThunk.fulfilled, (state, { payload }) => {
				state.favorites = state.favorites.filter(item => item.id !== payload)
				debugger
			})
	},
})

export const favoritesReducer = slice.reducer
