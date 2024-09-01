import React, {useEffect, useState} from 'react'
import {styled} from '@mui/system'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import Sidebar from '../Nav/Sidebar'
import Backdrop from '../Elements/Backdrop'
import BurgerIcon from '../../assets/svg/BurgerIcon'

const sections = [
  {title: 'INICIO', id: 'home'},
  {title: 'SERVICIOS', id: 'services'},
  {title: 'MARCAS ALIADAS', id: 'allied_brands'},
  {title: 'NOSOTROS', id: 'projects'},
  {title: 'CONTACTANOS', id: 'contact'},
]

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY)
  const [sidebarOpen, toggleSidebar] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const goToElement = id => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView()
    }
  }

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper sx={{height: y > 100 ? '60px' : '80px'}}>
        <NavInner isMobile={isMobile}>
          {isMobile ? (
            <IconButton onClick={() => toggleSidebar(!sidebarOpen)} color='inherit'>
              <BurgerIcon />
            </IconButton>
          ) : (
            <Box display='flex'>
              <List sx={{display: 'flex', margin: 0, padding: 0}}>
                {sections.map(({title, id}) => (
                  <ListItem key={id} sx={{display: 'inline-block', padding: 0}}>
                    <Link
                      onClick={() => goToElement(id)}
                      href={`#${id}`}
                      sx={{
                        padding: '10px 15px',
                        color: '#834227',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          color: '#61300d',
                        },
                      }}>
                      {title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </NavInner>
        <BottomBar />
      </Wrapper>
    </>
  )
}

const Wrapper = styled(Box)({
  width: '100%',
  position: 'relative',
  top: 0,
  left: 0,
  zIndex: 999,
  backgroundColor: 'white',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'height 0.3s ease',
})

const NavInner = styled(Box)(({isMobile}) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  justifyContent: isMobile ? 'flex-end' : 'center',
  alignItems: 'center',
  padding: '0 20px',
}))

const BottomBar = styled(Box)({
  height: '7px', // Ajusta el tamaño de la barra aquí
  backgroundColor: '#834227',
  width: '100%',
  position: 'relative',
  bottom: 0,
  left: 0,
})
