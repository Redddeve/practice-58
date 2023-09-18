import React, { Component, useState, useEffect, useReducer } from 'react'
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch'
import { Main } from './components/Main/Main'
import { ButtonLoadMore } from './components/ButtonLoadMore/ButtonLoadMore'
import { getImages } from './services/fetch'
import { Modal } from './components/Modal/Modal'
import { initialState, picturesReducer } from './reducer/reducer'
import {
	setCurrentAlt,
	setCurrentImg,
	setIsOpen,
	setLoading,
	setPage,
	setPictures,
	setPicturesReset,
	setQuery,
} from './reducer/action'

const App = () => {
	const [state, dispatch] = useReducer(picturesReducer, initialState)

	const { page, pictures, query, isOpen, currentImg, currentAlt, isLoading } = state
	useEffect(() => {
		fetchPictures({ page, query })
	}, [page, query])

	const getSearch = query => {
		dispatch(setQuery(query))

		// setQuery(query)
		// setPictures([])
		// setPage(1)
	}

	const clear = e => {
		dispatch(setPicturesReset())
		// setPictures([])
		fetchPictures({ page: 1, query: 'birds' })
	}

	const fetchPictures = async params => {
		dispatch(setLoading(true))
		// setIsLoading(true)
		try {
			const { photos } = await getImages(params)
			dispatch(setPictures(photos))
			// setPictures(prev => [...prev, ...photos])
		} catch (error) {
			console.error(error)
		} finally {
			dispatch(setLoading(false))

			// setIsLoading(false)
		}
	}

	const handleLoadMore = () => {
		dispatch(setPage())
		// setPage(prev => prev + 1)
	}

	const onImgClick = (src, alt) => {
		dispatch(setIsOpen())
		dispatch(setCurrentImg(src))
		dispatch(setCurrentAlt(alt))

		// setIsOpen(!isOpen)
		// setCurrentImg(src)
		// setCurrentAlt(alt)
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
