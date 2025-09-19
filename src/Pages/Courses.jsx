import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  Chip,
  Stack,
  alpha,
} from "@mui/material";
import {
  MenuBook,
  Assignment,
  Layers,
  Public,
  LocalLibrary,
  Star,
  ArrowForward,
} from "@mui/icons-material";

const Courses = () => {
  const courses = [
    {
      title: "Civil Services Exam",
      icon: <Public sx={{ fontSize: 22, color: "#2563eb" }} />,
      color: "#3b82f6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiwi8DudTqUW30jj1UfPRA6B_bQQ1n-PIEQ&s",
      items: [
        "General Studies Prelims cum Main",
        "Civil Services Aptitude Test",
        "Essay",
        {
          subtitle: "Optional Subjects",
          subitems: [
            "Anthropology",
            "History",
            "Geography",
            "Tamil Literature",
            "Law",
            "Zoology",
          ],
        },
      ],
    },
    {
      title: "UGC NET",
      icon: <LocalLibrary sx={{ fontSize: 22, color: "#16a34a" }} />,
      color: "#22c55e",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      items: [
        "Anthropology",
        "History",
        "Geography",
        "Tamil Literature",
        "Law",
        "Zoology",
      ],
    },
    {
      title: "TNPSC",
      icon: <Assignment sx={{ fontSize: 22, color: "#dc2626" }} />,
      color: "#ef4444",
      image:
        "https://images.unsplash.com/photo-1523246191218-5cd3f349f42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      items: ["Group I to Group IV (Prelims & Main)"],
    },
    {
      title: "TET",
      icon: <Layers sx={{ fontSize: 22, color: "#ea580c" }} />,
      color: "#f97316",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      items: ["Teachers Eligibility Test (All Subjects)"],
    },
    {
      title: "CUET",
      icon: <MenuBook sx={{ fontSize: 22, color: "#9333ea" }} />,
      color: "#a855f7",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      items: ["Central Undergraduate Eligibility Test"],
    },
  ];

  const ItemCard = ({ text, color }) => (
    <Paper
      elevation={0}
      sx={{
        p: 0.8,
        borderRadius: 1.5,
        background: "rgba(255, 255, 255, 0.95)",
        border: `1px solid ${color}20`,
        display: "flex",
        alignItems: "center",
        gap: 1,
        transition: "all 0.18s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: `0 6px 10px ${color}20`,
        },
      }}
    >
      <Star sx={{ color, fontSize: 16 }} />
      <Typography
        sx={{ color: "#374151", fontSize: "0.85rem", fontWeight: 500 }}
      >
        {text}
      </Typography>
    </Paper>
  );

  const renderCard = (course) => (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
        transition: "all 0.22s ease",
        background: "white",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 10px 28px ${course.color}18`,
        },
      }}
    >
      {/* Image Header */}
      <Box sx={{ height: 130, position: "relative", overflow: "hidden" }}>
        <Box
          component="img"
          src={course.image}
          alt={course.title}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, ${alpha(
              course.color,
              0.18
            )} 0%, rgba(0,0,0,0.55) 100%)`,
          }}
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ position: "absolute", bottom: 12, left: 12, right: 12 }}
        >
          <Box
            sx={{
              p: 1,
              borderRadius: 1.5,
              bgcolor: `${course.color}12`,
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {course.icon}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              color: "#fff",
              textShadow: "0 1px 2px rgba(0,0,0,0.35)",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            {course.title}
          </Typography>
        </Stack>
      </Box>

      <CardContent sx={{ p: 1.75 }}>
        <Box
          sx={{
            height: "3px",
            width: "42px",
            bgcolor: course.color,
            borderRadius: 2,
            mb: 2,
          }}
        />

        <Grid container spacing={1.25}>
          {course.items.map((item, idx) =>
            typeof item === "string" ? (
              <Grid item xs={12} key={idx}>
                <ItemCard text={item} color={course.color} />
              </Grid>
            ) : (
              <Grid item xs={12} key={idx}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: 600,
                    color: course.color,
                    mb: 1,
                    fontSize: "0.95rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <ArrowForward sx={{ fontSize: 16 }} />
                  {item.subtitle}
                </Typography>
                <Grid container spacing={1}>
                  {item.subitems.map((sub, subIdx) => (
                    <Grid item xs={12} sm={6} key={subIdx}>
                      <ItemCard text={sub} color={course.color} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )
          )}
        </Grid>

        <Box
          sx={{
            mt: 2,
            pt: 1.25,
            borderTop: "1px dashed #eef2f7",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Chip
            label="Enroll Now"
            sx={{
              bgcolor: course.color,
              color: "white",
              fontWeight: 600,
              px: 1.5,
              py: 0.4,
              fontSize: "0.85rem",
              "&:hover": { bgcolor: course.color, opacity: 0.95 },
            }}
            clickable
          />
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)",
        minHeight: "100vh",
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
      id="courses"
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              background: "linear-gradient(90deg, #a27e24ff, #dea322ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Our Courses
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              color: "#0f172a",
              mb: 1,
            }}
          >
            Comprehensive{" "}
            <span style={{ color: "#3b82f6" }}>Exam Preparation</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.92rem", md: "1rem" },
              color: "#64748b",
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Specialized courses and mock tests to help you succeed.
          </Typography>
        </Box>

        {/* Render first two courses as normal cards inside the container */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {renderCard(courses[0])}
          </Grid>
          <Grid item xs={12} md={6} width={1200}>
            {renderCard(courses[1])}
          </Grid>
        </Grid>

        {/* Compact row for the remaining courses */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12 / 8,
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          {courses.slice(2).map((course, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 calc(33.333% - 12px)",
                minWidth: 220,
                maxWidth: "100%",
              }}
            >
              {renderCard(course)}
            </Box>
          ))}
        </Box>

        <Box textAlign="center" mt={4}>
          <Typography
            sx={{ color: "#64748b", fontStyle: "italic", fontSize: "0.9rem" }}
          >
            All courses include study materials, mock tests, and expert guidance
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Courses;
