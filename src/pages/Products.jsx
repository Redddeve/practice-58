import React from 'react'

const Products = () => {
	return (
		<div>
			<ul>
				{[].map(product => (
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
