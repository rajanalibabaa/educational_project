import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Backdrop,
  Fade

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  
    const handleOpenModal = () => {
    navigate("/registration")
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
      <AppBar 
        position="static" 
        sx={{ 
          bgcolor: "#54ccc3", 
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          background: "linear-gradient(135deg, #54ccc3 0%, #38b2ac 100%)"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between"}}>
          {/* Brand Logo */}
          <img 
            src={logo} 
            alt="Brand Logo"  
            onClick={() => navigate("/")} 
            style={{ 
              width: "150px", 
              height: "auto", 
              cursor: "pointer",
              transition: "transform 0.3s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          />

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                to={link.path}
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transform: "translateY(-2px)"
                  },
                  transition: "all 0.2s ease"
                }}
              >
                {link.label}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "#f28c38",
                borderRadius: "50px",
                ml: 2,
                px: 3,
                boxShadow: "0 4px 8px rgba(242, 140, 56, 0.3)",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "16px",
                "&:hover": { 
                  backgroundColor: "#f5f5f5",
                  boxShadow: "0 6px 12px rgba(242, 140, 56, 0.4)",
                  transform: "translateY(-2px)"
                },
                transition: "all 0.3s ease"
              }}
              onClick={handleOpenModal}
            >
              Register
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ 
              display: { xs: "block", md: "none" }, 
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)"
              }
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer with Backdrop Opacity */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: isMobile ? "85%" : 350,
            background: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "-5px 0 25px rgba(0,0,0,0.15)",
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          }
        }}
        transitionDuration={300}
      >
        <Box
          sx={{ 
            width: "100%", 
            height: "100%",
            display: "flex",
            flexDirection: "column"
          }}
          role="presentation"
        >
          {/* Drawer Header with Close Button */}
          <Box sx={{ 
            display: "flex", 
            justifyContent: "flex-end", 
            p: 2,
            backgroundColor: "#54ccc3",
            background: "linear-gradient(135deg, #54ccc3 0%, #38b2ac 100%)"
          }}>
            <IconButton 
              onClick={toggleDrawer(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          
          {/* Navigation Links */}
          <List sx={{ px: 2, pt: 4 }}>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.label}
                component={Link}
                to={link.path}
                onClick={toggleDrawer(false)}
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  "&:hover": {
                    backgroundColor: "rgba(84, 204, 195, 0.1)",
                  }
                }}
              >
                <ListItemText 
                  primary={link.label} 
                  primaryTypographyProps={{ 
                    fontWeight: 500,
                    color: "#2d3748",
                    fontSize: "18px"
                  }} 
                />
              </ListItem>
            ))}
            
            {/* Register Button in Drawer */}
            <ListItem 
              sx={{ 
                justifyContent: "center", 
                mt: 4,
                px: 2
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#f28c38",
                  color: "white",
                  borderRadius: "50px",
                  py: 1.5,
                  boxShadow: "0 4px 8px rgba(242, 140, 56, 0.3)",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "16px",
                  "&:hover": { 
                    backgroundColor: "#e67e22",
                    boxShadow: "0 6px 12px rgba(242, 140, 56, 0.4)",
                  },
                }}
                   onClick={() => {
      setDrawerOpen(false); // Close the drawer directly
      handleOpenModal(); // Then navigate to registration
    }}
                    
            
              >
                Register Now
              </Button>
            </ListItem>
          </List>
          
          {/* Footer in Drawer */}
          <Box sx={{ mt: "auto", p: 3, textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} Your Company
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;