import React from 'react'
import {Box, Typography, useTheme, useMediaQuery, Link as MuiLink} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LogoImg from '../../assets/img/LOGO CIRCA.png'

export default function Contact() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const iconstyle = {fontSize: 50}
  const iconcolor = {
    color: '#972d07',
    textDecoration: 'none', // Evita el subrayado
    '&:hover': {
      color: '#61300d', // Mantén el color original al pasar el cursor
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
              Conectar y transformar la vida de las personas al rededor de una tasa de café.
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
                Conectar y transformar la vida de las personas al rededor de una tasa de café.
              </Typography>
            </>
          )}
          <Box sx={{display: 'flex', gap: 2, mt: isSmallScreen ? 2 : 8}}>
            <MuiLink href='https://www.instagram.com' target='_blank' sx={iconcolor}>
              <InstagramIcon style={iconstyle} />
            </MuiLink>
            <MuiLink href='https://www.facebook.com' target='_blank' sx={iconcolor}>
              <FacebookIcon style={iconstyle} />
            </MuiLink>
            <MuiLink href='https://www.twitter.com' target='_blank' sx={iconcolor}>
              <TwitterIcon style={iconstyle} />
            </MuiLink>
            <MuiLink href='https://www.linkedin.com' target='_blank' sx={iconcolor}>
              <LinkedInIcon style={iconstyle} />
            </MuiLink>
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
            variant='body1'
            sx={{
              color: 'black',
              mt: isSmallScreen ? 2 : 3,
              mr: isSmallScreen ? 0 : 5,
              textAlign: isSmallScreen ? 'center' : 'right',
            }}>
            Calle 5 # 13-28, San Cayetano
            <br />
            Cali, Colombia
            <br />
            +57 3195429508
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
