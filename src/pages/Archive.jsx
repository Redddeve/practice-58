import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectArchive } from '../redux/archive/selectors'
import {
	deleteAllArchiveTodo,
	deleteCheckedTodo,
	deleteCheckedTodosById,
	deleteFromArchiveTodo,
} from '../redux/archive/slice'

const Archive = () => {
	const dispatch = useDispatch()
	const todos = useSelector(selectArchive)
	const handleDeleteTodo = id => {
		dispatch(deleteFromArchiveTodo(id))
	}
	const handleDeleteAllTodos = () => {
		dispatch(deleteAllArchiveTodo())
	}
	const handleDeleteChecked = id => {
		dispatch(deleteCheckedTodo(id))
	}
	return (
		<div>
			<ol className='list-decimal flex flex-col gap-4'>
				{todos.map(todo => (
					<li key={todo.id} className='flex gap-2 border-2 border-gray p-2'>
						<input onChange={() => handleDeleteChecked(todo.id)} type='checkbox' />
						<h3>Title: {todo.text}</h3>
						<p>Author: {todo.author}</p>
						<p>Date: {todo.date}</p>
						<p>status: {todo.completed ? 'comleted' : 'uncompleted'}</p>
						<button className='btn ml-auto' onClick={() => handleDeleteTodo(todo.id)}>
							Delete
						</button>
					</li>
				))}
				<button onClick={() => dispatch(deleteCheckedTodosById())}>Delete checked</button>
				<button onClick={handleDeleteAllTodos}>Delete All</button>
			</ol>
		</div>
	)
}

export default Archive
