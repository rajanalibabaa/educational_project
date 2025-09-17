import React from "react";
import { Box, keyframes } from "@mui/material";
import book from "../assets/Images/book.png";

// Line animation: shrink from full width → center
const joinLine = keyframes`
  from { transform: scaleX(0); opacity: 0; }
  to { transform: scaleX(1); opacity: 1; }
`;

// Book animation: zoom in
const zoomIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
`;

const LineComponents = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 1, sm: 2, md: 3 }, // smaller gap on mobile, larger on desktop
        mt: { xs: 1, sm: 2, md: 3 },
        mb: { xs: 1, sm: 2 , md: 3},
        width: "100%",
      }}
    >
      {/* Left Line */}
      <Box
        sx={{
          flex: 1,
          height: { xs: "2px", sm: "3px", md: "4px" }, // responsive thickness
          bgcolor: "#ff9f04ff",
          transformOrigin: "right center",
          animation: `${joinLine} 1.5s ease-out forwards`,
        }}
      />

      {/* Book Image in Circle */}
      <Box
        sx={{
          width: { xs: 60, sm: 80, md: 90, lg: 100 }, // responsive circle
          height: { xs: 60, sm: 80, md: 90, lg: 100 },
          borderRadius: "50%",
          border: "3px solid #57ff63ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: `${zoomIn} 1.2s ease-out 0.5s forwards`,
        }}
      >
        <img
          src={book}
          alt="Book"
          style={{
            width: "80%",
            height: "80%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Right Line */}
      <Box
        sx={{
          flex: 1,
          height: { xs: "2px", sm: "3px", md: "4px" },
          bgcolor: "#ff9f04ff",
          transformOrigin: "left center",
          animation: `${joinLine} 1.5s ease-out forwards`,
        }}
      />
    </Box>
  );
};

export default LineComponents;
