import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
	const { register, handleSubmit } = useForm()
	const submit = data => {}
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
