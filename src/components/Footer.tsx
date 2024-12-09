import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: { xs: "15px", sm: "20px" },
        backgroundColor: "black",
        textAlign: "center", // Default center alignment for larger screens
      }}
    >
      {/* Title and Subtitle: Align left on smaller screens */}
      <Box
        sx={{
          display: { xs: "flex", sm: "block" }, // Flex on small screens, block on larger screens
          flexDirection: "column",
          alignItems: { xs: "flex-start", sm: "center" }, // Align to the left on small screens, center on larger ones
          marginTop: { xs: "10px", sm: "0" }, // Adjust top margin for small screens
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: { xs: "1.5rem", sm: "2rem" }, // Smaller font size on small screens
          }}
        >
          PrintPress Co.
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "normal",
            color: "white",
            marginTop: "-10px",
            fontSize: { xs: "0.9rem", sm: "1.25rem" }, // Smaller font size for smaller screens
          }}
        >
          Your one-stop shop for printing and pressing needs
        </Typography>
      </Box>

      {/* Social Media Icons */}
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap", // Stack icons on small screens
        }}
      >
        <IconButton>
          <FacebookIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <TwitterIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <LinkedInIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {/* Copyright Text */}
      <Typography
        variant="caption"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: { xs: "0.8rem", sm: "1rem" }, // Smaller font size on small screens
          marginTop: "10px",
        }}
      >
        © 2023 PrintPress Co. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
