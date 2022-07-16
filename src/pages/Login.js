import * as React from "react";
import { useState } from "react";
import "./Login.css";

import { Box, Button, FormControl, Link, TextField } from "@mui/material";

function Login() {
  const [isDisable, setIsDisable] = useState(true);
  const [email, password, setEmail, setPassword] = useState();

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  return (
    <>
      <Box className="side-background"> </Box>
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
          id="standard-basic"
          label="Email"
          variant="standard"
          onChange={handleChange}
        />

        <TextField
          type="password"
          label="Senha"
          variant="standard"
          onChange={handleChange}
        />
        <Button
          sx={{ my: 5 }}
          onClick={() => {
            alert("clicado");
          }}
          variant="contained"
          disabled={isDisable}
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
