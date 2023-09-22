import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useMyContext } from '../store/context/useMyContext'
import Modal from '../components/Modal'
import { removeFav, setF } from '../store/reducer/action'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export const Favorite = () => {
	const { favorites, toggle, isOpen, dispatch } = useMyContext()

	useEffect(() => {
		axios.get('http://localhost:8080/products').then(({ data }) => dispatch(setF(data)))
	}, [])
	const handleRemove = item => {
		dispatch(removeFav(item))
	}

	const [searchParams, setSearchParams] = useSearchParams()
	const productName = searchParams.get('name') ?? ''

	const updateQueryString = name => {
		const nextParams = name ? { name } : {}
		setSearchParams(nextParams)
	}

	const visibleProducts = useMemo(
		() => favorites.filter(product => product.title.toLowerCase().includes(productName.toLowerCase())),
		[favorites, productName]
	)
	const [value, setValue] = useState(1)
	return (
		<div>
			<button onClick={() => setValue(value + 1)}>{value}</button>
			<div>
				<input type='text' value={productName} onChange={e => updateQueryString(e.target.value)} />
			</div>
			<ul>
				{visibleProducts?.map(product => (
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
