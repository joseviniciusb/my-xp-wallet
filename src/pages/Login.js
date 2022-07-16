import * as React from "react";
import "./Login.css";

import { Box, Button, FormControl, Link, TextField } from "@mui/material";

const validateLogin = () => {
  console.log("valida ai cara");
};

function Login() {
  return (
    <>
      <div className="side-background"> </div>
      <FormControl
        sx={{ width: "45ch", my: -8 }}
        className="formLoginContainer"
      >
        <Box
          component="img"
          sx={{
            height: 133,
            width: 250,
          }}
          alt="Xp investiments logo"
          src="https://conteudos.xpi.com.br/wp-content/uploads/2021/01/Logo-XP-Wide.png"
        />
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
          sx={{ my: 5 }}
          onClick={() => {
            alert("clicado");
          }}
          variant="contained"
        >
          Login
        </Button>
        <Link
        underline="none"
          sx={{
            color: "black",
            fontSize: "1.0rem",
          }}
        >
          {" "}
          Esqueci a senha{" "}
        </Link>
      </FormControl>
    </>
  );
}

export default Login;
