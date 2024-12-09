"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  IconButton,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const ContactLayout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <Box>
      <Header />
      <Box sx={{ padding: "50px" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 5 }}
        >
          Get in Touch
        </Typography>

        {/* Flex Container for Cards */}
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Send us Message Card */}
          <Grid item xs={12} sm={6} md={5}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: 3 }}
                >
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    sx={{ marginBottom: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    sx={{ marginBottom: 2 }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      width: "100%",
                      color: "white",
                      bgcolor: "black",
                      fontWeight: "bold",
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information Card */}
          <Grid item xs={12} sm={6} md={5}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: 3 }}
                >
                  Contact Information
                </Typography>
                <Box sx={{ marginBottom: 2, display: "flex" }}>
                  <IconButton sx={{ marginRight: 1 }}>
                    <LocationOnOutlinedIcon
                      sx={{
                        color: "black",
                        fontSize: "2rem",
                        marginTop: "-15px",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    Kathmandu, Nepal
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: 2, display: "flex" }}>
                  <IconButton sx={{ marginRight: 1 }}>
                    <EmailOutlinedIcon
                      sx={{
                        color: "black",
                        fontSize: "2rem",
                        marginTop: "-12px",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    info@printpressco.com
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: 2, display: "flex" }}>
                  <IconButton sx={{ marginRight: 1 }}>
                    <LocalPhoneOutlinedIcon
                      sx={{
                        color: "black",
                        fontSize: "2rem",
                        marginTop: "-12px",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    (+977) 9876543210
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: 2, display: "flex" }}>
                  <IconButton sx={{ marginRight: 1 }}>
                    <AccessTimeOutlinedIcon
                      sx={{
                        color: "black",
                        fontSize: "2rem",
                        marginTop: "-15px",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="body1"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    Sun - Fri: 10:00 AM - 6:00 PM
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactLayout;
