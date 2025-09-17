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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #1976d2",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const Navbar = ({ openModal, setOpenModal, drawerOpen }) => {
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
            style={{ width: "150px", height: "auto" }}
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

      {/* Register Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="register-modal-title"
        aria-describedby="register-modal-description"
      >
        <Box sx={style}>
          <Typography id="register-modal-title" variant="h6" color="primary">
            Register
          </Typography>
          <Typography id="register-modal-description" sx={{ mt: 2 }}>
            Registration form goes here.
          </Typography>
          <Button
            onClick={handleCloseModal}
            sx={{ mt: 2 }}
            variant="outlined"
            color="primary"
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
