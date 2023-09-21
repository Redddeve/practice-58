import { useMyContext } from '../store/context/useMyContext'

const HomePage = () => {
	const { name, state } = useMyContext()
	console.log(name)
	return (
		<div>
			HomePage
			<p>{name}</p>
			<h1>{state}</h1>
		</div>
	)
}

export default HomePage
