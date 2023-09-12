import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, deleteTodo, toggleCheckbox }) => {
	return (
		<ul>
			{todos.map(todo => (
				<TodoListItem key={todo.id} {...todo} deleteTodo={deleteTodo} toggleCheckbox={toggleCheckbox} />
			))}
		</ul>
	)
}
