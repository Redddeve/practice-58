import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './product/productsSlice'
import { favoritesReducer } from './favorite/favoriteSlice'
import { filterReducer } from './filter/filterSlice'
import { userReducer } from './user/userSlice'

export const store = configureStore({
	reducer: {
		product: productsReducer,
		favorite: favoritesReducer,
		filter: filterReducer,
		user: userReducer,
	},
})
