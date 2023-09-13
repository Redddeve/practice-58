import styled from 'styled-components'

export const StyledLi = styled.li`
	width: calc((100% - 60px) / 3);
	height: 400px;

	padding: 14px;

	background-color: #99e6ff;
	border-radius: 15px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const StyledImg = styled.img`
	width: 100%;
	height: 200px;
	display: block;

	border-radius: 10px;

	margin-bottom: 15px;
`

export const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`

export const StyledBox = styled.div`
	display: flex;
	justify-content: space-between;
`
