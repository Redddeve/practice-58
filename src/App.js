import React, { Component } from 'react'
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch'
import { Main } from './components/Main/Main'
import { ButtonLoadMore } from './components/ButtonLoadMore/ButtonLoadMore'
import { getImages } from './services/fetch'
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
	}

	fetchPictures = async () => {
		try {
			const { photos } = await getImages({})
			console.log(photos)
			this.setState(prev => ({ pictures: [...prev.pictures, ...photos] }))
		} catch (error) {}
	}

	async componentDidMount() {
		await this.fetchPictures()
	}

	handleLoadMore = () => {
		this.setState(prev => ({ page: prev.page + 1 }))
	}

	render() {
		const { pictures } = this.state
		return (
			<>
				<HeaderSearch />
				<Main pictures={pictures}></Main>

				<ButtonLoadMore handleLoadMore={this.handleLoadMore} />
			</>
		)
	}
}

export default App
