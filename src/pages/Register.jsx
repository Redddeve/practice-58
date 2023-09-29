import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerThunk } from '../redux/user/operations'
import { selectIsLogin } from '../redux/user/selectors'
import { Navigate } from 'react-router-dom'

const Register = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const isLogin = useSelector(selectIsLogin)
	const submit = data => {
		dispatch(registerThunk(data))
	}
	if (isLogin) {
		return <Navigate to='/' />
	}
	return (
		<div>
			<form className='shadow-lg px-4 grid gap-4 bg-slate-400 w-1/2' onSubmit={handleSubmit(submit)}>
				<label className='grid gap-2'>
					Name
					<input {...register('name')} />
				</label>
				<label className='grid gap-2'>
					email
					<input {...register('email')} />
				</label>
				<label className='grid gap-2'>
					password
					<input {...register('password')} />
				</label>

				<input type='submit' />
			</form>
		</div>
	)
}

export default Register
