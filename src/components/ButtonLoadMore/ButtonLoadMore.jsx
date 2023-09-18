import React, { useContext } from 'react'
import { StyledButton } from './ButtonLoadMore.styled'
import { context } from '../../context/ContextProvider'
import { setPage } from '../../reducer/action'

export const ButtonLoadMore = ({ handleLoadMore }) => {
	const { dispatch } = useContext(context)
	return <StyledButton onClick={() => dispatch(setPage())}>Load More</StyledButton>
}
