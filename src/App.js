import article from './assets/article.json'
// TODO
//1. Створити компонент форми для додавання - Пронтенко
//2. Створити компонент фільтрації - Павло
//3. Створити компонент для відображення даних - Арсен

import React from 'react'
import AddTodo from './components/AddTodo'
import { nanoid } from 'nanoid'

class App extends React.Component {
	state = {
		todos: [],
		currentTodo: '',
	}
	handleChangeInput = e => {
		this.setState({ currentTodo: e.target.value })
	}

	handleAddTodo = () => {
		const item = { title: this.state.currentTodo, id: nanoid() }
		this.setState(prev => ({ todos: [...prev.todos, item], currentTodo: '' }))
	}

	render() {
		return (
			<>
				<AddTodo
					addTodo={this.handleAddTodo}
					inputDataChanger={this.handleChangeInput}
					inputData={this.state.currentTodo}
				/>
			</>
		)
	}
}

export default App
