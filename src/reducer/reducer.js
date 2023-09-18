import { types } from './actionTypes'

export const initialState = {
	page: 1,
	pictures: [],
	query: 'birds',
	isOpen: false,
	currentImg: null,
	currentAlt: null,
	isLoading: false,
}

export const picturesReducer = (state, action) => {
	switch (action.type) {
		case types.SET_QUERY:
			return {
				...state,
				query: action.payload,
				pictures: [],
				page: 1,
			}

		case types.SET_PAGE:
			return {
				...state,
				page: state.page + 1,
			}
		case types.SET_PICTURES:
			return {
				...state,
				pictures: [...state.pictures, ...action.payload],
			}
		case types.SET_PICTURES_RESET:
			return {
				...state,
				pictures: [],
			}
		case types.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			}
		case types.SET_IS_OPEN:
			return {
				...state,
				isOpen: !state.isOpen,
			}
		case types.SET_CURRENT_IMG:
			return {
				...state,
				currentImg: action.payload,
			}
		case types.SET_CURRENT_ALT:
			return {
				...state,
				currentAlt: action.payload,
			}

		default:
			return state
	}
}
