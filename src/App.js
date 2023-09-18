import React, { Component, useState, useEffect, useReducer, useContext, useCallback } from 'react'
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
import { context } from './context/ContextProvider'

const App = () => {
	const { page, pictures, query, isOpen, currentImg, currentAlt, isLoading, dispatch } = useContext(context)

	const fetchPictures = useCallback(
		async params => {
			dispatch(setLoading(true))
			try {
				const { photos } = await getImages(params)
				dispatch(setPictures(photos))
			} catch (error) {
				console.error(error)
			} finally {
				dispatch(setLoading(false))
			}
		},
		[dispatch]
	)

	useEffect(() => {
		fetchPictures({ page, query })
	}, [page, query, fetchPictures])

	const clear = e => {
		dispatch(setPicturesReset())
		fetchPictures({ page: 1, query: 'birds' })
	}

	const onImgClick = (src, alt) => {
		dispatch(setIsOpen())
		dispatch(setCurrentImg(src))
		dispatch(setCurrentAlt(alt))
	}

	return (
		<>
			<HeaderSearch clear={clear} />
			{pictures.length ? <Main pictures={pictures} onImgClick={onImgClick} /> : <h2>There is nothing to show</h2>}
			{isLoading && <h2> Loading...</h2>}
			{!isLoading && pictures.length ? <ButtonLoadMore /> : null}

			{isOpen && <Modal currentAlt={currentAlt} currentImg={currentImg} onImgClick={onImgClick} />}
		</>
	)
}

export default App
