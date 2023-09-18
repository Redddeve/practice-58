import { createContext, useReducer } from 'react'
import { initialState, picturesReducer } from '../reducer/reducer'

export const context = createContext()

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(picturesReducer, initialState)
	const { page, pictures, query, isOpen, currentImg, currentAlt, isLoading } = state
	const value = {
		userName: 'Vasya',
		age: 25,
		dispatch,
		page,
		pictures,
		query,
		isOpen,
		currentImg,
		currentAlt,
		isLoading,
	}

	return <context.Provider value={value}>{children}</context.Provider>
}
