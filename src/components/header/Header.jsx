import React from 'react'
import { StyledHeader, StyledLogo, StyledCart } from './header.Styled'

export const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>LOGO</StyledLogo>
			<StyledCart>Cart</StyledCart>
		</StyledHeader>
	)
}
