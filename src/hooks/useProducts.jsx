import { useEffect } from 'react'
import { fetchProducts } from '../services/api'
import { setProducts } from '../store/reducer/action'

export const useProducts = (page, dispatch) => {
	useEffect(() => {
		fetchProducts(page).then(data => dispatch(setProducts(data)))
	}, [page, dispatch])
}
