import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { store } from './store/index'
import { App } from './components/app/index'
import { theme } from './styles/theme'
import './styles/main.css'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <Provider store={store} >
        <ThemeProvider theme={theme} >
            <App />
        </ThemeProvider>
    </Provider>, 
    mountNode)
