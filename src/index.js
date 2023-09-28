import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'modern-normalize'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			<ToastContainer />
		</Provider>
	</BrowserRouter>
)
