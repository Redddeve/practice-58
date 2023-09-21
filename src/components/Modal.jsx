import styled from 'styled-components'
import { useMyContext } from '../store/context/useMyContext'

const Modal = () => {
	const { close, content } = useMyContext()
	return (
		<Back onClick={close}>
			<div>
				<img src={content.thumbnail} alt={content.title} />
				<h2>{content.title}</h2>
				<p>{content.description}</p>
			</div>
		</Back>
	)
}

const Back = styled.div`
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: grid;
	place-content: center;
	& div {
		background-color: white;
		width: 40vh;
		height: 40vw;
	}
`

export default Modal
