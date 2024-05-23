import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Product from "./Product";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3), // Add margin-top to the first item in each row
}));

const Title = styled(Typography)({
  fontWeight: "bold",
  fontSize: "24px",
  marginBottom: "16px",
});

export default function RowAndColumnSpacing() {
  return (
    <Box>
      <Box my={5}>
        <Box>
          <Title variant="h4">Laptop Ban Chay Trong Thang 5</Title>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {[...Array(6).keys()].map((index) => (
              <StyledGridItem item xs={4} key={index}>
                <Item sx={{ borderRadius: "20px" }}>
                  <Product />
                </Item>
              </StyledGridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
