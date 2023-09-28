import { createSelector } from '@reduxjs/toolkit'

// Products
export const selectProducts = state => state.product.products
export const selectLoading = state => state.product.loading
export const selectError = state => state.product.error

// Favourites

export const selectFavorite = state => state.favorite.favorites
export const selectFavLoading = state => state.favorite.loading
export const selectFavError = state => state.favorite.error

// Filter

export const selectFilter = state => state.filter.filter

// createSelector Filter
export const selectFavFilter = createSelector([selectFavorite, selectFilter], (favorite, filter) => {
	return favorite.filter(el => el.title.toLowerCase().includes(filter.toLowerCase()))
})

// title  =  filter
// iPhone => phone  ->>>>>> []
// iphone => phone ->>>>>> []
// iphone => ph ->>>>>> []
// iphone => iphone =>>>> [{}]
