import React from 'react'
import {styled} from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function ProjectBox({img, title, text, action}) {
  return (
    <Wrapper>
      <ImgButton onClick={action ? () => action() : undefined}>
        <StyledImg src={img} alt={`Image of ${title}`} />
      </ImgButton>
      <Typography variant='h5' fontWeight='bold' gutterBottom sx={{marginTop: 'inherit'}}>
        {title}
      </Typography>
      <Typography variant='h6' fontWeight='normal'>
        {text}
      </Typography>
    </Wrapper>
  )
}

const Wrapper = styled(Box)(({theme}) => ({
  width: '100%',
  marginTop: theme.spacing(4),
  textAlign: 'center',
}))

const ImgButton = styled(Button)({
  backgroundColor: 'transparent',
  border: 0,
  padding: 0,
  margin: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& img': {
    transition: 'opacity 0.3s',
    '&:hover': {
      opacity: 0.5,
    },
  },
})

const StyledImg = styled('img')(({theme}) => ({
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  height: 'auto',
}))
