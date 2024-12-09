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
        padding: "20px",
        backgroundColor: "black",
      }}
    >
      {/* Company name */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "white",
          fontSize: { xs: "1.8rem", sm: "2.5rem" }, // Reduced font size on small screens
          marginBottom: { xs: "5px", sm: "20px" }, // Reduce bottom margin for small screens
        }}
      >
        PrintPress Co.
      </Typography>

      {/* Tagline */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: "normal",
          color: "white",
          fontSize: { xs: "1rem", sm: "1.2rem" }, // Reduced font size on small screens
          marginTop: { xs: "0px", sm: "-10px" }, // Adjust top margin for small screens
          marginBottom: { xs: "5px", sm: "20px" }, // Reduce space below the tagline
        }}
      >
        Your one-stop shop for printing and pressing needs
      </Typography>

      {/* Social media buttons */}
      <Box
        sx={{
          marginTop: { xs: "5px", sm: "-3%" }, // Reduce gap for small screens
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-start" }, // Center buttons on small screens
          marginLeft: { sm: "85%" }, // Keep default alignment for large screens
          gap: 2,
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

      {/* Copyright text */}
      <Typography
        variant="caption"
        sx={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          display: "block",
          fontSize: "1rem",
          marginTop: "10px",
        }}
      >
        © 2023 PrintPress Co. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
