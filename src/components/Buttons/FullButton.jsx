import React from 'react'
import {styled} from '@mui/system'
import {Button} from '@mui/material'

// Componente FullButton
export default function FullButton({title, action, border}) {
  return (
    <Wrapper variant='contained' onClick={action ? () => action() : null} border={border}>
      {title}
    </Wrapper>
  )
}

// Componente estilizado usando @mui/system
const Wrapper = styled(Button, {
  shouldForwardProp: prop => prop !== 'border',
})(({border}) => ({
  border: border ? '1px solid #707070' : '1px solid #7620ff',
  backgroundColor: border ? 'transparent' : '#7620ff',
  width: '100%',
  padding: '15px',
  color: border ? '#707070' : '#fff',
  '&:hover': {
    backgroundColor: border ? 'transparent' : '#580cd2',
    border: '1px solid #7620ff',
    color: border ? '#7620ff' : '#fff',
  },
  borderRadius: '8px',
  cursor: 'pointer',
  outline: 'none',
  textTransform: 'none',
}))
