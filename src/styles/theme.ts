import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Replace with your primary color
    },
    secondary: {
      main: "#f50057", // Replace with any accent color
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
    background: {
      default: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Use your font
    h3: {
      fontWeight: "bold",
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: "bold",
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
      color: "#555",
    },
    button: {
      textTransform: "none", // Disable uppercase transformation for buttons
    },
  },
});

export default theme;
