import React from 'react'
import { StyledLi, StyledImg, StyledDiv, StyledBox } from './ProductCard.styled'

export const ProductCard = ({ id, title, description, price, thumbnail, handleOpenModal }) => {
	return (
		<StyledLi>
			<StyledImg onClick={() => handleOpenModal(thumbnail, title)} src={thumbnail} alt={title} />
			<StyledDiv>
				<h2>{title}</h2>
				<p>{description}</p>
				<StyledBox>
					<p>{price}$</p>
					<button>Add</button>
				</StyledBox>
			</StyledDiv>
		</StyledLi>
	)
}
