import React from 'react'
import { useMyContext } from '../store/context/useMyContext'

import Modal from '../components/Modal'

const Products = () => {
	const { products, isOpen, toggle } = useMyContext()

	console.log(products)

	return (
		<div>
			<ul>
				{products.map(product => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} onClick={() => toggle(product)} />
						<h1>{product.title}</h1>
						<p>Description: {product.description}</p>
						<p>Price: {product.price}$</p>
						<button>Add to favorite</button>
					</li>
				))}
			</ul>

			{isOpen ? <Modal /> : null}
		</div>
	)
}

export default Products
