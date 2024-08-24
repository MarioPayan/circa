import React from 'react'
import {Box, Typography, useTheme, useMediaQuery} from '@mui/material'
import ProjectBox from '../Elements/ProjectBox'

// Assets
import ProjectImg1 from '../../assets/img/projects/1.png'
import ProjectImg2 from '../../assets/img/projects/2.png'
import ProjectImg3 from '../../assets/img/projects/3.png'

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
                img={ProjectImg1}
                title='Mario Alejandro Payan Viafara'
                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                action={() => alert('clicked')}
              />
            </Box>
            <Box sx={CardStyle}>
              <ProjectBox
                img={ProjectImg2}
                title='Jorge Andrés Silva Prieto'
                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                action={() => alert('clicked')}
              />
            </Box>
            <Box sx={CardStyle}>
              <ProjectBox
                img={ProjectImg3}
                title='María Camila Restrepo Agudelo'
                text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
                action={() => alert('clicked')}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
