import React from 'react'
import { Card } from '../Card/Card'
import { ImgListStyled } from './Main.Styled'

export const Main = ({ pictures }) => {
	return (
		<div>
			<ImgListStyled>
				{pictures.map(picture => (
					<Card src={picture.src.landscape} key={picture.id} alt={picture.alt} />
				))}
			</ImgListStyled>
		</div>
	)
}
