import React from 'react'
import { Card } from '../Card/Card'
import { ImgListStyled } from './Main.Styled'

export const Main = ({ pictures, onImgClick }) => {
	return (
		<div>
			<ImgListStyled>
				{pictures.map(picture => (
					<Card src={picture.src.landscape} key={picture.id} alt={picture.alt} onImgClick={onImgClick} />
				))}
			</ImgListStyled>
		</div>
	)
}
