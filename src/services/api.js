// https://dummyjson.com/products

import axios from 'axios'
const api = axios.create({ baseURL: 'https://dummyjson.com' })

export const fetchProducts = async page => {
	const { data } = await api.get('/products', {
		params: {
			limit: 6,
			page,
		},
	})
	return data.products
}
