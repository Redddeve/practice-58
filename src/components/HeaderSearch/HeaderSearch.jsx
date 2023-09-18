import React, { useRef, useEffect, useContext } from 'react'
import { StyledBox, StyledForm, StyledFormInput, StyledFormButton } from './HeaderSearch.styled'
import { context } from '../../context/ContextProvider'
import { setQuery } from '../../reducer/action'

export const HeaderSearch = ({ getSearch, clear }) => {
	const { dispatch } = useContext(context)
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
		dispatch(setQuery(query.value))
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
