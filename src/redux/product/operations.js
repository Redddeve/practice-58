// https://651411798e505cebc2eaa668.mockapi.io/favorites
// https://dummyjson.com/products
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const dummyProducts = axios.create({
	baseURL: 'https://dummyjson.com/',
})

export const fetchProductsThunk = createAsyncThunk('fetchProducts', async (_, thunkAPI) => {
	try {
		const { data } = await dummyProducts.get('/products')
		return data.products
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
