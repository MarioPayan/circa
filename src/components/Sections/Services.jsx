import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ServiceBox from "../Elements/ServiceBox";
import ClientSlider from "../Elements/ClientSlider";

export default function Services() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const TypographyStyle = { fontWeight: "bold", color: "#972d07" };
  const CardStyle = {
    flexBasis: {
      xs: "100%",
      sm: "calc(33% - 16px)",
      md: "calc(33% - 16px)",
      lg: "calc(33%  - 16px)",
    },
    maxWidth: {
      xs: "100%",
      sm: "calc(33% - 16px)",
      md: "calc(33%  - 16px)",
      lg: "calc(33% % - 16px)",
    },
    padding: 2,
  };

  return (
    <Box id="services">
      <Box sx={{ backgroundColor: "white", py: 8 }}>
        <Box className="container">
          <Box sx={{ mb: 6, textAlign: isSmallScreen ? "center" : "center" }}>
            <Typography variant="h3" sx={TypographyStyle}>
              Servicios
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Box
              sx={CardStyle}
            >
              <ServiceBox
                icon="roller"
                title="EXPERIENCIAS "
                subtitle="Realizamos talleres, catas de café, visitas a fincas y espacios donde podamos conocer y disfrutar del mundo del cafe de especialidad."
              />
            </Box>
            <Box
              sx={CardStyle}
            >
              <ServiceBox
                icon="monitor"
                title="EDUCACIÓN"
                subtitle="Cursos, capacitaciones, entrenamiento y asesorías relacionadas a las disciplinas del café y su aplicación al mercado nacional e internacional"
              />
            </Box>
            <Box
              sx={CardStyle}
            >
              <ServiceBox
                icon="browser"
                title="EMPRESARIAL"
                subtitle="Somos tus aliados, ofrecemos apoyo con servicio de catering, alquiler de equipos y barras móviles para eventos y asesorias de estructuras operativas para tiendas de café."
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: 6, textAlign: isSmallScreen ? "center" : "center" }}>
        <Typography variant="h3" sx={TypographyStyle}>
          Marcas que confian en nosotros
        </Typography>
      </Box>
      <Box sx={{ py: 6 }}>
        <Box className="container">
          <ClientSlider />
        </Box>
      </Box>
    </Box>
  );
}
