import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createUser } from '../redux/user/userOperations'

const RegisterForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const dispatch = useDispatch()

	const submit = data => {
		const { password, email, confirmPassword, login } = data
		if (data.password === data.confirmPassword) {
			console.log(data)
			// const userData = { password, email, login }

			dispatch(createUser({ password, email, login }))
			reset()
		}
	}

	return (
		<div>
			<form style={{ display: 'grid', gap: '5px' }} onSubmit={handleSubmit(submit)}>
				<label>
					{' '}
					Login
					<input {...register('login', { required: true })} />
				</label>
				<label>
					{' '}
					Email
					<input {...register('email', { required: true })} />
				</label>
				<label>
					Password
					<input {...register('password', { required: true })} />
				</label>
				<label>
					Confirm Password
					<input {...register('confirmPassword', { required: true })} />
				</label>
				<button>Register</button>
			</form>
		</div>
	)
}

export default RegisterForm
