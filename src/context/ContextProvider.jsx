import { createContext } from 'react'

export const context = createContext()

export const ContextProvider = ({ children }) => {
	const value = {
		userName: 'Vasya',
		age: 25,
	}

	return <context.Provider value={value}>{children}</context.Provider>
}
