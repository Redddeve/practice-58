import styled from 'styled-components'

export const StyledButton = styled.button`
	display: block;
	margin: 20px auto 0;
	width: fit-content;
	height: 40px;

	border: 1px solid rgba(0, 0, 0, 0.4);
	background-color: blue;
	color: white;

	&:hover {
		background-color: tomato;
	}
`
