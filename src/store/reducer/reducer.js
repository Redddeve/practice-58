import { types } from './actionTypes'

export const initialState = {
	products: [],
	page: 1,
	per_page: 10,
}

export const reducer = (state, action) => {
	console.log(action)
	const { type, payload } = action
	switch (type) {
		case types.setProducts:
			return { ...state, products: [...payload] }

		// {
		// 	products: [ {},{}],
		// 	page: 1,
		// 	per_page: 10,
		//  products:[...payload]
		// }

		default:
			break
	}
}
