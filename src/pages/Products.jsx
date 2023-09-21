import React from 'react'
import { useMyContext } from '../store/context/useMyContext'

const Products = () => {
	const { products } = useMyContext()
	console.log(products)

	return (
		<div>
			<ul>
				{products?.map(product => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} />
						<h1>{product.title}</h1>
						<p>Description: {product.description}</p>
						<p>Price: {product.price}$</p>
						<button>Add to favorite</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Products
