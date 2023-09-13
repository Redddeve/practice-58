import React from 'react'
import { StyledLi } from './ProductCard.styled'

export const ProductCard = ({ id, title, description, price, thumbnail }) => {
	return (
		<StyledLi>
			<img src={thumbnail} alt={title} />
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
				<div>
					<p>{price}</p>
					<button>Add</button>
				</div>
			</div>
		</StyledLi>
	)
}
// StyledLi
