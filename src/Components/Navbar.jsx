import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Modal,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

// Import your PDF file (place it in public or assets folder)
import samplePDF from "../assets/PDF/form.pdf"; // adjust path

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
};

const Navbar = ({ openModal, setOpenModal, drawerOpen, setDrawerOpen }) => {
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "Gallery", path: "/gallery" },
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#54ccc3", boxShadow: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Brand Logo */}
          <img
            src={logo}
            alt="Brand Logo"
            onClick={() => (window.location.href = "/")}
            style={{ width: "150px", height: "auto", cursor: "pointer" }}
          />

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                to={link.path}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#f28c38",
                borderRadius: "120px",
                ml: 2,
                boxShadow: 0,
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#f5f5f5" },
              }}
              onClick={handleOpenModal}
            >
              Register
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.label} component={Link} to={link.path}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
            <ListItem button onClick={handleOpenModal}>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Register Modal with PDF */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="register-modal-title"
        
      >
        <Box sx={style}>
          <Typography id="register-modal-title" variant="h6" color="primary" sx={{ mb: 0 }}>
            Registration Form
          </Typography>
          {/* PDF Embed */}
          <iframe
            src={samplePDF}
            title="Registration Form PDF"
            width="100%"
            height="90%"
            style={{ border: "none", borderRadius: "8px" }}
          />
          <Box sx={{ textAlign: "right", mt: 0 }}>
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              color="primary"
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
