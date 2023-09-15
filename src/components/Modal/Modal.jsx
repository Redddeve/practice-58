import React, { useEffect } from 'react'
import styled from 'styled-components'

export const Modal = ({ currentAlt, currentImg, onImgClick }) => {
	useEffect(() => {
		const onCloseModal = e => {
			if (e.key === 'Escape') {
				onImgClick()
			}
		}
		document.addEventListener('keydown', onCloseModal)
		return () => {
			document.removeEventListener('keydown', onCloseModal)
		}
	}, [onImgClick])

	return (
		<StyledModalBackdrop onClick={onImgClick}>
			<ModalContent>
				<h2>{currentAlt}</h2>
				<img src={currentImg} alt={currentAlt} />
			</ModalContent>
		</StyledModalBackdrop>
	)
}

export const StyledModalBackdrop = styled.div`
	inset: 0;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.7);
	display: grid;
	place-content: center;
	backdrop-filter: blur(10px);
`
const ModalContent = styled.div`
	background-color: white;
	display: grid;
	text-align: center;
	gap: 20px;
	padding-top: 10px;
`
