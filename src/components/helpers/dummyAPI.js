import axios from 'axios'

export const getProducts = async params => {
	return await axios
		.get('https://dummyjson.com/products', {
			params: {
				...params,
			},
		})
		.then(({ status, message, data }) => {
			if (status !== 200) {
				throw new Error(message)
			}
			return data
		})
}
