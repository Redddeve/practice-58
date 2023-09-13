import React, { Component } from 'react'
import { Header } from './header/Header'
import { Search } from './searchForm/Search'
import { ProductList } from './productList/ProductList'
import { AddMoreButton } from './addMore/AddMoreButton'
import { StyledMain } from './Products.styled'
import { getProducts } from './helpers/dummyAPI'

export class Product extends Component {
	state = {
		loading: false,
		products: [],
		skip: 0,
		limit: 6,
	}
	async componentDidMount() {
		const { skip, limit } = this.state
		const { products } = await getProducts({ skip, limit })
		this.setState({ products })
	}
	async componentDidUpdate(prevProps, prevState) {
		const { skip, limit } = this.state
		if (prevState.skip !== skip) {
			const { products } = await getProducts({ skip, limit })
			this.setState(prev => ({
				products: [...prev.products, ...products],
			}))
		}
	}
	onLoadMore = () => {
		this.setState(prev => ({
			skip: prev.skip + this.state.limit,
		}))
	}
	render() {
		const { loading, products } = this.state
		return (
			<>
				<Header />
				<StyledMain>
					<Search />
					<ProductList data={products} />
					<AddMoreButton title='Load more' onLoadMore={this.onLoadMore} />
				</StyledMain>
			</>
		)
	}
}
