import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ServiceBox from '../Elements/ServiceBox'
import ClientSlider from '../Elements/ClientSlider'
import Logoimg from '../../assets/img/LOGO SOLO.png'

export default function Services() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const TypographyStyle = {fontWeight: 'bold', color: '#972d07'}
  const CardStyle = {
    flexBasis: {
      xs: '100%',
      sm: 'calc(33% - 16px)',
      md: 'calc(33% - 16px)',
      lg: 'calc(33%  - 16px)',
    },
    maxWidth: {
      xs: '100%',
      sm: 'calc(33% - 16px)',
      md: 'calc(33%  - 16px)',
      lg: 'calc(33% % - 16px)',
    },
    padding: 2,
  }

  const Logo = () => (
    <Box
      component='img'
      src={Logoimg}
      alt='Coffee'
      sx={{
        maxWidth: '100px',
      }}
    />
  )

  return (
    <Box id='services'>
      <Box sx={{backgroundColor: 'white', py: 8}}>
        <Box className='container'>
          <Box sx={{mb: 6, textAlign: isSmallScreen ? 'center' : 'center'}}>
            <Typography variant='h3' sx={TypographyStyle}>
              Servicios
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
            <Box sx={CardStyle}>
              <ServiceBox
                icon={<Logo />}
                title='EXPERIENCIAS'
                subtitle='Realizamos talleres, catas de café, visitas a fincas y espacios donde podamos conocer y disfrutar del mundo del cafe de especialidad.'
              />
            </Box>
            <Box sx={CardStyle}>
              <ServiceBox
                icon={<Logo />}
                title='EDUCACIÓN'
                subtitle='Cursos, capacitaciones, entrenamiento y asesorías relacionadas a las disciplinas del café y su aplicación al mercado nacional e internacional'
              />
            </Box>
            <Box sx={CardStyle}>
              <ServiceBox
                icon={<Logo />}
                title='EMPRESARIAL'
                subtitle='Somos tus aliados, ofrecemos apoyo con servicio de catering, alquiler de equipos y barras móviles para eventos y asesorias de estructuras operativas para tiendas de café.'
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box id='allied_brands' sx={{backgroundColor: 'white', py: 8}}>
        <Box className='container'>
          <Box sx={{mb: 6, textAlign: isSmallScreen ? 'center' : 'center'}}>
            <Typography variant='h3' sx={TypographyStyle}>
              Marcas aliadas
            </Typography>
          </Box>
          <Box sx={{py: 6}}>
            <Box className='container'>
              <ClientSlider />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
