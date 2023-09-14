import React from 'react'
import { StyledButton } from './ButtonLoadMore.styled'

export const ButtonLoadMore = ({ handleLoadMore }) => {
	return <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
}
