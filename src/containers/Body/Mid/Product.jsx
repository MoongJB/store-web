import { Box } from "@mui/material";
import image from "../../../assets/img.jpg";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import Rating from "@mui/material/Rating";

import { useState } from "react";

const Product = () => {
  const [rating, setRating] = useState(5);
  return (
    <Box border="none" padding={2}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          // alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            A camera is an instrument used to capture and store images and
            videos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            3.000.000
          </Typography>
          <Rating value={rating} onChange={(e) => setRating(+e.target.value)} />
        </CardContent>
      </CardActionArea>
      <Box
        display="flex"
        flexDirection="row"
        gap={6}
        justifyContent="space-between"
        mx={3}
      >
        <Button size="small" color="primary" variant="outlined">
          Add to Cart
        </Button>
        <Button
          size="small"
          color="warning"
          variant="contained"
          sx={{ minWidth: "100px" }}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
