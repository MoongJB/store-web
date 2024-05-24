import { Box } from "@mui/material";
import image from "/img.jpg";
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

const Product = ({ product }) => {
  const priceSale = (oldPrice, sale) => {
    return Math.round((1 - sale / 100) * oldPrice);
  };
  return (
    <Box border="none" padding={2} borderRadius="20px">
      <CardActionArea sx={{ borderRadius: "20px", marginBottom: "5px" }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          sx={{ borderRadius: "20px" }}
          // alt={item.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body2"
            component="div"
            align="left"
            minHeight="4.2rem"
            sx={{
              // Adjust the width as needed
              maxHeight: "4.2em", // 3 lines of text at 1.5em line-height each
              lineHeight: "1.5em", // Line height for text
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3, // Limit to 3 lines
              textOverflow: "clip",
              textAlign: "justify",
            }}
          >
            {product.description}
          </Typography>
          <Box display="flex" gap={5}>
            <Typography
              variant="body2"
              color="text.secondary"
              align="left"
              sx={{
                color: (theme) => theme.palette.error.main,
                fontSize: "20px",
              }}
              gutterBottom
            >
              {`${priceSale(product.price, product.sale).toLocaleString()}đ`}
            </Typography>
            <del
              style={{
                fontSize: "15px",
                marginTop: "4px",
              }}
            >
              {`${product.price.toLocaleString()}đ`}
            </del>
          </Box>

          <Box sx={{ textAlign: "left" }}>
            <Rating value={product.rating} readOnly sx={{ fontSize: "15px" }} />
          </Box>
        </CardContent>
      </CardActionArea>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mx={6}
      >
        <Button
          size="small"
          color="primary"
          variant="outlined"
          endIcon={<AddShoppingCartOutlinedIcon />}
          sx={{ minWidth: "100px" }}
        >
          Cart
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
