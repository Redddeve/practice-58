import React from 'react'
import { Card } from '../Card/Card'

export const Main = ({ pictures }) => {
	return (
		<div>
			<ul>
				{pictures.map(picture => (
					<Card src={picture.src.landscape} key={picture.id} alt={picture.alt} />
				))}
			</ul>
		</div>
	)
}
