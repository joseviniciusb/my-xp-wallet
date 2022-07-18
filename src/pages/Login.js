import * as React from "react";
import { useState, useEffect } from "react";
import "./Login.css";

import { Box, Button, FormControl, Link, TextField } from "@mui/material";

function Login() {
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInfo, setEmailInfo] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    {
      value.name === "email" ? setEmail(value) : setPassword(value);
    }
    console.log(value);
    /* if (event.target.name === "email") {
      setEmail(value);
    } else if (event.target.name === "password") {
      setPassword(value);
    } */
  };

  useEffect(() => {
    const validate = /^\S+@\S+\.\S+$/.test(email);
    setIsDisable(!(validate && password.length > 6));
  });

  const validateEmailInfo = () => {
    const validate = /^\S+@\S+\.\S+$/.test(email);
    setEmailInfo(!validate);
    console.log("email info:", emailInfo);
  };

  return (
    <>
      <Box
        sx={{
          height: 625,
        }}
        className="side-background"
      >
        {" "}
      </Box>
      <FormControl
        sx={{ width: "45ch", my: -15 }}
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
          helperText={emailInfo ? "O email não é válido" : ""}
          id="standard-basic"
          label="Email"
          variant="standard"
          onChange={handleChange}
          onBlur={validateEmailInfo}
          name="email"
          type="email"
        />

        <TextField
          type="password"
          label="Senha"
          variant="standard"
          onChange={handleChange}
          name="password"
          sx={{ my: 1 }}
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
            cursor: "pointer",
          }}
        >
          {" "}
          Esqueci a senha{" "}
        </Link>
        <Link
          underline="none"
          sx={{
            color: "black",
            fontSize: "1.0rem",
            cursor: "pointer",
            my: 2,
          }}
        >
          {" "}
          Ainda não sou cliente{" "}
        </Link>
      </FormControl>
    </>
  );
}

export default Login;
