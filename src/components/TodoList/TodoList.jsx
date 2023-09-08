import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, deleteTodo }) => {
	return (
		<ul>
			{todos.map(todo => (
				<TodoListItem key={todo.id} {...todo} deleteTodo={deleteTodo} />
			))}
		</ul>
	)
}
