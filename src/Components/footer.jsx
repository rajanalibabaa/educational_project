"use client";
import React from "react";
import { Box, Typography, IconButton, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";

// Social Icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const socialLinks = [
    { icon: <YouTubeIcon />, url: "https://youtube.com/yourchannel", label: "YouTube" },
    { icon: <FacebookIcon />, url: "https://facebook.com/yourpage", label: "Facebook" },
    { icon: <InstagramIcon />, url: "https://instagram.com/yourpage", label: "Instagram" },
    { icon: <LinkedInIcon />, url: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "black",
        color: "white",
        py: { xs: 6, md: 5 },
        px: { xs: 3, md: 10 },
      }}
    >
      <Grid container spacing={1} justifyContent="space-evenly">
        {/* Left Section - Brand / Logo */}
        <Grid item xs={12} md={4}>
        <Typography
  variant="h4"
  component="h2"
  sx={{
    fontWeight: 700,
    background: "linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "flex", // put text + image in same line
    alignItems: "center",
    gap: 1, // small spacing between text and logo
  }}
>
  INTEGRATIONS
  <Box
    component="img"
    src="/logo.png"
    alt="logo"
    sx={{ width: 100, height: "auto" }}
  />
</Typography>

          <Typography sx={{ mt: 2, fontSize: "0.95rem", lineHeight: 1.7 }}>
            Empowering students with world-class coaching and innovative learning
            experiences. Together, we build your future.
          </Typography>
        </Grid>

        {/* Middle Section - Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {["Courses","About Us", "Gallery", "Contact"].map((link, i) => (
              <Link
                key={i}
                href="#"
                underline="none"
                sx={{
                  color: "white",
                  fontSize: "0.95rem",
                  "&:hover": { color: "#FF6B35", pl: 1, transition: "0.3s" },
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

   
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          textAlign: "center",
          mt: 6,
          pt: 3,
        }}
      >
        <Typography sx={{ fontSize: "0.85rem", opacity: 0.7 }}>
          © {new Date().getFullYear()} INTEGRATIONS. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
