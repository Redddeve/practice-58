import React, { Component } from 'react'
import { Header } from './header/Header'
import { Search } from './searchForm/Search'
import { ProductList } from './productList/ProductList'
import { AddMoreButton } from './addMore/AddMoreButton'
import { StyledMain } from './Products.styled'
import { getProducts } from './helpers/dummyAPI'
import Modal from './Modal/Modal'

export class Product extends Component {
	state = {
		loading: false,
		products: [],
		skip: 0,
		limit: 6,
		isOpen: false,
		currentImg: null,
		currentTitle: null,
	}
	async componentDidMount() {
		const { skip, limit } = this.state
		await this.fetchData(skip, limit)
	}
	async componentDidUpdate(prevProps, prevState) {
		const { skip, limit } = this.state
		if (prevState.skip !== skip) {
			await this.fetchData(skip, limit)
		}
	}
	fetchData = async (skip, limit) => {
		const { products } = await getProducts({ skip, limit })
		this.setState(prev => ({
			products: [...prev.products, ...products],
		}))
	}
	onLoadMore = () => {
		this.setState(prev => ({
			skip: prev.skip + this.state.limit,
		}))
	}

	handleOpenModal = (img, title) => {
		this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: img, currentTitle: title }))
	}
	render() {
		const { loading, products, isOpen, currentTitle, currentImg } = this.state
		return (
			<>
				<Header />
				<StyledMain>
					<Search />
					<ProductList data={products} handleOpenModal={this.handleOpenModal} />
					<AddMoreButton title='Load more' onLoadMore={this.onLoadMore} />
					{isOpen && (
						<Modal title={currentTitle} close={this.handleOpenModal}>
							<img src={currentImg} alt={currentTitle} />
						</Modal>
					)}
				</StyledMain>
			</>
		)
	}
}
