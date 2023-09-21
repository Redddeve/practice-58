import { types } from './actionTypes'

export const setState = payload => ({ type: types.setState, payload })
export const setProducts = payload => ({ type: types.setProducts, payload })
