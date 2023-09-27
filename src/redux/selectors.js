// Products
export const selectProducts = state => state.product.products
export const selectLoading = state => state.product.loading
export const selectError = state => state.product.error

// Favourites

export const selectFavorite = state => state.favorite.favorites
export const selectFavLoading = state => state.favorite.loading
export const selectFavError = state => state.favorite.error
