import React, { Component } from 'react'

class AddTodo extends Component {
	state = {
		currentTodo: '',
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.addTodo(this.state.currentTodo)
		this.setState({ currentTodo: '' })
	}

	handleChangeInput = e => {
		this.setState({ currentTodo: e.target.value })
	}

	render() {
		const { currentTodo } = this.state
		console.log(this.props)
		return (
			<form onSubmit={this.handleSubmit}>
				<input onChange={this.handleChangeInput} value={currentTodo} type='text' />
				<button>Add todo</button>
			</form>
		)
	}
}

export default AddTodo
