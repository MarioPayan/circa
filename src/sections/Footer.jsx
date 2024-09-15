import React from 'react'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
const LogoImg = 'assets/img/LOGO CIRCA.png'

export default function Contact() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const slogan = 'Conectar y transformar la vida de las personas al rededor de una tasa de café.'
  const direction = 'Calle 47AN # 5C Norte - 35, La Flora'
  const city = 'Cali, Colombia'
  const phonenumber = '+57 317 4073736'

  const iconstyle = {fontSize: 50}
  const iconcolor = {
    color: '#972d07',
    textDecoration: 'none',
    '&:hover': {
      color: '#61300d',
    },
  }

  return (
    <Box sx={{width: '100%', backgroundColor: 'white', py: 3}}>
      <Box
        className='container'
        sx={{
          display: 'flex',
          justifyContent: isSmallScreen ? 'center' : 'space-between',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'center',
          textAlign: isSmallScreen ? 'center' : 'left',
        }}>
        {/* Parte izquierda del contenido */}
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: isSmallScreen ? 'center' : 'flex-start',
            mb: isSmallScreen ? 2 : 0,
          }}>
          {!isSmallScreen && (
            <Typography variant='h4' sx={{color: 'black', fontWeight: 'bold'}}>
              {slogan}
            </Typography>
          )}
          {isSmallScreen && (
            <>
              <Box
                component='img'
                src={LogoImg}
                alt='Coffee'
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  mb: 2,
                }}
              />
              <Typography variant='h5' sx={{color: 'black', fontWeight: 'bold', mb: 2}}>
                {slogan}
              </Typography>
            </>
          )}
          <Box sx={{display: 'flex', gap: 2, mt: isSmallScreen ? 2 : 8}}>
            <Link href='https://www.instagram.com/circacoffee.co/' target='_blank' sx={iconcolor}>
              <InstagramIcon style={iconstyle} />
            </Link>
            <Link href='https://www.facebook.com' target='_blank' sx={iconcolor}>
              <FacebookIcon style={iconstyle} />
            </Link>
          </Box>
        </Box>

        {/* Parte derecha del contenido */}
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: isSmallScreen ? 'center' : 'flex-end',
          }}>
          {!isSmallScreen && (
            <Box
              component='img'
              src={LogoImg}
              alt='Coffee'
              sx={{
                maxWidth: '90%',
                height: 'auto',
                mb: 2,
              }}
            />
          )}
          <Typography
            variant='h6'
            fontWeight='normal'
            sx={{
              color: 'black',
              mt: isSmallScreen ? 2 : 3,
              mr: isSmallScreen ? 0 : 5,
              textAlign: isSmallScreen ? 'center' : 'right',
            }}>
            {direction}
            <br />
            {city}
            <br />
            {phonenumber}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
