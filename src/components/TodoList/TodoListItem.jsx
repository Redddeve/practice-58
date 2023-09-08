export const TodoListItem = ({ id, title }) => {
	return (
		<li>
			<h3>{title}</h3>
			<button>delete</button>
		</li>
	)
}
