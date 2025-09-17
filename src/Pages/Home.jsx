import React, { Suspense, lazy } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { motion } from "framer-motion";
import CollectionsIcon from "@mui/icons-material/Collections";

import { useNavigate } from "react-router-dom";

// ✅ Lazy load heavy components
const WhatIsSec = lazy(() => import("../Components/WhatIsSec.jsx"));
const AboutSection = lazy(() => import("../Components/AboutSection.jsx"));
const Courses = lazy(() => import("../Components/Courses.jsx"));
const LineCompenets = lazy(() => import("../Components/LineCompenets.jsx"));

import studentImg from "../assets/Images/Education.png";

// ✅ Framer motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Home = ({ setOpenModal }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box
          sx={{
            bgcolor: "#54ccc3",
            minHeight: "60vh",
            margin: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                py: 2,
              }}
            >
              {/* Left Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                style={{ flex: 1 }}
              >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  <span style={{ color: "#f28c38", fontWeight: "bolder" }}>
                    Welcome to Integrations
                  </span>{" "}
                  Your Path to Success in the Civil Services!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  INTEGRATIONS is an interesting platform that will teach you in
                  a more interactive way
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "white",
                      color: "#d38612ff",
                      fontWeight: "bold",
                      textTransform: "none",
                      px: 3,
                      borderRadius: "50px",
                    }}
                    onClick={() => setOpenModal(true)} // ✅ Open Navbar modal
                  >
                    REGISTER
                  </Button>

                  <Button
                    variant="text"
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                    onClick={() => navigate("/gallery")}
                  >
                    <CollectionsIcon /> Go to Gallery
                  </Button>
                </Box>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeRight}
                style={{ flex: 1, textAlign: "center" }}
              >
                <img
                  src={studentImg}
                  alt="student"
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                    loading: "lazy", // ✅ lazy load image
                  }}
                />
              </motion.div>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* ✅ Suspense for lazy-loaded components */}
      <Suspense
        fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
      >
        <LineCompenets />
        <WhatIsSec />
        <LineCompenets />
        <Courses />
        <LineCompenets />
        <AboutSection />
      </Suspense>
    </>
  );
};

export default React.memo(Home);
