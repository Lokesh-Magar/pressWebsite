import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Link from "next/link";

const services = [
  {
    title: "Digital Printing",
    description: "High-quality digital prints for all your needs",
  },
  {
    title: "Custom Design",
    description: "Unique designs tailored to your brand",
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality",
  },
  {
    title: "T-Shirt Printing",
    description: "Custom apparel for individuals and teams",
  },
  {
    title: "Banners & Signs",
    description: "Eye-catching banners for any occasion",
  },
];

const Home = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          textAlign: "center",
          padding: "50px 20px",
          background: `
      linear-gradient(to right, #7F7878, #FFFFFF), 
      url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cdefs%3E%3Cpath id=%22grid%22 d=%22M0 20h20v20H0zm20 0h20v20H20zm20 0h20v20H40zm-20 20h20v20H20zm20 0h20v20H40zm20 0h20v20H60z%22/%3E%3C/defs%3E%3Cuse xlink:href=%22%23grid%22/%3E%3C/svg%3E'),
      linear-gradient(to right, #ff7f7f 50%, #ffcc99 50%)
    `,
          backgroundSize: "cover, 50px 50px, 40px 100%",
          backgroundPosition: "left bottom, left bottom, top left",
          borderRadius: "0 0 0 0",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Print Your Vision
        </Typography>
        <Typography variant="body1" sx={{ margin: "20px 0" }}>
          Experience top-quality printing services tailored to your unique
          needs. From business cards to banners, we bring your ideas to life.
        </Typography>
        <Box>
          <Link href="/designs">
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: 2, bgcolor: "black" }}
            >
              Explore Designs
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outlined"
              color="primary"
              sx={{
                marginRight: 2,
                borderColor: "black",
                "&:hover": {
                  borderColor: "black",
                },
                color: "black",
              }}
            >
              Get a Quote
            </Button>
          </Link>
        </Box>
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
        >
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          textAlign: "center",
          padding: "50px 20px",
          background: `
      linear-gradient(to right, #7F7878, #FFFFFF), 
      url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cdefs%3E%3Cpath id=%22grid%22 d=%22M0 20h20v20H0zm20 0h20v20H20zm20 0h20v20H40zm-20 20h20v20H20zm20 0h20v20H40zm20 0h20v20H60z%22/%3E%3C/defs%3E%3Cuse xlink:href=%22%23grid%22/%3E%3C/svg%3E'),
      linear-gradient(to right, #ff7f7f 50%, #ffcc99 50%)
    `,
          backgroundSize: "cover, 50px 50px, 40px 100%",
          backgroundPosition: "left bottom, left bottom, top left",
          borderRadius: "0 0 0 0",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bolder", fontSize: "2rem", color: "black" }}
        >
          About Print Press
        </Typography>

        <Typography
          variant="body1"
          sx={{
            margin: "20px 0",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          PrintPress is a leading printing company with over a decade of
          experience. We combine cutting-edge technology with expert
          craftsmanship to deliver exceptional print products. Our commitment to
          quality and customer satisfaction sets us apart in the industry.
        </Typography>

        <Box>
          <Link href="/contact">
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: 2, bgcolor: "black" }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
