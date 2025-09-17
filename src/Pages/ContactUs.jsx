import React from "react";
import { Box, Container, Typography, TextField, Button, Grid } from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 8 }, background: "#f8fafc" }} id="contact-us">
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 4,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            color: "#0f172a",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#64748b",
            fontSize: "1rem",
          }}
        >
          Have questions or want to enroll? Send us a message and we will get back to you shortly.
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#3b82f6",
                  "&:hover": { backgroundColor: "#2563eb" },
                  px: 6,
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
