import React from 'react'
import {Box, Typography, Button, useTheme, useMediaQuery} from '@mui/material'
import Logo from '../../assets/img/LOGO CIRCA.png'
import Logotext from '../../assets/img/LOGO CIRCA TEXTO.png'
import Logoimg from '../../assets/img/LOGO SOLO.png'

export default function CoffeeSection() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box id='home'>
      <Box className='container' sx={{paddingTop: '20px'}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: {md: 'row', xs: 'column'},
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '50px',
          }}>
          <Box
            sx={{
              flex: 1.2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: {md: 'flex-start', xs: 'center'},
              textAlign: {md: 'left', xs: 'center'},
            }}>
            {isSmallScreen && (
              <Box
                sx={{
                  flex: 1,
                  display: {xs: 'flex', md: 'none'},
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: {md: 0, xs: 0},
                }}>
                <Box
                  component='img'
                  src={Logoimg}
                  alt='Coffee'
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '0px',
                  }}
                />
              </Box>
            )}
            <Box
              component='img'
              src={Logotext}
              alt='Coffee'
              sx={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <Typography variant='h4' sx={{fontWeight: 'bold', mb: 2}}>
              Tocamos y transformamos la vida de las personas alrededor de una taza de café.
            </Typography>

            {/* <Button
              variant="contained"
              sx={{
                bgcolor: "#8b4513",
                color: "white",
                mt: 2,
                "&:hover": {
                  bgcolor: "#61300d", // Cambia esto al color deseado para el hover
                },
              }}
            >
              MÁS INFORMACIÓN
            </Button> */}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: {xs: 'none', md: 'flex'},
              justifyContent: 'center',
              alignItems: 'center',
              mt: {md: 0, xs: 3},
            }}>
            <Box
              component='img'
              src={Logoimg}
              alt='Coffee'
              sx={{
                maxWidth: '80%',
                height: 'auto',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
