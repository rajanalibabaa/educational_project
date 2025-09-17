import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Import your course images
import c1 from "../assets/Images/c1.jpg";
import c2 from "../assets/Images/c2.png";
import c3 from "../assets/Images/c3.jpg";
import c4 from "../assets/Images/c4.png";
import c5 from "../assets/Images/c5.jpg";
import courses from "../assets/Images/courses.png";
import { ArrowForward } from "@mui/icons-material";

// --- Course Data ---
const courseData = [
  { image: c5, title: "SSC" },
  { image: c2, title: "CUET" },
  { image: c3, title: "TNPSC" },
  { image: c4, title: "TET" },
  { image: c1, title: "UGC" },
];

const Courses = () => {
  // Faster + more responsive animations
  const leftImageVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }, // Faster stagger
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const navigate = useNavigate();
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 6 }, overflow: "hidden" }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // triggers earlier
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: { xs: 6, md: 8 },
            fontSize: { xs: "2.25rem", md: "3.25rem" },
            color: "#2c3e50",
          }}
        >
          Our Courses in{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            INTEGRATIONS
          </span> ?
        </Typography>
      </motion.div>

      {/* Flex Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 5,
        }}
      >
        {/* Left Image */}
        <motion.div
          variants={leftImageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ flex: 1, maxWidth: "500px" }}
        >
          <img
            src={courses}
            alt="Our Courses"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "contain",
            }}
          />
        </motion.div>

        {/* Right Grid */}
        <Grid
          container
          display={'grid'}
          gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          spacing={3}
          component={motion.div}
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          sx={{ flex: 1.5 }}
        >
          {courseData.map((course, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              component={motion.div}
              variants={cardVariants}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    "& .course-image": { transform: "scale(1.05)" },
                    "& .course-overlay": { opacity: 1 },
                  },
                }}
              >
                <Box
                  className="course-image"
                  component="img"
                  src={course.image}
                  alt={course.title}
                  sx={{
                    width: "100%",
                    height: "220px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                />
                <Box
                  className="course-overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "10%",
                    background: "linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%, transparent)",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    p: 2,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography variant="h6"   sx={{ color: "#fff", fontWeight: 600 }}>
                    {course.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

       <Box sx={{ textAlign: "center", mt: 6 }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => navigate("/courses")}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "50px",
              fontWeight: 600,
              background: "linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%)",
              boxShadow: "0 6px 20px rgba(255,107,53,0.4)",
              "&:hover": {
                background: "linear-gradient(135deg, #FF8E53 0%, #FF6B35 100%)",
                boxShadow: "0 8px 25px rgba(255,107,53,0.6)",
              },
            }}
          >
            View More
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Courses;
