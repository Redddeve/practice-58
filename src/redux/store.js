import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './product/productsSlice'
import { favoritesReducer } from './favorite/favoriteSlice'

export const store = configureStore({
	reducer: {
		product: productsReducer,
		favorite: favoritesReducer,
	},
})
