import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';

export default function ProjectBox({ img, title, text, action }) {
  return (
    <Wrapper>
      <ImgButton onClick={action ? () => action() : undefined}>
        <StyledImg src={img} alt={`Image of ${title}`} />
      </ImgButton>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{marginTop:"inherit"}}> 
        {title}
      </Typography>
      <Typography variant="body2">
        {text}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4), // Usa el espaciado del tema
  textAlign: 'center', // Centra el texto
}));

const ImgButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 0,
  padding: 0,
  margin: 0,
  '&:hover': {
    backgroundColor: 'transparent', // Asegura que no haya cambio de fondo en hover
  },
  '& img': {
    transition: 'opacity 0.3s', // Añade transición para suavizar el efecto de hover
    '&:hover': {
      opacity: 0.5,
    },
  },
}));

const StyledImg = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius, // Usa el radio de borde del tema
  width: '100%', // Asegura que la imagen ocupe el ancho completo del contenedor
  height: 'auto',
}));
