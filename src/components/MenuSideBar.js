import React from "react";

import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";

import { Link, useHistory } from "react-router-dom";

const MenuSideBar = () => {
  const pages = [{name: 'Ações', link: "stocks"}, {name: "Carteira" , link: "wallet"}];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const history = useHistory();

  const handleMenu = (page) => {
    history.push(`/${page}`)
  }

  return (
    <>
    
    <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
              sx={{
                height: "150px",
                width: "150px",
                top: 15,
                position: "absolute",
                left: 30,
              }}
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: 20, ml: 22 }}
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "240px",
          height: "100vh",
          my: 14,
        }}
      >
        <Box sx={{ flexGrow: 1, margin: "0 auto", mt: 12, ml: 5, position: 'absolute' }}>
          {pages.map((page) => (
         <Button
           key={page}
               sx={{ my: 2, color: "white", display: "block", }}
               onClick={() => handleMenu(page.link)}
             >
              {page.name}
            </Button>
          ))}
        </Box>
      </Box>
     
    </>
  );
};

export default MenuSideBar;
