import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { StyledList } from './ProductList.styled'

export const ProductList = ({ data = [], handleOpenModal }) => {
	return (
		<StyledList>
			{data.map(product => {
				return <ProductCard {...product} key={product.id} handleOpenModal={handleOpenModal} />
			})}
		</StyledList>
	)
}
