import React from 'react';
import { Box, Typography, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// Social Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Replace this with your actual image import
import image from '../assets/Images/about.png';
import { nav } from 'framer-motion/client';

const ModernAboutUs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  // Define your social media links
  const socialLinks = [
    { icon: <YouTubeIcon />, url: "https://youtube.com/yourchannel", label: "YouTube" },
    { icon: <FacebookIcon />, url: "https://facebook.com/yourpage", label: "Facebook" },
    { icon: <InstagramIcon />, url: "https://instagram.com/yourpage", label: "Instagram" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  ];

  const handleButtonClick = () => {
    // Add your button click logic here;
    navigate('/about');
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", margin: "auto" }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 800,
            mb: { xs: 4, md: 4 },
            fontSize: { xs: '2.25rem', md: '3.25rem' },
            color: "#2c3e50",
          }}
        >
          About <span style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>INTEGRATIONS</span> ?
        </Typography>
      </motion.div>

      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-evenly',
          px: { xs: 2, md: 18 },
          overflow: 'hidden',
        }}
      >
        {/* Left Side */}
        <Box
          component={motion.div}
          variants={itemVariants}
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography
            component={motion.h2}
            variants={itemVariants}
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', md: '3rem' },
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '60%',
                height: '4px',
                bottom: '-10px',
                left: '20%',
                backgroundColor: '#FF6B35',
              },
            }}
          >
            About Us
          </Typography>

          <Typography
            component={motion.h5}
            variants={itemVariants}
            variant="h5"
            sx={{ color: 'text.secondary', fontWeight: 500, mt: 4, mb: 2 }}
          >
            What We Are?
          </Typography>

          <Typography
            component={motion.p}
            variants={itemVariants}
            variant="body1"
            sx={{ fontSize: '1.1rem', lineHeight: 1.7, mb: 4, maxWidth: '500px' }}
          >
            We welcome you and thank you for selecting our Academy. We have a proven and distinctive curriculum, providing comprehensive coaching that inculcates a cracking aptitude for civil services exams.
          </Typography>

          {/* Button */}
          <Button
            component={motion.button}
            onClick={handleButtonClick}
            variants={itemVariants}
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: '50px',
              color: '#FF6B35',
              borderColor: '#FF6B35',
              fontWeight: 'bold',
              py: 1.5,
              px: 4,
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': {
                backgroundColor: '#FF6B35',
                color: '#fff',
                borderColor: '#FF6B35',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Read More
          </Button>

          {/* Social Media Icons */}
          <Box
            component={motion.div}
            variants={itemVariants}
            sx={{ mt: 2, display: 'flex', gap: 3, flexWrap: 'wrap' }}
          >
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  border: '2px solid #000000ff',
                  color: '#000000ff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#32f0a1',
                    color: '#ffffffff',
                    transform: 'scale(1.1)',
                    // boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

      {/* Right Side: Image */}
{/* Right Side: Image */}
<Box
  component={motion.div}
  variants={imageVariants}
  sx={{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '850px',
    position: 'relative',
  }}
>
  {/* Glowing Circle Background */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    style={{
      position: "absolute",
      width: isMobile ? "280px" : "520px",
      height: isMobile ? "280px" : "520px",
      borderRadius: "50%",
      background: "radial-gradient(circle,  #32f0a1 70%, rgba(50,240,161,0) 70%)",
      zIndex: 0,
    }}
  />

  {/* Actual Image */}
  <motion.img
    src={image}
    alt="About the academy"
    initial={{ scale: 0.9, opacity: 0, y: 30 }}
    whileInView={{ scale: 1, opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{
      width: "100%",
      maxWidth: isMobile ? "320px" : "600px",
      height: isMobile ? "auto" : "650px",
      objectFit: "cover",
      borderRadius: "16px",
      position: "relative",
      zIndex: 1,
    }}
  />
</Box>


      </Box>
    </>
  );
};

export default ModernAboutUs;
