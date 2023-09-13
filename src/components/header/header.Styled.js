import { styled } from 'styled-components'

export const StyledHeader = styled.header`
	width: 100%;
	padding: 20px 50px;
	background-color: lightgreen;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const StyledLogo = styled.h2`
	font-size: 30px;
`
export const StyledCart = styled.button`
	padding: 10px 20px;
	font-weight: bold;
	text-transform: uppercase;
	border: none;
	border-radius: 5px;
	outline: none;
	background: coral;
	transition: background 0.2s;
	&:hover {
		background: red;
		cursor: pointer;
	}
`

/* <header>
<h2>LOGO</h2>
<button>Cart</button>
</header> */
