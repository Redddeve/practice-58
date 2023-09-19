// 'https://dummyjson.com/users'
// 'https://dummyjson.com/users/1'
// 'https://dummyjson.com/users/5/todos'
import axios from 'axios'

export const fetchAllUsers = async () => {
	const { data } = await axios.get('https://dummyjson.com/users')
	return data.users
}

export const fetchUserById = async id => {
	const { data } = await axios.get(`https://dummyjson.com/users/${id}`)
	return data
}

export const fetchUserTodos = async id => {
	const { data } = await axios.get(`https://dummyjson.com/users/${id}/todos`)
	return data.todos
}
