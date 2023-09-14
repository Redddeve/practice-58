import React from 'react'
import { ImgItem } from './Card.Styled'

export const Card = ({ src, alt }) => {
	return (
		<ImgItem>
			<img src={src} alt={alt} />
		</ImgItem>
	)
}
