import { types } from './actionTypes'

export const initialState = {
	products: [],
	page: 1,
	per_page: 10,
	favorites: [],
}

export const reducer = (state, action) => {
	console.log(action)
	const { type, payload } = action
	switch (type) {
		case types.setProducts:
			return { ...state, products: [...payload] }
		case 'F':
			return { ...state, favorites: payload }

		case types.addToFavorites:
			return { ...state, favorites: [...state.favorites, action.payload] }

		case types.removeFrom:
			return { ...state, favorites: state.favorites.filter(fav => fav.id !== action.payload) }
		default:
			return state
	}
}
