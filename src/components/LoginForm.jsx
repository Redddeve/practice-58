import React from 'react'
import { useForm } from 'react-hook-form'
import { logInUser } from '../redux/user/userOperations'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const submit = data => {
		dispatch(logInUser(data))
			.unwrap()
			.then(res => navigate('/products'))
			.catch(() => toast.error('Data is not correct'))
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
