import { useContext } from 'react'
import { MyContext } from './ContextProvider'

export const useMyContext = () => useContext(MyContext)
