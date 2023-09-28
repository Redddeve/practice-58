import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
	const { register, handleSubmit, reset } = useForm()

	const submit = data => {
		console.log(data)
		reset()
	}

	return (
		<div>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('email', { required: true })} />
				<input {...register('password', { required: true })} />
				<button>Login</button>
			</form>
		</div>
	)
}

export default LoginForm
