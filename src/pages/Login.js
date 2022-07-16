import * as React from "react";
import "./Login.css";

import { Button, FormControl, TextField } from "@mui/material";

import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});

const validateLogin = () => {
  console.log("valida ai cara");
};
function Login() {
  return (
    <>
      <div className="side-background"><span sx={{color: 'primary.main'}}>Xp Investimentos</span></div>

      <FormControl sx={{ width: "45ch" }} className="formLoginContainer">
        <TextField
          helperText="Insira um email válido"
          type="email"
          id="standard-basic"
          label="Email"
          variant="standard"
          onChange={validateLogin}
        />

        <TextField type="password" label="Senha" variant="standard" />
        <Button
          sx={{ my: 5, borderColor: "black" }}
          onClick={() => {
            alert("clicado");
          }}
        >
          Login
        </Button>
      </FormControl>
    </>
  );
}

export default Login;
