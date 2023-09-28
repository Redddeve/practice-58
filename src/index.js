import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'modern-normalize'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { Global } from './styles/Global'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Provider store={store}>
				<App />
				<ToastContainer />
			</Provider>
		</BrowserRouter>
		<Global />
	</ThemeProvider>
)
