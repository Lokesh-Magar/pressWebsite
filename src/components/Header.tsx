"use client";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Link from "next/link"; // Import Next.js Link

type ThemeMode = "light" | "dark" | "system";

const Header: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [currentPaletteMode, setCurrentPaletteMode] = useState<
    "light" | "dark"
  >("light");

  // Detect system theme
  const getSystemTheme = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  };

  useEffect(() => {
    // Update palette mode based on themeMode
    if (themeMode === "system") {
      setCurrentPaletteMode(getSystemTheme());
    } else {
      setCurrentPaletteMode(themeMode);
    }

    // Listen for system theme changes
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (themeMode === "system") {
        setCurrentPaletteMode(e.matches ? "dark" : "light");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [themeMode]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const theme = createTheme({
    palette: {
      mode: currentPaletteMode, // Only "light" or "dark" is allowed here
    },
  });

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    handleMenuClose();
  };

  if (!isClient) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          background: currentPaletteMode === "light" ? "#fff" : "#333",
          color: currentPaletteMode === "light" ? "#000" : "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: "3rem" }}
          >
            PrintPress
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="/" passHref>
              <Button color="inherit" style={{ fontWeight: "bolder" }}>
                Home
              </Button>
            </Link>
            <Link href="/designs" passHref>
              <Button color="inherit" style={{ fontWeight: "bolder" }}>
                Designs
              </Button>
            </Link>
            <Link href="/reviews" passHref>
              <Button color="inherit" style={{ fontWeight: "bolder" }}>
                Review
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button color="inherit" style={{ fontWeight: "bolder" }}>
                Contact
              </Button>
            </Link>
            <IconButton onClick={handleMenuClick} color="inherit">
              {currentPaletteMode === "light" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleThemeChange("light")}>
                Light Mode
              </MenuItem>
              <MenuItem onClick={() => handleThemeChange("dark")}>
                Dark Mode
              </MenuItem>
              <MenuItem onClick={() => handleThemeChange("system")}>
                System Default
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
