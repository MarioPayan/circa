import React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoImg from "../../assets/img/LOGO CIRCA.png";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const theme = useTheme();
  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <SidebarHeader sx={{display: 'flex', justifyContent: 'flex-end'}}>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
      <Box
            component="img"
            src={LogoImg}
            alt="Coffee"
            sx={{
              display: 'flex',
              maxWidth: "100%",
              height: "auto",
            }}
          />

      <UlStyle>
        {[
          "INICIO",
          "SERVICIOS",
          "NOSOTROS",
          "MARCAS ALIADAS",
          "CONTACTANOS",
        ].map((text) => (
          <ListItem key={text} sx={{ padding: 0, justifyContent: "center" }}>
            <Link
              href={`#${text}`}
              sx={{
                display: "block",
                padding: "10px 15px",
                color: "#834227",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.5rem",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {text.charAt(0).toUpperCase() + text.slice(1)}
            </Link>
          </ListItem>
        ))}
      </UlStyle>
    </Wrapper>
  );
}

// Estilos usando @mui/system
const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "sidebarOpen",
})(({ theme, sidebarOpen }) => ({
  width: "400px",
  height: "100vh",
  position: "fixed",
  top: 0,
  right: sidebarOpen ? "0px" : "-400px",
  padding: "0 30px",
  backgroundColor: "white",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "right 0.3s ease",
  zIndex: 9999,
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 400px)": {
    width: "100%",
  },
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CloseBtn = styled(Button)(({ theme }) => ({
  border: 0,
  outline: "none",
  backgroundColor: "transparent",
  padding: "10px",
}));

const UlStyle = styled("ul")(({ theme }) => ({
  padding: "20px 0",
  margin: 0,
  listStyle: "none",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  li: {
    margin: "10px 0",
  },
}));

const BottomBar = styled(Box)(({ theme }) => ({
  height: "4px",
  backgroundColor: "#834227",
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
}));
