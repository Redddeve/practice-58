import styled from 'styled-components'

export const ImgListStyled = styled.ul`
	list-style: none;
	display: grid;
	max-width: 90vw;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 12px;
	margin: 20px auto;
`
