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
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

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
          <Typography gutterBottom variant="body2" component="div" align="left">
            A camera is an instrument used to capture and store images and
            videos
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
            sx={{ color: (theme) => theme.palette.error.main }}
            gutterBottom={1}
          >
            3.000.000
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Rating
              value={rating}
              onChange={(e) => setRating(+e.target.value)}
              sx={{ fontSize: "15px" }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
      <Box
        display="flex"
        flexDirection="row"
        gap={6}
        justifyContent="space-between"
        mx={3}
      >
        <Button
          size="small"
          color="primary"
          variant="outlined"
          endIcon={<AddShoppingCartOutlinedIcon />}
        >
          Add to Cart
        </Button>
        <Button
          size="small"
          color="warning"
          variant="contained"
          sx={{ minWidth: "100px" }}
          endIcon={<PaymentsOutlinedIcon />}
        >
          Buy
        </Button>
      </Box>
    </Box>
  );
};

export default Product;
