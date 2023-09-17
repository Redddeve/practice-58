import React, { Component, useState, useEffect } from 'react'
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch'
import { Main } from './components/Main/Main'
import { ButtonLoadMore } from './components/ButtonLoadMore/ButtonLoadMore'
import { getImages } from './services/fetch'
import { Modal } from './components/Modal/Modal'

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
	}

	const handleLoadMore = () => {
		setPage(prev => prev + 1)
	}

	const onImgClick = (src, alt) => {
		setIsOpen(!isOpen)
		setCurrentImg(src)
		setCurrentAlt(alt)
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

export default App
