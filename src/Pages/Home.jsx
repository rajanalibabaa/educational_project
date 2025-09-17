import React from "react";
import { Box, Grid, Typography, Button, Container,Card } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import Navbar from "../Components/Navbar";
import studentImg from "../assets/Images/Education.png"; // add your image
import WhatIsSec from "../Components/WhatIsSec.jsx";
import AboutUs from "./AboutUs.jsx";
import AboutSection from "../Components/AboutSection.jsx";


const Home = () => {
  return (
    <>
    <Box>
    <Box sx={{
      bgcolor: "#54ccc3",
      minHeight: "60vh",
      margin: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
    }}>
      {/* Navbar */}

      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', py: 0 }}>
          {/* Left Content */}
          <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>

            <Typography variant="h4" fontWeight="bold" gutterBottom>
              <span style={{ color: "#f28c38", fontWeight: "bolder" }}>Welcome to Integrations</span> Your Path to Success in the Civil Services!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              INTEGRATIONS is an interesting platform that will teach you in a more interactive way
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  color: "#54ccc3",
                  fontWeight: "bold",
                  textTransform: "none",
                  px: 3,
                  borderRadius: "50px",
                }}
              >
                Join for free
              </Button>
              <Button
                variant="text"
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                <PlayArrowIcon/> Watch how it works
              </Button>
            </Box>
          </Box>

          {/* Right Image */}
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <img
              src={studentImg}
              alt="student"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>

   
    </Box>

       {/* Stats Section */}
      {/* <Box sx={{ bgcolor: "white", py: 6, display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} textAlign="center" justifyContent="center" gap={13}>
            <Grid item xs={6} md={2.4}>
              <Typography variant="h5" fontWeight="bold" color="#54ccc3">
                15K+
              </Typography>
              <Typography>Students</Typography>
            </Grid>
            <Grid item xs={6} md={2.4}>
              <Typography variant="h5" fontWeight="bold" color="#54ccc3">
                75%
              </Typography>
              <Typography>Total success</Typography>
            </Grid>
       
            
            <Grid item xs={6} md={2.4}>
              <Typography variant="h5" fontWeight="bold" color="#54ccc3">
                16
              </Typography>
              <Typography>Years of experience</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
    </Box>
 
    <WhatIsSec/>
    <AboutSection/>
    </>
  );
};

export default Home;
