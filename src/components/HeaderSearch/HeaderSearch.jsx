import React from 'react'
import { StyledBox, StyledForm, StyledFormInput, StyledFormButton } from './HeaderSearch.styled'

export const HeaderSearch = ({ getSearch }) => {
	const onSubmit = e => {
		e.preventDefault()
		const { query } = e.currentTarget.elements
		// const { query } = e.currentTarget.elements
		getSearch(query.value)
	}
	return (
		<StyledBox>
			<StyledForm onSubmit={onSubmit}>
				<StyledFormInput name='query' />
				<StyledFormButton>find</StyledFormButton>
			</StyledForm>
		</StyledBox>
	)
}
