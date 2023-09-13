import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { StyledList } from './ProductList.styled'

export const ProductList = ({ data = [] }) => {
	return (
		<StyledList>
			{data.map(product => {
				return <ProductCard {...product} key={product.id} />
			})}
		</StyledList>
	)
}
//  StyledList
