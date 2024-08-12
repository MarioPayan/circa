import React, { useEffect, useState } from "react";
import { styled } from '@mui/system';
import { Box, IconButton, List, ListItem, Link, useTheme, useMediaQuery } from '@mui/material';
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper sx={{ height: y > 100 ? "60px" : "80px" }}>
        <NavInner isMobile={isMobile}>
          {isMobile ? (
            <IconButton onClick={() => toggleSidebar(!sidebarOpen)} color="inherit">
              <BurgerIcon />
            </IconButton>
          ) : (
            <Box display="flex">
              <List sx={{ display: 'flex', margin: 0, padding: 0 }}>
                {['INICIO', 'SERVICIOS', 'NOSOTROS', 'MARCAS ALIADAS', 'CONTACTANOS'].map((text) => (
                  <ListItem key={text} sx={{ display: 'inline-block', padding: 0 }}>
                    <Link
                      href={`#${text}`} 
                      sx={{ 
                        padding: '10px 15px', 
                        color: '#834227', 
                        textDecoration: 'none', 
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        }
                      }}
                    >
                      {text.charAt(0).toUpperCase() + text.slice(1)}
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
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 999,
  backgroundColor: 'white',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'height 0.3s ease',
}));

const NavInner = styled(Box)(({ theme, isMobile }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  justifyContent: isMobile ? 'flex-end' : 'center',
  alignItems: 'center',
  padding: '0 20px',
}));

const BottomBar = styled(Box)(({ theme }) => ({
  height: '7px', // Ajusta el tamaño de la barra aquí
  backgroundColor: '#834227',
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
}));


