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
      <Typography
        variant="h4"
        gutterBottom
        style={{ fontWeight: "bold", color: "white" }}
      >
        PrintPress Co.
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        style={{ fontWeight: "normal", color: "white", marginTop: "-10px" }}
      >
        Your one-stop shop for printing and pressing needs
      </Typography>

      <Box
        sx={{
          marginTop: "-3%",
          marginLeft: "80%",
          justifyContent: "center",
          color: "white",
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

      <Typography
        variant="caption"
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          display: "block",
          fontSize: "1rem",
        }}
      >
        © 2023 PrintPress Co. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
