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
import "keen-slider/keen-slider.min.css"; // Import keen-slider CSS

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
  {
    name: "Elegant Brochure",
    price: "$11.68",
    image: "/images/banners/5.jpg",
  },
  {
    name: "Creative Banner",
    price: "$45.28",
    image: "/images/banners/6.jpg",
  },
];

const Designs = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false); // Track if it's client-side

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Ensure the component is client-side
  useEffect(() => {
    setIsClient(true);
    setLoaded(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering before it's client-side
  }

  return (
    <Box>
      <Header />
      <Box sx={{ textAlign: "center", padding: "50px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Our Stunning Designs
        </Typography>

        {/* Slider Section */}
        <Box className="swiper" sx={{ position: "relative" }}>
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {/* Slider Images with Border Radius */}
              <div className="keen-slider__slide">
                <img
                  src="/images/banners/1.jpg"
                  alt="swiper 1"
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "cover",
                    borderRadius: "15px", // Border radius added
                  }}
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/images/banners/2.jpg"
                  alt="swiper 2"
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "cover",
                    borderRadius: "15px", // Border radius added
                  }}
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/images/banners/3.jpg"
                  alt="swiper 3"
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "cover",
                    borderRadius: "15px", // Border radius added
                  }}
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/images/banners/4.jpg"
                  alt="swiper 4"
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "cover",
                    borderRadius: "15px", // Border radius added
                  }}
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/images/banners/5.jpg"
                  alt="swiper 5"
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "cover",
                    borderRadius: "15px", // Border radius added
                  }}
                />
              </div>
            </div>
            {/* Custom Navigation Arrows */}
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
              ].map((idx) => {
                return (
                  <Badge
                    key={idx}
                    variant="dot"
                    component="div"
                    className={classnames({
                      active: currentSlide === idx,
                    })}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                  ></Badge>
                );
              })}
            </div>
          )}
        </Box>

        {/* Product Cards */}
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  {/* Product Image */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "200px", // Set image height
                      overflow: "hidden",
                      borderRadius: "15px", // Border radius added
                      marginBottom: 2,
                    }}
                  >
                    <img
                      src={product.image} // Use product.image from the array
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
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
