import { useEffect, useState } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

import { Box, Button, TextField } from "@mui/material";

const DepositWithdraw = () => {
  const [saldo, setSaldo] = useState(500);
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    const { value } = event.target;
  };



  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 14, 0.9)",
        color: "rgba(0, 0, 14, 0.8)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Box
          sx={{
            backgroundColor: "rgba(62, 62, 62, 0.3)",
            height: "480px",
            width: "1000px",
            borderRadius: 15,
            p: 2,
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <Box className="saldoContainer">
            <h3>Saldo disponivel:</h3>
            <h2>{`R$ ${saldo.toFixed(2)}`}</h2>
            {console.log("saldo:", saldo)}
            <div className="buttonsWithdrawDeposit">
              <Button variant="contained">Depositar</Button>
              <Button variant="contained">Sacar</Button>
            </div>
            <TextField
              variant="standard"
              label="Insira um valor"
              onChange={handleChange}
              sx={{
                mt: 3,
                input: { color: "white" },
                label: { color: "white" },
              }}
            ></TextField>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DepositWithdraw;
