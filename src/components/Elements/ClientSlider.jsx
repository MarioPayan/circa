
import React from "react";
import Slider from "react-slick";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
// Assets
import ClientLogo01 from "../../assets/img/clients/okafe_logo.png";
import ClientLogo02 from "../../assets/img/clients/laCortezas.png";
import ClientLogo03 from "../../assets/img/clients/laMarianela.png";
// import ClientLogo04 from '../../assets/img/clients/logo04.svg';
// import ClientLogo05 from '../../assets/img/clients/logo05.svg';
// import ClientLogo06 from '../../assets/img/clients/logo06.svg';

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
  };
  return (
    <Box>
      <Slider {...settings}>
        <LogoWrapper>
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        {/* <LogoWrapper>
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>*/}
        <LogoWrapper>
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        {/* <LogoWrapper>
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper> */}
        <LogoWrapper>
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </Box>
  );
}

const LogoWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100px",
  cursor: "pointer",
  "&:focus-visible": {
    outline: "none",
    border: "0px",
  },
}));

const ImgStyle = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));
