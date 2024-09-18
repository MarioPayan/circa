import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ServiceBox from 'components/ServiceBox'
import ClientSlider from 'components/ClientSlider'
const Logoimg = 'assets/img/LOGO SOLO.png'

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

const services = [
  {
    icon: <Logo />,
    title: 'EXPERIENCIAS',
    subtitle:
      'Realizamos talleres, catas de café, visitas a fincas y espacios donde podamos conocer y disfrutar del mundo del cafe de especialidad.',
  },
  {
    icon: <Logo />,
    title: 'EDUCACIÓN',
    subtitle:
      'Cursos, capacitaciones, entrenamiento y asesorías relacionadas a las disciplinas del café y su aplicación al mercado nacional e internacional',
  },
  {
    icon: <Logo />,
    title: 'EMPRESARIAL',
    subtitle:
      'Somos tus aliados, ofrecemos apoyo con servicio de catering, alquiler de equipos y barras móviles para eventos y asesorias de estructuras operativas para tiendas de café.',
  },
]

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

  const serviceTitle = 'Servicios'
  const alliedBrandsTitle = 'Marcas aliadas'

  return (
    <Box id='services'>
      <Box sx={{backgroundColor: 'white', py: 8}}>
        <Box className='container'>
          <Box sx={{mb: 6, textAlign: isSmallScreen ? 'center' : 'center'}}>
            <Typography variant='h3' sx={TypographyStyle}>
              {serviceTitle}
            </Typography>
          </Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
            {services.map(({icon, title, subtitle}, index) => (
              <Box sx={CardStyle} key={index}>
                <ServiceBox icon={icon} title={title} subtitle={subtitle} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box id='allied_brands' sx={{backgroundColor: 'white', py: 8}}>
        <Box className='container'>
          <Box sx={{mb: 6, textAlign: isSmallScreen ? 'center' : 'center'}}>
            <Typography variant='h3' sx={TypographyStyle}>
              {alliedBrandsTitle}
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
