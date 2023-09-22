import { types } from './actionTypes'

export const setState = payload => ({ type: types.setState, payload })
export const setProducts = payload => ({ type: types.setProducts, payload })
export const addFavorites = payload => ({ type: types.addToFavorites, payload })
export const removeFav = payload => ({ type: types.removeFrom, payload })
