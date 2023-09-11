//1. Створити компонент форми для додавання - Пронтенко [+]
//2. Створити компонент фільтрації - Павло
//3. Створити компонент для відображення даних - Арсен [+]
//4. Контрольована форма - Дмитро
//5. Не контрольована форма

import React from 'react'
import { nanoid } from 'nanoid'
import AddTodo from '../AddTodo'
import { FilterTodo } from '../FilterTodo/FilterTodo'
import { TodoList } from './TodoList'

class TodoWrapper extends React.Component {
	state = {
		todos: [],
		currentTodo: '',
		filter: '',
	}

	handleChangeInput = e => {
		this.setState({ currentTodo: e.target.value })
	}

	handleAddTodo = () => {
		const item = { title: this.state.currentTodo, id: nanoid() }
		this.setState(prev => ({ todos: [...prev.todos, item], currentTodo: '' }))
	}

	handleChancheFilter = event => {
		this.setState({ filter: event.target.value })
	}

	filterArrTodos = () => {
		return this.state.todos.filter(todo => todo.title.toLowerCase().includes(this.state.filter.toLowerCase()))
	}

	handleDeleteToDo = id => {
		this.setState(prev => ({ todos: prev.todos.filter(item => item.id !== id) }))
	}

	render() {
		const { todos, currentTodo, filter } = this.state
		const filteredData = this.filterArrTodos()
		return (
			<>
				<AddTodo addTodo={this.handleAddTodo} inputDataChanger={this.handleChangeInput} inputData={currentTodo} />

				<FilterTodo takeData={this.handleChancheFilter} filterValue={filter} />

				<TodoList todos={filteredData} deleteTodo={this.handleDeleteToDo} />
			</>
		)
	}
}

export default TodoWrapper
