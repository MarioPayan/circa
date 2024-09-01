import React from 'react'
import Slider from 'react-slick'
import {styled} from '@mui/system'
import {Box} from '@mui/material'
// Assets
import ClientLogo01 from '../../assets/img/clients/okafe_logo.png'
import ClientLogo02 from '../../assets/img/clients/laCortezas.png'
import ClientLogo03 from '../../assets/img/clients/laMarianela.png'

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'cubic-bezier(0.520, 0.530, 0.515, 0.545)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const logos = [ClientLogo01, ClientLogo02, ClientLogo03]

  return (
    <GradientMask>
      <Slider {...settings}>
        {logos.concat(logos).map((logo, index) => (
          <LogoWrapper key={index}>
            <ImgStyle src={logo} alt='client logo' />
          </LogoWrapper>
        ))}
      </Slider>
    </GradientMask>
  )
}

const GradientMask = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '5%',
    zIndex: 1,
    pointerEvents: 'none',
  },
  '&::before': {
    left: 0,
    background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
    border: 'none',
  },
  '&::after': {
    right: 0,
    background: 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
    border: 'none',
  },
})

const LogoWrapper = styled(Box)({
  width: '100%',
  height: '100px',
  cursor: 'pointer',
  '&:focus-visible': {
    outline: 'none',
    border: '0px',
  },
})

const ImgStyle = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
})
