import * as React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  SwipeableDrawer,
} from "@mui/material";

import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";

const pages = ["actions", "carteira", "blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/wallet"
              sx={{
                mr: 10,
                fontFamily: "monospace",
                fontWeight: 900,
                letterSpacing: ".0rem",
                color: "white",
                textDecoration: "none",
                ml: 3,
                mt: 5,
              }}
            >
              Xp Wallet
            </Typography>

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <LogoutOutlinedIcon color="primary" fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
        <Menu
          sx={{ mt: 6, ml: 5 }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>
            <Link to="/">
              <Typography>logout</Typography>
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
export default Header;
