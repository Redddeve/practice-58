import { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import { useProducts } from '../../hooks/useProducts'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { products, page } = state

	useProducts(page, dispatch)
	const value = {
		products,
		page,
		dispatch,
	}
	return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}
