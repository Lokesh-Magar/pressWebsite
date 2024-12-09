import React from "react";
import { Card, Typography, Box } from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";

interface ServiceCardProps {
  title: string;
  description: string;
}

const iconsMap: { [key: string]: React.ReactNode } = {
  "Digital Printing": <LocalPrintshopOutlinedIcon fontSize="large" />,
  "Custom Design": <ColorLensOutlinedIcon fontSize="large" />,
  "Fast Turnaround": <BoltOutlinedIcon fontSize="large" />,
  "T-Shirt Printing": <CheckroomOutlinedIcon fontSize="large" />,
  "Banners & Signs": <FlagOutlinedIcon fontSize="large" />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Card
      sx={{
        padding: 2,
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
      }}
    >
      <Box sx={{ marginBottom: 2 }}>{iconsMap[title]}</Box>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginTop: 1, color: "text.secondary" }}
      >
        {description}
      </Typography>
    </Card>
  );
};

export default ServiceCard;
