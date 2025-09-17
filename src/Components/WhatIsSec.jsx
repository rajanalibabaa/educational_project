import React from 'react';
import { Box, Typography, Card, Grid, useTheme, useMediaQuery, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import your images (replace these with your actual images)
import studentImg from "../assets/Images/class.jpg";
import curriculumImg from "../assets/Images/ciriculam.jpg";
import personalizedImg from "../assets/Images/personal.jpg";
import flexibleImg from "../assets/Images/per.jpg";
import successImg from "../assets/Images/sucess.jpg";

// Content data for the sections
const contentItems = [
  {
    id: 1,
    image: studentImg,
    title: "Premier IAS Coaching Academy",
    content: "Integrations is a premier IAS coaching academy dedicated to empowering aspiring civil servants with the knowledge and skills needed to crack the toughest examinations. With a proven track record of success, we have earned the trust and admiration of hundreds of students.",
    imageLeft: true,
    accentColor: "#32f0a1", // Vibrant orange
    bgGradient: "#32f0a1"
  },
  {
    id: 2,
    image: curriculumImg,
    title: "Comprehensive Curriculum",
    content: "Our meticulously designed curriculum covers all the essential subjects and topics, ensuring a strong foundation in General Studies, CSAT, and optional subjects like Anthropology, History, Geography, Polity, and more.",
    imageLeft: false,
    accentColor: "#32f0a1", // Teal
    bgGradient: "#32f0a1"
  },
  {
    id: 3,
    image: personalizedImg,
    title: "Personalized Approach",
    content: "What sets us apart is our personalized approach. We understand every student is unique. Our faculty provides individual attention and guidance, identifying areas of improvement and helping you overcome challenges.",
    imageLeft: true,
    accentColor: "#32f0a1", // Soft purple
    bgGradient: "#32f0a1"
  },
  {
    id: 4,
    image: flexibleImg,
    title: "Flexible Learning Options",
    content: "Whether you are a working professional, a college student, or a graduate, Integrations offers flexible timings and batch options to suit your schedule. We believe in nurturing talent irrespective of background or limitations.",
    imageLeft: false,
    accentColor: "#32f0a1", // Golden yellow
    bgGradient: "#32f0a1",
    darkText: true
  },
  {
    id: 5,
    image: successImg,
    title: "Your Journey to Success",
    content: "Embark on your journey to becoming an IAS officer with Integrations, where excellence is nurtured and success is a way of life. Join us now and unlock your true potential. Your dream of serving the nation awaits!",
    imageLeft: true,
    accentColor: "#32f0a1", // Deep teal
    bgGradient: "#32f0a1"
  }
];

// Reusable Section Component for clean code
// Corrected InfoSection Component
const InfoSection = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants (unchanged)
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
  const imageVariants = { hidden: { opacity: 0, x: item.imageLeft ? -80 : 80, scale: 0.9 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } };
  const textVariants = { hidden: { opacity: 0, x: item.imageLeft ? 80 : -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 2 }, px: { xs: 5, md: 0 } }}>
      <Box
        ref={ref}
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        sx={{
          // --- CSS Grid Layout ---
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 8, md: 15 }, // Replaces the `spacing` prop
          alignItems: 'center',
          
          // --- Styling (from your previous code) ---
          position: 'relative',
          py: { xs: 0, md: 6 },
          mb: { xs: 0, md: 10 },
        }}
      >
        
        {/* Image Column */}
        {/* Image Column */}
<Box 
  sx={{
    // Logic for alternating layout (unchanged)
    order: { xs: 2, md: item.imageLeft ? 1 : 2 } 
  }}
>
  <motion.div variants={imageVariants}>
    {/* --- THIS IS THE MODIFIED BOX --- */}
    <Box
      sx={{
        position: 'relative',
        borderRadius: 3,
        overflow: 'hidden', // Keeps the corners contained within the rounded border

        // The image overlay gradient (from your previous code)
        '&:before': {
          content: '""',
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        //   background: item.bgGradient,
          opacity: 0.2,
          zIndex: 1,
        },

        // --- NEW: Top-Left Corner Element ---
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: { xs: 30, md: 40 },
          height: { xs: 30, md: 40 },
          background: item.bgGradient,
          borderBottomRightRadius: '16px', // Creates the curved inner corner
          zIndex: 2,
        },
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt={item.title}
        sx={{
          width: '100%',
          height: { xs: 280, md: 300 },
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
          '&:hover': {
            transform: 'scale(1.03)',
          },
        }}
      />

      {/* --- NEW: Bottom-Right Corner Element --- */}
      {/* We add this as a separate Box because ::after is already in use */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: { xs: 30, md: 40 },
          height: { xs: 30, md: 40 },
          background: item.bgGradient,
          borderTopLeftRadius: '16px', // Creates the curved inner corner
          zIndex: 2,
        }}
      />
      
      {/* 
        NOTE: The old triangle Box has been REMOVED.
        The code above replaces it completely.
      */}
    </Box>
  </motion.div>
</Box>


        {/* Text Content Column */}
        <Box 
          sx={{ 
            // --- Logic for alternating layout ---
            order: { xs: 1, md: item.imageLeft ? 2 : 1 } 
          }}
        >
          <motion.div variants={textVariants}>
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{
                  position: 'absolute', top: -45, left: -45,
                  width: 120, height: 120,
                  borderRadius: '50%',

                  background: item.bgGradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 'bold', fontSize: '1.5rem',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  p: { xs: 3, md: 2 },
                  borderRadius: 3,
                  background: 'rgba(255, 255, 255, 1)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${item.accentColor}20`,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  maxWidth: { xs: '100%', md: 500 },
                }}
              >
                <Typography 
                  variant="h4" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700, mb: 2,
                    // color: item.accentColor,
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  }}
                >
                  {item.title}
                </Typography>
                <Box sx={{ width: 60, height: 4, background: item.bgGradient, borderRadius: 2, mb: 3 }} />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.8,
                    // color: "#5a6570",
                    fontSize: { xs: '1rem', md: '1rem' },
                  }}
                >
                  {item.content}
                </Typography>
                <Box
                  sx={{
                    width: 30, height: 30,
                    borderRadius: '50%',
                    background: item.bgGradient,
                    opacity: 0.9,
                    position: 'absolute', bottom: 15, right: 15,
                  }}
                />
              </Box>
              
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>    
  );
}   




const WhatIsSec = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        overflow: 'hidden',
        // background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)',
        position: 'relative',
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(235deg, #ff6b355c 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
        //   right: 0,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(235deg, #ff6b355c 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4ecdc590 0%, transparent 70%)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              textAlign: "center", 
              fontWeight: 800, 
              mb: { xs: 4, md: 8 },
              fontSize: { xs: '2.25rem', md: '3.25rem' },
              color: "#2c3e50",
            }}
          >
            Why Choose <span style={{ 
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>INTEGRATIONS</span>?
          </Typography>
        </motion.div>

        {/* Map through the content and render a section for each item */}
        {contentItems.map((item) => (
          <InfoSection key={item.id} item={item} />
        ))}
      </Container>
    </Box>
  );
};

export default WhatIsSec;