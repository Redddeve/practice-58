import React, { useContext } from 'react'
import { ImgItem } from './Card.Styled'
import { context } from '../../context/ContextProvider'

export const Card = ({ src, alt, onImgClick }) => {
	const { userName, age } = useContext(context)
	return (
		<ImgItem onClick={() => onImgClick(src, alt)}>
			<img src={src} alt={alt} />
			<h2>{userName}</h2>
			<p>{age}</p>
		</ImgItem>
	)
}
