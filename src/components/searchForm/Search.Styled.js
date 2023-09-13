import { styled } from 'styled-components'

export const Form = styled.form`
	display: flex;
	padding-bottom: 30px;
`
export const StyledinputWrapper = styled.div``
export const StyledInput = styled.input`
	width: 300px;
	height: 30px;
	border-radius: 5px;
	margin-right: 10px;
	padding-left: 10px;
	border: 1px solid grey;
`

export const StyledSearchBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 30px;
	text-transform: uppercase;
	border: none;
	border-radius: 5px;
	outline: none;
	background: coral;
	transition: background 0.2s;
	border: 1px solid grey;
	&:hover {
		background: red;
		cursor: pointer;
	}
`
