import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {Analytics} from '@vercel/analytics/react'
import {Helmet, HelmetProvider} from 'react-helmet-async' // Actualiza la importación
import Landing from './screens/Landing.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#61300d',
    },
    grey: {
      200: '#eeeeee',
      900: '#212121',
    },
    // Agrega otras configuraciones aquí
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          bgcolor: '#8b4513', // Color de fondo del botón
          color: 'white', // Color del texto
          '&:hover': {
            bgcolor: '#8B4513', // Color de fondo en hover
          },
        },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Helmet>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link href='https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap' rel='stylesheet' />
        </Helmet>
        <Landing />
        <Analytics />
      </HelmetProvider>
    </ThemeProvider>
  )
}
