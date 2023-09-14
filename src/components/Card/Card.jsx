import React from 'react'

export const Card = ({ src, alt }) => {
	return (
		<li>
			<img src={src} alt={alt} />
		</li>
	)
}
