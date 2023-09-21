import { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
	// const [state, setState] = useState(123)
	const [state, dispatch] = useReducer(reducer, initialState)
	const { products, page } = state
	const fn = () => {
		console.log('hello')
	}

	const value = {
		name: 'Alex',
		fn,
		products,
		page,
		dispatch,
	}
	return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}
