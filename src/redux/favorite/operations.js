// https://651411798e505cebc2eaa668.mockapi.io/favorites
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://651411798e505cebc2eaa668.mockapi.io/'

export const fetchFavoritesThunk = createAsyncThunk('fetchFavorites', async (_, thunkAPI) => {
	try {
		const { data } = await axios.get('favorites')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addToFavoritesThunk = createAsyncThunk('addToFavoritesThunk', async (product, thunkAPI) => {
	try {
		const data = await axios.post('favorites', product)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const deleteFromFavoritesThunk = createAsyncThunk('deleteFromFavorites', async (id, thunkAPI) => {
	try {
		await axios.delete(`favorites/${id}`)
		return id
	} catch (err) {
		return thunkAPI.rejectWithValue(err.message)
	}
})
