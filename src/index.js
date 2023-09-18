import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'modern-normalize'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { Global } from './styles/Global'
import { ContextProvider } from './context/ContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ThemeProvider theme={theme}>
		<ContextProvider>
			<App />
		</ContextProvider>
		<Global />
	</ThemeProvider>
)
