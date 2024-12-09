import React from "react";
import { Card, CardContent, Button, Typography } from "@mui/material";

interface ProductCardProps {
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price }) => {
  return (
    <Card style={{ padding: "20px", textAlign: "center", margin: "10px" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography color="textSecondary">{price}</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
