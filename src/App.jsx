
import React from 'react';
import { useState } from 'react';
import { Routes, Route  } from 'react-router-dom';
import Home from "../src/Pages/Home.jsx"
import AboutUs from "../src/Pages/AboutUs"
import Courses from "../src/Pages/Courses"
import ContactUs from "../src/Pages/ContactUs"
import Gallery from "./Pages/Gallery.jsx"
import Navbar from './Components/Navbar.jsx';
import Box from "@mui/material/Box"
import Footer from './Components/footer.jsx';
import News from './Pages/News.jsx';

const App = () => {

   const [openModal, setOpenModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ m: 0, p: 0, minHeight: '100vh', bgcolor: '#ffffffff' }}>
      <Navbar openModal={openModal} setOpenModal={setOpenModal} />
      <Routes>
        <Route path="/" element={<Home setOpenModal={setOpenModal} />} />
        <Route path="/courses" element={<Courses />} />
         <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Box>
  );
};

export default App;