import React from "react";

import {
  Box,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";

import { Link, useHistory } from "react-router-dom";

const MenuSideBar = () => {
  const pages = [
    { name: "Ações", link: "stocks" },
    { name: "Depositar / Sacar", link: "depositWithdraw" },
  ];

  const history = useHistory();

  const handleMenu = (page) => {
    history.push(`/${page}`);
  };

  return (
    <>
      <Box >
        <IconButton sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
            sx={{
              height: "135px",
              width: "135px",
              top: 15,
              position: "absolute",
              left: 50,
            }}
          />
        </IconButton>
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
        <Box
          sx={{
            flexGrow: 1,
            margin: "0 auto",
            mt: 12,
            ml: 5,
            position: "absolute",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: "white", display: "block" }}
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
