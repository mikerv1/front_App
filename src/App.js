import React from 'react'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Routes from './routes'
import './App.css'

import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'
import { HeaderContext } from './context/context'
import { sections, featuredPosts } from './context/context'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900],
    },
    primary: {
      main: grey[900],
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
})

function App() {
  return (
    <>
    <HeaderContext.Provider value={ {sections: sections, featuredPosts: featuredPosts} }>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
      </HeaderContext.Provider>
    </>
  )
}

export default App;
