import React from 'react'
import { useMyContext } from '../store/context/useMyContext'
import Modal from '../components/Modal'
import { removeFav } from '../store/reducer/action'

export const Favorite = () => {
	const { favorites, toggle, isOpen, dispatch } = useMyContext()
	const handleRemove = item => {
		dispatch(removeFav(item))
	}
	return (
		<div>
			<ul>
				{favorites?.map(product => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} onClick={() => toggle(product)} />
						<h1>{product.title}</h1>
						<p>Description: {product.description}</p>
						<p>Price: {product.price}$</p>
						<button
							onClick={() => {
								handleRemove(product.id)
							}}
						>
							Remove from favorites
						</button>
					</li>
				))}
			</ul>

			{isOpen ? <Modal /> : null}
		</div>
	)
}
