import * as React from "react";
import { useState, useEffect } from "react";
import "./Login.css";

import {
  Box,
  Button,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { useHistory } from "react-router-dom";

function Login() {
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailInfo, setEmailInfo] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
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

  function handleSubmit(event) {
    console.log("Email:", email, "Password: ", password);
    history.push('/wallet');
  }

  return (
    <>
      <Box
        sx={{
          height: 625,
          textAlign: "center",
        }}
        className="side-background"
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "white",
            textDecoration: "none",
          }}
        >
          Há 20 anos transformando o mercado financeiro para melhorar a vida das
          pessoas.
        </Typography>
      </Box>
      <Box className="loginFormsSide"></Box>
      <FormControl
        sx={{ width: "45ch", my: -15, mt: 13, ml: 18 }}
        
      >
        
        <Box
          component="img"
          sx={{
            height: 220,
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
          variant="contained"
          disabled={isDisable}
          type="submit"
          onClick={handleSubmit}
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
