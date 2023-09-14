import React from 'react'
import { ImgItem } from './Card.Styled'

export const Card = ({ src, alt, onImgClick }) => {
	return (
		<ImgItem onClick={() => onImgClick(src, alt)}>
			<img src={src} alt={alt} />
		</ImgItem>
	)
}
