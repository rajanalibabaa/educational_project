import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)",
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{ 
            p: { xs: 3, md: 5 }, 
            borderRadius: 3, 
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(90deg, #2563eb, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contact Us
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Fill out the form below and we'll get back to you shortly.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Phone Number"
              type="tel"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Address"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
            />
          </Box>

          <Button
            variant="contained"
            size="large"
            sx={{
              alignSelf: "center",
              background: "linear-gradient(90deg, #2563eb, #9333ea)",
              color: "white",
              fontWeight: 600,
              px: 4,
              py: 1,
              "&:hover": {
                background: "linear-gradient(90deg, #1d4ed8, #7e22ce)",
              },
            }}
          >
            Submit
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactUs;