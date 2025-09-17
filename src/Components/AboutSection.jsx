import React from 'react'
import { motion } from 'framer-motion'
import { Box, Button, Typography } from '@mui/material'
import image from '../assets/Images/about.png'

const AboutSection = () => {
  return (
    <>
    <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center" , margin: "auto" }}
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
            About  <span style={{ 
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>INTEGRATIONS</span> ?
          </Typography>
        </motion.div>

        <Box display={"flex"} justifyContent={"space-between"}>
<Box>  
    ________________  About Us  ________________
    
     <Typography>What we are ?</Typography>
     <Typography>We welcome you with thanks for selecting our Academy”. We have proven a distinctive curriculum providing comprehensive coaching to aspirants, inculcating cracking aptitude in civil services exams</Typography>
     <Button variant="outlined" sx={{ borderRadius: "50px", color: "#FF6B35", borderColor: "#FF6B35"} }>Read More <Box component="span" borderRadius={"50%"} border={"1px solid #FF6B35"}>➡️</Box> </Button>

     
       </Box>


<Box>
    <img src={image} alt="about" style={{width:"100%"}} />
     </Box>

        </Box>
        </>
  )
}

export default AboutSection