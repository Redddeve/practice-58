import React from 'react'
import { StyledinputWrapper, StyledInput, StyledSearchBtn } from './Search.Styled'

export const Search = () => {
	return (
		<form>
			<StyledinputWrapper>
				<StyledInput placeholder='Enter product name' />
				<StyledSearchBtn>Search</StyledSearchBtn>
			</StyledinputWrapper>
		</form>
	)
}
