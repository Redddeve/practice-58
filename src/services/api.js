// 'https://dummyjson.com/users'

import axios from 'axios'

export const fetchAllUsers = async () => {
	const { data } = await axios.get('https://dummyjson.com/users')
	return data.users
}
