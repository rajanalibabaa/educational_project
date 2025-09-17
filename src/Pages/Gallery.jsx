import React from "react";
import { Box, Grid, Card, CardMedia, Typography, Container } from "@mui/material";

const images = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1612831661391-4a0f0634ec23?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581091215365-0e3f1c8dbeec?auto=format&fit=crop&w=600&q=80",
];

const Gallery = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, background: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 6,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            color: "#0f172a",
          }}
        >
          Gallery
        </Typography>

        <Grid container spacing={3}>
          {images.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={img}
                  alt={`Gallery Image ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
