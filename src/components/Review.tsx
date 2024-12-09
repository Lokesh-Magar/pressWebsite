import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReviewCard from "../components/ReviewCard";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review:
      "Exceptional quality and service! The team went above and beyond to ensure my project was perfect.",
  },
  {
    name: "Jane Smith",
    rating: 5,
    review:
      "Great designs and fast delivery. The attention to detail was impressive. Will definitely use again.",
  },
  {
    name: "Mike Johnson",
    rating: 4,
    review:
      "The team was incredibly helpful and professional. They turned my vague idea into a stunning reality.",
  },
  {
    name: "Emily Brown",
    rating: 5,
    review:
      "Outstanding customer service and top-notch print quality. Highly recommended!",
  },
];

const ReviewsLayout = () => {
  return (
    <Box>
      <Header />
      <Box style={{ textAlign: "center", padding: "50px" }}>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Customer Reviews
        </Typography>
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", color: "#FFB400", margin: "20px 0" }}
        >
          Overall Rating: 4.8
        </Typography>
      </Box>
      <Box style={{ padding: "20px" }}>
        <Grid container spacing={2}>
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <ReviewCard
                name={review.name}
                rating={review.rating}
                review={review.review}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ReviewsLayout;
