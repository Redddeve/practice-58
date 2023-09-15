import React, { useRef, useEffect } from 'react'
import { StyledBox, StyledForm, StyledFormInput, StyledFormButton } from './HeaderSearch.styled'

export const HeaderSearch = ({ getSearch, clear }) => {
	useEffect(() => {
		formREf.current.focus()
	}, [])

	const onClear = () => {
		clear()
		formREf.current.value = ''
	}

	const onSubmit = e => {
		e.preventDefault()

		const { query } = e.currentTarget.elements
		if (!query.value) {
			alert('enter properly name')
			return
		}
		// const { query } = e.currentTarget.elements
		getSearch(query.value)
	}
	const formREf = useRef()
	console.log(formREf)
	return (
		<StyledBox>
			<StyledForm onSubmit={onSubmit}>
				<StyledFormInput ref={formREf} name='query' />
				<StyledFormButton type='submit'>find</StyledFormButton>
				<StyledFormButton onClick={onClear} type='button'>
					reset
				</StyledFormButton>
			</StyledForm>
		</StyledBox>
	)
}
