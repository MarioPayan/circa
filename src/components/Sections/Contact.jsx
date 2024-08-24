import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AddImage2 from "../../assets/img/add/add2.png"; 


export default function Projects() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box id="contact" sx={{ width: "100%", backgroundColor: "#fff" }}>
      <Box sx={{ py: isSmallScreen ? 4 : 8, px: 2 }}>
        <Box
          className="container"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <Box
            sx={{
              width: isSmallScreen ? "100%" : "50%",
              textAlign: isSmallScreen ? "center" : "left",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#972d07" }}
            >
              Aprende y disfruta del café con nuestros especialistas
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, mt: 2, color: "black",textAlign: isSmallScreen ? "justify" : "left", }}>
              Somos un grupo de personas apasionadas y entusiastas del complejo
              pero increíble mundo del café de especialidad, que a través de los
              años hemos podido recolectar semillas de conocimiento los cuales
              compartimos en cada curso, taller y actividad con el fin de
              conectarlos al grano, su cultura, sus personas y el universo que
              lo rodea.
            </Typography>
            <Button
              variant="contained"
              href= 'https://wa.link/rmo5e7'
              sx={{
                bgcolor: "#8b4513",
                color: "white",
                mt: 2,
                "&:hover": {
                  bgcolor: "#61300d", // Cambia esto al color deseado para el hover
                },
              }}
            >
              COMIENZA AQUI
            </Button>
          </Box>
          <Box
            sx={{
              width: isSmallScreen ? "100%" : "45%",
              mt: isSmallScreen ? 4 : 0,
              height: isSmallScreen ? '400px' : '450px', 
              overflow: "hidden", 
            }}
          >
            <img
              src={AddImage2}
              alt="Café"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '12px' 
              }} 
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
