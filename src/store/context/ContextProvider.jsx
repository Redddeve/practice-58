import { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer'
import { useProducts } from '../../hooks/useProducts'
import { useModal } from '../../hooks/useModal'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const { products, page } = state
	const { isOpen, toggle, content, close } = useModal()

	useProducts(page, dispatch)
	const value = {
		products,
		page,
		dispatch,
		isOpen,
		toggle,
		content,
		close,
	}
	return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}
