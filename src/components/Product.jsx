import React, { Component } from 'react'
import { Header } from './header/Header'
import { Search } from './searchForm/Search'
import { ProductList } from './productList/ProductList'
import { AddMoreButton } from './addMore/AddMoreButton'
import { StyledMain } from './Products.styled'

export class Product extends Component {
	state = {
		loading: false,
		products: [],
	}
	render() {
		const { loading, products } = this.state
		return (
			<>
				<Header />
				<StyledMain>
					<Search />
					<ProductList data={products} />
					<AddMoreButton title='Load more' />
				</StyledMain>
			</>
		)
	}
}
