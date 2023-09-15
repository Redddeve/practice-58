import React, { Component, useState, useEffect } from 'react'
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch'
import { Main } from './components/Main/Main'
import { ButtonLoadMore } from './components/ButtonLoadMore/ButtonLoadMore'
import { getImages } from './services/fetch'
import { Modal } from './components/Modal/Modal'
// План

// class App extends Component {
const App = () => {
	const [page, setPage] = useState(1)
	const [pictures, setPictures] = useState([])
	const [query, setQuery] = useState('birds')
	const [isOpen, setIsOpen] = useState(false)
	const [currentImg, setCurrentImg] = useState(null)
	const [currentAlt, setCurrentAlt] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		fetchPictures({ page, query })
	}, [page, query])

	const getSearch = query => {
		setQuery(query)
		setPictures([])
		setPage(1)
	}

	const clear = e => {
		setPictures([])
		fetchPictures({ page: 1, query: 'birds' })
	}

	const fetchPictures = async params => {
		setIsLoading(true)
		try {
			const { photos } = await getImages(params)
			setPictures(prev => [...prev, ...photos])
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
		// try {
		// 	const { photos } = await getImages(params)
		// 	this.setState(prev => ({ pictures: [...prev.pictures, ...photos] }))
		// } catch (error) {}
	}

	const handleLoadMore = () => {
		// this.setState(prev => ({ page: prev.page + 1 }))
		setPage(prev => prev + 1)
	}

	const onImgClick = (src, alt) => {
		setIsOpen(!isOpen)
		setCurrentImg(src)
		setCurrentAlt(alt)
		// this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: src, currentAlt: alt }))
	}

	return (
		<>
			<HeaderSearch getSearch={getSearch} clear={clear} />
			{pictures.length ? <Main pictures={pictures} onImgClick={onImgClick} /> : <h2>There is nothing to show</h2>}
			{isLoading && <h2> Loading...</h2>}
			{!isLoading && pictures.length ? <ButtonLoadMore handleLoadMore={handleLoadMore} /> : null}

			{isOpen && <Modal currentAlt={currentAlt} currentImg={currentImg} onImgClick={onImgClick} />}
		</>
	)
}
// 	state = {
// 		page: 1,
// 		pictures: [],
// 		query: 'birds',
// 		isOpen: false,
// 		currentImg: null,
// 		currentAlt: null,
// 	}
// getSnapshotBeforeUpdate(prevProps, prevState) {
// 	return document.documentElement.scrollHeight - 100
// }
// getSearch = query => {
// 	setState({ query, pictures: [], page: 1 })
// }

// 	componentDidUpdate(_, prevState, snapshot) {
// 		if (snapshot !== null) {
// 			setTimeout(() => {
// 				window.scroll({
// 					top: snapshot,
// 					behavior: 'smooth',
// 				})
// 			}, 500)
// 		}

// 		const { query, page } = this.state
// 		if (prevState.page !== page || prevState.query !== query) {
// 			this.fetchPictures({ page, query })
// 		}
// 	}

// fetchPictures = async params => {
// 	try {
// 		const { photos } = await getImages(params)
// 		this.setState(prev => ({ pictures: [...prev.pictures, ...photos] }))
// 	} catch (error) {}
// }

// 	async componentDidMount() {
// 		const { query, page } = this.state

// 		await this.fetchPictures({ page, query })
// 	}

// handleLoadMore = () => {
// 	this.setState(prev => ({ page: prev.page + 1 }))
// }

// onImgClick = (src, alt) => {
// 	this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: src, currentAlt: alt }))
// }

// 	render() {
// const { pictures, isOpen, currentAlt, currentImg } = this.state
// 		// return (
// 		// 	<>
// 		// 		<HeaderSearch getSearch={this.getSearch} />
// 		// 		<Main pictures={pictures} onImgClick={this.onImgClick}></Main>

// 		// 		<ButtonLoadMore handleLoadMore={this.handleLoadMore} />
// 		// 		{isOpen && <Modal currentAlt={currentAlt} currentImg={currentImg} onImgClick={this.onImgClick} />}
// 		// 	</>
// 		// )
// 	}
// }

export default App
