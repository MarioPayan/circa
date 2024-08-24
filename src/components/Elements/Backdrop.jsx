import React from 'react'
import {styled} from '@mui/system'
import {Box} from '@mui/material'

export default function Backdrop({toggleSidebar}) {
  return <Wrapper onClick={() => toggleSidebar(false)} />
}

const Wrapper = styled(Box)(({theme}) => ({
  width: '100%',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 99,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
}))
