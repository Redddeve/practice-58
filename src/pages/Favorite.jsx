import { useDispatch, useSelector } from 'react-redux'
import { selectFavError, selectFavFilter, selectFavLoading, selectFavorite, selectFilter } from '../redux/selectors'
import { useEffect } from 'react'
import { deleteFromFavoritesThunk, fetchFavoritesThunk } from '../redux/favorite/operations'
import { filterData } from '../redux/filter/filterSlice'

export const Favorite = () => {
	const favorites = useSelector(selectFavFilter)
	const filter = useSelector(selectFilter)

	const loading = useSelector(selectFavLoading)
	const error = useSelector(selectFavError)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchFavoritesThunk())
	}, [dispatch])

	const handleDelete = id => {
		dispatch(deleteFromFavoritesThunk(id))
	}

	return (
		<div>
			<input value={filter} onChange={e => dispatch(filterData(e.target.value))} />
			<ul>
				{favorites.map(product => (
					<li key={product.id}>
						<img src={product.thumbnail} alt={product.title} />
						<h1>{product.title}</h1>
						<p>Description: {product.description}</p>
						<p>Price: {product.price}$</p>
						<button onClick={() => handleDelete(product.id)}>Remove from favorites</button>
					</li>
				))}
			</ul>
		</div>
	)
}
