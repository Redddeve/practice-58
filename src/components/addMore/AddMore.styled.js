import styled from 'styled-components'

export const StyledBtnLoad = styled.button`
	display: inline-block;
	padding: 8px 16px;
	border-radius: 2px;
	border: 0;
	text-decoration: none;
	text-align: center;
	cursor: pointer;
	font-family: inherit;
	font-size: 18px;
	line-height: 24px;
	background-color: lightyellow;

	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
	box-shadow: 2px 1px 2px 1px gray;
	&:hover,
	&:focus {
		background-color: lightblue;
	}
`
export const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
