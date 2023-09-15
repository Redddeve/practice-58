import React, { Component, useCallback, useEffect, useState } from 'react'
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch'
import { Main } from './components/Main/Main'
import { ButtonLoadMore } from './components/ButtonLoadMore/ButtonLoadMore'
import { getImages } from './services/fetch'
import { Modal } from './components/Modal/Modal'

const App = () => {
	const [state, setState] = useState({
		page: 1,
		pictures: [],
		query: 'birds',
		isOpen: false,
		currentImg: null,
		currentAlt: null,
	})
	const { pictures, isOpen, currentAlt, currentImg, query, page } = state

	const getSearch = query => {
		setState({ ...state, query, pictures: [], page: 1 })
	}
	const fetchPictures = useCallback(async params => {
		try {
			const { photos } = await getImages(params)
			setState(prev => ({ ...prev, pictures: [...prev.pictures, ...photos] }))
		} catch (error) {}
	}, [])
	useEffect(() => {
		const fn = async query => {
			await fetchPictures({ query, page })
		}
		fn(query)
	}, [fetchPictures, query, page])

	const handleLoadMore = () => {
		setState(prev => ({ ...state, page: prev.page + 1 }))
	}

	const onImgClick = (src, alt) => {
		setState(prev => ({ ...state, isOpen: !prev.isOpen, currentImg: src, currentAlt: alt }))
	}

	return (
		<>
			<HeaderSearch getSearch={getSearch} />
			<Main pictures={pictures} onImgClick={onImgClick}></Main>

			<ButtonLoadMore handleLoadMore={handleLoadMore} />
			{isOpen && <Modal currentAlt={currentAlt} currentImg={currentImg} onImgClick={onImgClick} />}
		</>
	)
}

export default App
