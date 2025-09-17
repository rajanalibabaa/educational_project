import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
const AboutSection = () => {
  return (
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
  )
}

export default AboutSection