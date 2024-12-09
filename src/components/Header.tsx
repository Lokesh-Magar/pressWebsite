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
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";

type ThemeMode = "light" | "dark" | "system";

const Header: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [currentPaletteMode, setCurrentPaletteMode] = useState<
    "light" | "dark"
  >("light");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getSystemTheme = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  };

  useEffect(() => {
    if (themeMode === "system") {
      setCurrentPaletteMode(getSystemTheme());
    } else {
      setCurrentPaletteMode(themeMode);
    }

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
      mode: currentPaletteMode,
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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
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
        <Toolbar
          sx={{
            justifyContent: "space-between",
            padding: { xs: "8px 16px", sm: "16px" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", sm: "3rem" } }}
          >
            PrintPress
          </Typography>

          {/* Hamburger Icon for Small Screens */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Menu Items for Large Screens */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Button href="/" color="inherit" sx={{ fontWeight: "bolder" }}>
              Home
            </Button>
            <Button
              href="/designs"
              color="inherit"
              sx={{ fontWeight: "bolder" }}
            >
              Designs
            </Button>
            <Button
              href="/reviews"
              color="inherit"
              sx={{ fontWeight: "bolder" }}
            >
              Review
            </Button>
            <Button
              href="/contact"
              color="inherit"
              sx={{ fontWeight: "bolder" }}
            >
              Contact
            </Button>

            {/* Theme Toggle Button */}
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

      {/* Drawer for Small Screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          <ListItem component="a" href="/" onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component="a" href="/designs" onClick={handleDrawerToggle}>
            <ListItemText primary="Designs" />
          </ListItem>
          <ListItem component="a" href="/reviews" onClick={handleDrawerToggle}>
            <ListItemText primary="Review" />
          </ListItem>
          <ListItem component="a" href="/contact" onClick={handleDrawerToggle}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem
            component="a"
            onClick={handleMenuClick}
            style={{ cursor: "pointer" }}
          >
            <ListItemText primary="Theme" />
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default Header;
