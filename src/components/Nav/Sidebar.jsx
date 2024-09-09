import React from 'react'
import {styled} from '@mui/system'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import CloseIcon from '@mui/icons-material/Close';
const LogoImg = 'assets/img/LOGO CIRCA.png'

const sections = [
  {title: 'INICIO', id: 'home'},
  {title: 'SERVICIOS', id: 'services'},
  {title: 'MARCAS ALIADAS', id: 'allied_brands'},
  {title: 'NOSOTROS', id: 'projects'},
  {title: 'CONTACTANOS', id: 'contact'},
]

export default function Sidebar({sidebarOpen, toggleSidebar}) {
  const theme = useTheme()
  const goToElement = id => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView()
    }
  }

  const iconcolor = {
    color: '#972d07',
    textDecoration: 'none',
    '&:hover': {
      color: '#61300d',
    },
  }
  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <SidebarHeader sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className='pointer'>
           <CloseIcon sx={iconcolor} fontSize='large'/>
        </CloseBtn>
      </SidebarHeader>
      <Box
        component='img'
        src={LogoImg}
        alt='Coffee'
        sx={{
          display: 'flex',
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      <UlStyle>
        {sections.map(({title, id}) => (
          <ListItem key={id} sx={{padding: 0, justifyContent: 'center'}}>
            <Link
              onClick={() =>{ goToElement(id);toggleSidebar(!sidebarOpen)}}
              href={`#${id}`}
              sx={{
                display: 'block',
                padding: '10px 15px',
                color: '#834227',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                whiteSpace: 'nowrap',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}>
              {title}
            </Link>
          </ListItem>
        ))}
      </UlStyle>
    </Wrapper>
  )
}

// Estilos usando @mui/system
const Wrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'sidebarOpen',
})(({sidebarOpen}) => ({
  width: '400px',
  height: '100vh',
  position: 'fixed',
  top: 0,
  right: sidebarOpen ? '0px' : '-400px',
  padding: '0 30px',
  backgroundColor: 'white',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'right 0.3s ease',
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 400px)': {
    width: '100%',
  },
}))

const SidebarHeader = styled(Box)({
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const CloseBtn = styled(Button)({
  border: 0,
  outline: 'none',
  backgroundColor: 'transparent',
  padding: '10px',
})

const UlStyle = styled('ul')({
  padding: '20px 0',
  margin: 0,
  listStyle: 'none',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  li: {
    margin: '10px 0',
  },
})

const BottomBar = styled(Box)({
  height: '4px',
  backgroundColor: '#834227',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
})
