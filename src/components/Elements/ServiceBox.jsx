import React from 'react'
import PropTypes from 'prop-types'
import {styled} from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Assets
import RollerIcon from '../../assets/svg/Services/RollerIcon'
import MonitorIcon from '../../assets/svg/Services/MonitorIcon'
import BrowserIcon from '../../assets/svg/Services/BrowserIcon'
import PrinterIcon from '../../assets/svg/Services/PrinterIcon'

// Map of icons
const icons = {
  roller: <RollerIcon />,
  monitor: <MonitorIcon />,
  browser: <BrowserIcon />,
  printer: <PrinterIcon />,
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

const IconWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '@media (max-width: 860px)': {
    margin: '0 auto',
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
