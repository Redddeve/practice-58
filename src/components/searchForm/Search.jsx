import React from 'react'
import { StyledInput, StyledSearchBtn, Form } from './Search.Styled'

export const Search = () => {
	return (
		<Form>
			<StyledInput placeholder='Enter product name' />
			<StyledSearchBtn>Search</StyledSearchBtn>
		</Form>
	)
}
