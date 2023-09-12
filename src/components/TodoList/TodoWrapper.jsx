//1. Створити компонент форми для додавання - Пронтенко [+]
//2. Створити компонент фільтрації - Павло
//3. Створити компонент для відображення даних - Арсен [+]
//4. Контрольована форма - Дмитро
//5. Не контрольована форма - Юля
//6. LocalStorage - iliya
//7. Filter - all, active,completed

import React from 'react'
import { nanoid } from 'nanoid'
import AddTodo from '../AddTodo'
import { FilterTodo } from '../FilterTodo/FilterTodo'
import { TodoList } from './TodoList'
import { styled } from 'styled-components'
import Filter from '../Filter/Filter'
const btns = ['all', 'active', 'completed']
class TodoWrapper extends React.Component {
	state = {
		todos: [],
		filter: '',
		active: 'all',
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.todos.length !== this.state.todos.length) {
			window.localStorage.setItem('ToDose', JSON.stringify(this.state.todos))
		}
	}

	componentDidMount() {
		const array = JSON.parse(window.localStorage.getItem('ToDose'))
		console.log(array)
		if (array?.length) {
			this.setState({ todos: array })
		}
	}

	handleChangeInput = e => {
		this.setState({ currentTodo: e.target.value })
	}

	handleAddTodo = text => {
		const item = { title: text, id: nanoid(), completed: false }

		this.setState(prev => ({ todos: [...prev.todos, item] }))
	}

	handleChancheFilter = event => {
		this.setState({ filter: event.target.value })
	}

	filterArrTodos = () => {
		const { active, todos } = this.state
		// return this.state.todos.filter(todo => todo.title.toLowerCase().includes(this.state.filter.toLowerCase()))
		switch (active) {
			case 'active':
				return todos.filter(item => !item.completed)
			case 'completed':
				return todos.filter(item => item.completed)
			case 'all':
				return todos
			default:
				break
		}
	}

	handleDeleteToDo = id => {
		this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
	}

	handleToggleCheckbox = id => {
		this.setState(prev => ({
			todos: prev.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
		}))
	}

	handleChancheActive = btnName => {
		this.setState({ active: btnName })
	}

	render() {
		const { currentTodo, filter } = this.state
		const filteredData = this.filterArrTodos()
		return (
			<>
				<Wrapper>
					<AddTodo addTodo={this.handleAddTodo} />
					<FilterTodo takeData={this.handleChancheFilter} filterValue={filter} />
					<Filter btns={btns} ChancheActive={this.handleChancheActive} />
					<TodoList
						todos={filteredData}
						deleteTodo={this.handleDeleteToDo}
						toggleCheckbox={this.handleToggleCheckbox}
					/>
				</Wrapper>
			</>
		)
	}
}

export default TodoWrapper

const Wrapper = styled.div`
	width: 320px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
