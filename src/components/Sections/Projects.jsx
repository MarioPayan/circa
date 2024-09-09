import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ProjectBox from '../Elements/ProjectBox'

// Assets
const PersonTemplate = 'assets/img/projects/person_template.png'

export default function Projects() {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const CardStyle = {
    flexBasis: {
      xs: '100%',
      sm: '100%',
      md: 'calc(33% - 16px)',
      lg: 'calc(33%  - 16px)',
    },
    maxWidth: {
      xs: '100%',
      sm: '100%',
      md: 'calc(33%  - 16px)',
      lg: 'calc(33% % - 16px)',
    },
    padding: 2,
  }

  return (
    <Box id='projects' sx={{width: '100%'}}>
      <Box sx={{backgroundColor: 'white', py: 9}}>
        <Box className='container' sx={{textAlign: isSmallScreen ? 'center' : 'center'}}>
          <Box sx={{mb: 6}}>
            <Typography variant='h3' sx={{fontWeight: 'bold', color: '#972d07'}}>
              Nuestro Equipo
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}>
            <Box sx={CardStyle}>
              <ProjectBox
                img={PersonTemplate}
                title='Mario Alejandro Payan Viafara'
                text='Inversionista con visión y tomador de café profesional'
                action={() => alert('clicked')}
              />
            </Box>
            <Box sx={CardStyle}>
              <ProjectBox
                img={PersonTemplate}
                title='Jorge Andrés Silva Prieto'
                text='El mejor barista de la ciudad y el mejor amigo de todos'
                action={() => alert('clicked')}
              />
            </Box>
            <Box sx={CardStyle}>
              <ProjectBox
                img={PersonTemplate}
                title='María Camila Restrepo Agudelo'
                text='Artista del café y columna vertebral del equipo'
                action={() => alert('clicked')}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
