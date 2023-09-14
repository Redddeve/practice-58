import React, { Component } from 'react'
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch'
import { Main } from './components/Main/Main'
import { ButtonLoadMore } from './components/ButtonLoadMore/ButtonLoadMore'
import { getImages } from './services/fetch'
import { Modal } from './components/Modal/Modal'
// План
// Створити пошук картинок через пексельс
// Заготовка для запиту, URL, Headers, params:
// axios.defaults.baseURL = 'https://api.pexels.com/v1/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 15,
// };

class App extends Component {
	state = {
		page: 1,
		pictures: [],
		query: 'birds',
		isOpen: false,
		currentImg: null,
		currentAlt: null,
	}

	getSearch = query => {
		this.setState({ query, pictures: [], page: 1 })
	}

	componentDidUpdate(_, prevState) {
		const { query, page } = this.state
		if (prevState.page !== page || prevState.query !== query) {
			this.fetchPictures({ page, query })
		}
	}

	fetchPictures = async params => {
		try {
			const { photos } = await getImages(params)
			this.setState(prev => ({ pictures: [...prev.pictures, ...photos] }))
		} catch (error) {}
	}

	async componentDidMount() {
		const { query, page } = this.state

		await this.fetchPictures({ page, query })
	}

	handleLoadMore = () => {
		this.setState(prev => ({ page: prev.page + 1 }))
	}

	onImgClick = (src, alt) => {
		this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: src, currentAlt: alt }))
	}

	render() {
		const { pictures, isOpen, currentAlt, currentImg } = this.state
		return (
			<>
				<HeaderSearch getSearch={this.getSearch} />
				<Main pictures={pictures} onImgClick={this.onImgClick}></Main>

				<ButtonLoadMore handleLoadMore={this.handleLoadMore} />
				{isOpen && <Modal currentAlt={currentAlt} currentImg={currentImg} onImgClick={this.onImgClick} />}
			</>
		)
	}
}

export default App
