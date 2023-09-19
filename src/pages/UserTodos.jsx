import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchUserTodos } from '../services/api'
import { useHttp } from '../hooks/useHttp'

const UserTodos = () => {
	const { id } = useParams()
	const { data: todos } = useHttp(fetchUserTodos, id)
	if (!todos.length) {
		return <h1>This gui is not active!!</h1>
	}
	return (
		<div>
			<ol>
				{todos.map(({ todo, id }) => (
					<li key={id}>
						<p>{todo}</p>
					</li>
				))}
			</ol>
		</div>
	)
}

export default UserTodos
