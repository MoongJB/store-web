import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Logo from "../../assets/logo.jpg";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Divider from "@mui/material/Divider";
import ModeSelect from "../ModeSelect/ModeSelect";
import { Avatar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header({ setMode, mode }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [anchorElNotification, setAnchorElNOtification] = React.useState(null);
  const isMenuNotificationOpen = Boolean(anchorElNotification);

  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const isMenuCartOpen = Boolean(anchorElCart);

  const handleProfileMenuOpen = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationMenuOpen = (event) => {
    console.log(event);
    setAnchorElNOtification(event.currentTarget);
  };

  const handleCartMenuOpen = (event) => {
    console.log(event);
    setAnchorElCart(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuNotificationClose = () => {
    setAnchorElNOtification(null);
  };

  const handleMenuCartClose = () => {
    setAnchorElCart(null);
  };

  const menuId = "primary-search-account-menu";
  const notificationId = "primary-search-notification-menu";
  const cartId = "primary-search-card-menu";

  const renderMenuAvatar = (
    <Menu
      sx={{ marginTop: "50px", marginLeft: "35px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/sign-in" style={{ textDecoration: "none" }}>
          <Typography
            sx={{ color: "black", "&:hover": { color: "primary.main" } }}
          >
            Sign In
          </Typography>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const renderMenuNotification = (
    <Menu
      sx={{ marginTop: "50px" }}
      PaperProps={{
        style: {
          minWidth: "500px", // Set your desired minimum width
          minHeight: "500px", // Set your desired minimum height
        },
      }}
      anchorEl={anchorElNotification}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={notificationId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isMenuNotificationOpen}
      onClose={handleMenuNotificationClose}
    >
      <Box p={2}>
        <Box>
          <Typography
            variant="h6"
            align="center"
            gutterBottom={2}
            fontWeight="bold"
          >
            Notification
          </Typography>
        </Box>

        <Divider />

        <Box py={5} display="flex" flexDirection="column" gap={5}>
          <MenuItem onClick={handleMenuNotificationClose}>
            <Box>Item 1</Box>
          </MenuItem>
          <MenuItem onClick={handleMenuNotificationClose}>
            <Box>Item 1</Box>
          </MenuItem>
          <MenuItem onClick={handleMenuNotificationClose}>
            <Box>Item 1</Box>
          </MenuItem>
        </Box>
      </Box>
    </Menu>
  );

  const renderMenuCart = (
    <Menu
      sx={{ marginTop: "50px" }}
      PaperProps={{
        style: {
          minWidth: "500px", // Set your desired minimum width
          minHeight: "500px", // Set your desired minimum height
        },
      }}
      anchorEl={anchorElCart}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={cartId}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={isMenuCartOpen}
      onClose={handleMenuCartClose}
    >
      <Box p={2}>
        <Box>
          <Typography
            variant="h6"
            align="center"
            gutterBottom={2}
            fontWeight="bold"
          >
            Products in the your shopping cart
          </Typography>
        </Box>

        <Divider />

        <Box py={5} display="flex" flexDirection="column" gap={5}>
          <MenuItem onClick={handleMenuNotificationClose}>
            <Box>Item 1</Box>
          </MenuItem>
          <MenuItem onClick={handleMenuNotificationClose}>
            <Box>Item 1</Box>
          </MenuItem>
          <MenuItem onClick={handleMenuNotificationClose}>
            <Box>Item 1</Box>
          </MenuItem>
        </Box>

        <Box>
          <Divider />
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" color="warning.main" align="center">
              Total:{" "}
            </Typography>
            <Typography
              variant="h6"
              color="error"
              align="center"
              gutterBottom={2}
            >
              5.000.000
            </Typography>
          </Box>
          <Box sx={{ float: "right" }}>
            <Button variant="contained">Payment</Button>
          </Box>
        </Box>
      </Box>
    </Menu>
  );

  const handleCloseNavMenu = () => {
    //something here.....
  };

  const pages = ["Products", "Pricing", "Blog"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          px: 40,
          height: "100px",
          display: "flex",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <NavLink to="/">
            <Avatar
              alt="Logo"
              src={Logo}
              sx={{
                width: 80,
                height: 80,
                marginRight: "16px",
                objectFit: "contain",
              }}
            />
          </NavLink>

          <Search style={{ borderRadius: "10px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ width: 500, height: 70 }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box display="flex" flexDirection="row" gap={1}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "15px",
              }}
            >
              <ModeSelect mode={mode} setMode={setMode} />
            </Box>

            <IconButton
              size="large"
              aria-label="show mail"
              color="inherit"
              aria-controls={cartId}
              aria-haspopup="true"
              onClick={handleCartMenuOpen}
            >
              <Badge badgeContent={4} color="error" max={9}>
                <LocalMallOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show notifications"
              color="inherit"
              aria-controls={notificationId}
              aria-haspopup="true"
              onClick={handleNotificationMenuOpen}
            >
              <Badge badgeContent={17} color="error" max={9}>
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenuCart}
      {renderMenuNotification}
      {renderMenuAvatar}
    </Box>
  );
}
