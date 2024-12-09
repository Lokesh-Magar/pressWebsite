"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Badge from "@mui/material/Badge";
import { useKeenSlider } from "keen-slider/react";
import classnames from "classnames";
import "keen-slider/keen-slider.min.css";

const products = [
  {
    name: "Modern Business Card",
    price: "$10.28",
    image: "/images/banners/1.jpg",
  },
  {
    name: "Vibrant Flyer Design",
    price: "$15.68",
    image: "/images/banners/2.jpg",
  },
  {
    name: "Custom T-Shirt Print",
    price: "$30.28",
    image: "/images/banners/3.jpg",
  },
  {
    name: "Eye-Catching Poster",
    price: "$25.32",
    image: "/images/banners/4.jpg",
  },
  { name: "Elegant Brochure", price: "$11.68", image: "/images/banners/5.jpg" },
  { name: "Creative Banner", price: "$45.28", image: "/images/banners/6.jpg" },
];

const Designs = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  useEffect(() => {
    setIsClient(true);
    setLoaded(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Box>
      <Header />
      <Box sx={{ textAlign: "center", padding: "50px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Our Stunning Designs
        </Typography>

        {/* Slider Section */}
        <Box
          className="swiper"
          sx={{ position: "relative", marginBottom: "50px" }}
        >
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {products.map((product, index) => (
                <div key={index} className="keen-slider__slide">
                  <img
                    src={product.image}
                    alt={`slider ${index + 1}`}
                    className="slider-image"
                    style={{
                      width: "100%",
                      height: "500px", // Fixed height for all images
                      objectFit: "cover", // Ensure the image maintains aspect ratio
                      borderRadius: "15px",
                    }}
                  />
                </div>
              ))}
            </div>
            {loaded && instanceRef.current && (
              <>
                <Button
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    zIndex: 1,
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                  }}
                  onClick={() => instanceRef.current?.prev()}
                >
                  Prev
                </Button>
                <Button
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    zIndex: 1,
                    background: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                  }}
                  onClick={() => instanceRef.current?.next()}
                >
                  Next
                </Button>
              </>
            )}
          </div>

          {/* Dots for Navigation */}
          {loaded && instanceRef.current && (
            <div className="swiper-dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => (
                <Badge
                  key={idx}
                  variant="dot"
                  component="div"
                  className={classnames({ active: currentSlide === idx })}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                ></Badge>
              ))}
            </div>
          )}
        </Box>

        {/* Product Cards */}
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Box
                    sx={{
                      width: "100%",
                      height: "200px", // Fixed height for cards
                      overflow: "hidden",
                      borderRadius: "15px",
                      marginBottom: 2,
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%", // Fixed height for card images
                        objectFit: "cover", // Ensure image maintains aspect ratio
                      }}
                    />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    {product.price}
                  </Typography>
                  <Button variant="contained" sx={{ width: "100%" }}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Designs;
