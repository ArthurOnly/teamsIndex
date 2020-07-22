import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

import theme from './theme/materialUiTheme'
import GlobalStyle from './theme/globalStyles.style.js'
import { ThemeProvider } from '@material-ui/core'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes/>
    <GlobalStyle/>
  </ThemeProvider>,
  document.getElementById('root')
)