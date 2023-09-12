export const TodoListItem = ({ id, title, deleteTodo, completed, toggleCheckbox }) => {
	return (
		<li>
			<input type='checkbox' checked={completed} onChange={() => toggleCheckbox(id)} />
			<h3>{title}</h3>
			<button onClick={() => deleteTodo(id)}>delete</button>
		</li>
	)
}
