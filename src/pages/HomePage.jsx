import { useMyContext } from '../store/context/useMyContext'
import { setProducts } from '../store/reducer/action'

const HomePage = () => {
	const { name, state, dispatch } = useMyContext()
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
