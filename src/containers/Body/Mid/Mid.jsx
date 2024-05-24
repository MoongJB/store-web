import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Product from "./Product";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Banner from "./Banner";

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
  fontWeight: 500,
  fontSize: "24px",
  marginBottom: "16px",
  textTransform: "uppercase",
});

export default function RowAndColumnSpacing() {
  return (
    <Box>
      <Box>
        <Banner />
      </Box>
      <Box>
        <Box my={5} marginBottom={20}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Title variant="h5" sx={{ letterSpacing: "0.5em" }}>
              lap top
            </Title>
            <Box display="flex" flexDirection="row">
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Apple"
                  component="a"
                  href="#basic-chip"
                  variant="outlined"
                  clickable
                  sx={{
                    // bgcolor: (theme) =>
                    //   theme.palette.mode === "dark"
                    //     ? theme.palette.warning.main
                    //     : undefined,
                    color: (theme) => theme.palette.error.main,
                    fontWeight: "bold",
                  }}
                />
              </Stack>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {[...Array(6).keys()].map((index) => (
                <StyledGridItem item xs={4} key={index}>
                  <Item sx={{ borderRadius: "30px" }}>
                    <Product />
                  </Item>
                </StyledGridItem>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
