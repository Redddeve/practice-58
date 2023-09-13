import React from 'react'
import { StyledBtnLoad, StyledButtonDiv } from './AddMore.styled'

export const AddMoreButton = ({ title, onLoadMore }) => {
	return (
		<StyledButtonDiv>
			<StyledBtnLoad onClick={onLoadMore}>{title}</StyledBtnLoad>
		</StyledButtonDiv>
	)
}
