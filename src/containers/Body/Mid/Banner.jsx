import { useState } from "react";
import { Box, Container, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.png";
import img3 from "../../../assets/banner/3.jpg";
import img4 from "../../../assets/banner/4.png";
import img5 from "../../../assets/banner/5.png";
import img6 from "../../../assets/banner/6.png";

const images = [img1, img2, img3, img4, img5, img6];
const imageWidth = "800px";
const imageHeight = "550px";
const totalHeight = parseInt(imageHeight);

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const individualImageHeight = `${totalHeight / 2}px`;
  const individualImageWidth = `400px`;

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Box
        position="relative"
        style={{
          width: imageWidth,
          height: imageHeight,
          overflow: "hidden",
          borderRadius: "20px",
        }}
      >
        <IconButton
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.5)",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <ArrowBack />
        </IconButton>
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        />
        <IconButton
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.5)",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.8)",
            },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        ml={2}
        height={imageHeight} // Set the height of the right column equal to the slider image height
      >
        {images.slice(4).map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt={`Slide ${index + idx + 1}`}
            style={{
              width: individualImageWidth,
              height: individualImageHeight,
              borderRadius: "10px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default ImageSlider;
