
import React from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from "../src/Pages/Home.jsx"
import AboutUs from "../src/Pages/AboutUs"
import Courses from "../src/Pages/Courses"
import ContactUs from "../src/Pages/ContactUs"
import Gallery from "../src/Pages/Gallery.jsx"
import Navbar from './Components/Navbar.jsx';
import Box from "@mui/material/Box"

const App = () => {
  return (
    <Box sx={{ m: 0, p: 0, minHeight: '100vh', bgcolor: '#ffffffff' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
         <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Box>
  );
};

export default App;