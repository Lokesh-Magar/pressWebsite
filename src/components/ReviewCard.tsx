import React from "react";
import { Card, CardContent, Typography, Rating } from "@mui/material";

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, review }) => {
  return (
    <Card style={{ margin: "10px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ marginTop: "10px" }}
        >
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
