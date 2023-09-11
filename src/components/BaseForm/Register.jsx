import React, { Component } from 'react'
import { register } from '../../Helpers/registerForm'
export default class Register extends Component {
	state = {
		name: '',
		telephone: '',
		email: '',
		checked: false,
	}

	handleChangeInput = e => {
		if (e.target.name === 'checked') {
			this.setState(prevState => ({ checked: !prevState.checked }))
			return
		}
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = e => {
		e.preventDefault()
		register(this.state)
	}

	render() {
		const { name, telephone, email, checked } = this.state
		return (
			<form onSubmit={this.onSubmit}>
				Register
				<input
					onChange={this.handleChangeInput}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					name='name'
					value={name}
				/>
				<input
					onChange={this.handleChangeInput}
					pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
					name='telephone'
					value={telephone}
				/>
				<input onChange={this.handleChangeInput} name='email' value={email} />
				<input name='checked' type='checkbox' onChange={this.handleChangeInput} checked={checked} />
				<button type='submit'>Submit</button>
			</form>
		)
	}
}
