export const TodoListItem = ({ id, title, deleteTodo }) => {
	return (
		<li>
			<h3>{title}</h3>
			<button onClick={() => deleteTodo(id)}>delete</button>
		</li>
	)
}
