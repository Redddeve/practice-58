import React from 'react'
import { useMyContext } from '../store/context/useMyContext'

import Modal from '../components/Modal'
import { addFavorites } from '../store/reducer/action'
import axios from 'axios'

const Products = () => {
	const { products, isOpen, toggle, dispatch } = useMyContext()

	console.log(products)
	const handleAddToFav = item => {
		axios.post('http://localhost:8080/products', item)
		dispatch(addFavorites(item))
	}
	return (
		<div>
			<ul>
				{products.map(product => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} onClick={() => toggle(product)} />
						<h1>{product.title}</h1>
						<p>Description: {product.description}</p>
						<p>Price: {product.price}$</p>
						<button onClick={() => handleAddToFav(product)}>Add to favorite</button>
					</li>
				))}
			</ul>

			{isOpen ? <Modal /> : null}
		</div>
	)
}

export default Products
