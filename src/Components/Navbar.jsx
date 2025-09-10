import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: '#54ccc3', boxShadow: 0 }}>
  <Toolbar sx={{ gap: 4 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TOTC
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/courses">
            Courses
          </Button>
          <Button color="inherit" component={Link} to="/gallery">
            Gallery
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
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
            }}
            onClick={handleOpen}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="register-modal-title"
        aria-describedby="register-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="register-modal-title"
            variant="h6"
            component="h2"
            color="primary"
          >
            Register
          </Typography>
          <Typography id="register-modal-description" sx={{ mt: 2 }}>
            Registration form goes here.
          </Typography>
          <Button
            onClick={handleClose}
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