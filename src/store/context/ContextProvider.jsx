import { createContext, useState } from 'react'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
	const [state, setState] = useState(123)
	const fn = () => {
		console.log('hello')
	}

	const value = {
		name: 'Alex',
		fn,
		state,
	}
	return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}
