import React from 'react'
import { selectError, selectLoading, selectProducts } from '../redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsThunk } from '../redux/product/operations'
import { addToFavoritesThunk } from '../redux/favorite/operations'

const Products = () => {
	const products = useSelector(selectProducts)
	const loading = useSelector(selectLoading)
	const error = useSelector(selectError)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchProductsThunk())
	}, [dispatch])

	const handleAddToFav = product => {
		dispatch(addToFavoritesThunk(product))
	}

	return (
		<div>
			<ul>
				{products?.map(product => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} />
						<h1>{product.title}</h1>
						<p>Description: {product.description}</p>
						<p>Price: {product.price}$</p>
						<button onClick={() => handleAddToFav(product)}>Add to favorite</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Products
