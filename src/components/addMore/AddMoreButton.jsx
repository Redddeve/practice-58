import React from 'react'
import { StyledBtnLoad, StyledButtonDiv } from './AddMore.styled'

export const AddMoreButton = ({ title }) => {
	return (
		<StyledButtonDiv>
			<StyledBtnLoad>{title}</StyledBtnLoad>
		</StyledButtonDiv>
	)
}
