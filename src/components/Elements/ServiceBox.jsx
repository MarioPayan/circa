import React from 'react'
import PropTypes from 'prop-types'
import {styled} from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const Logoimg = 'assets/img/LOGO SOLO.png'



// Map of icons
const icons = {
  roller: <img src={Logoimg} alt="Roller Icon"  />,
  monitor: <img src={Logoimg}  alt="Monitor Icon"  />,
  browser: <img src={Logoimg}  alt="Browser Icon" />,
  printer: <img src={Logoimg} alt="Printer Icon" />,
}

export default function ServiceBox({icon, title, subtitle}) {
  const SelectedIcon = icons[icon] || icons.roller

  return (
    <Wrapper>
      <IconWrapper>{SelectedIcon}</IconWrapper>
      <Title variant='h5' fontWeight='bold'>
        {title}
      </Title>
      <Subtitle variant='h6' fontWeight='normal'>
        {subtitle}
      </Subtitle>
    </Wrapper>
  )
}

ServiceBox.propTypes = {
  icon: PropTypes.oneOf(['roller', 'monitor', 'browser', 'printer']).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

const Wrapper = styled(Box)(({theme}) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& img': {
    maxWidth: '100px', // Tamaño máximo para las imágenes
    height: 'auto',    // Mantener la proporción de la imagen
    '@media (max-width: 600px)': {
      maxWidth: '80px', // Tamaño menor para pantallas pequeñas
    },
  },
}))

const Title = styled(Typography)(({theme}) => ({
  width: '100%',
  maxWidth: '300px',
  margin: '0 auto',
  padding: theme.spacing(2, 0),
  textAlign: 'center',
}))

const Subtitle = styled(Typography)(({theme}) => ({
  width: '100%',
  maxWidth: '300px',
  margin: '0 auto',
  textAlign: 'center',
}))
