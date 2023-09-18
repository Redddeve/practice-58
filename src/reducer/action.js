import { types } from './actionTypes'

export const setQuery = query => ({ type: types.SET_QUERY, payload: query })

export const setPicturesReset = second => ({ type: types.SET_PICTURES_RESET, payload: [] })

export const setLoading = payload => ({ type: types.SET_LOADING, payload })

export const setPictures = photos => ({ type: types.SET_PICTURES, payload: photos })

export const setPage = () => ({
	type: types.SET_PAGE,
})

export const setIsOpen = () => ({
	type: types.SET_IS_OPEN,
})

export const setCurrentImg = src => ({ type: types.SET_CURRENT_IMG, payload: src })

export const setCurrentAlt = alt => ({ type: types.SET_CURRENT_ALT, payload: alt })
