import { useMyContext } from '../store/context/useMyContext'

const HomePage = () => {
	const { name, state, dispatch, content } = useMyContext()
	console.log(content)
	return (
		<div>
			HomePage
			<p>{name}</p>
			<h1>{state}</h1>
			{/* <button onClick={() => dispatch(setProducts([123]))}>CLICK</button> */}
		</div>
	)
}

export default HomePage
