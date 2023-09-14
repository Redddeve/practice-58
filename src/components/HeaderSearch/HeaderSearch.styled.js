import styled from 'styled-components'

export const StyledBox = styled.div`
	width: 100%;
	height: 40px;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: lightblue;
`

export const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 15px;

	width: 300px;
`

export const StyledFormInput = styled.input`
	border-radius: 10px;
	border-color: teal;
`
export const StyledFormButton = styled.button`
	border-radius: 10px;

	&hover {
		background-color: tomato;
	}
`
