import { useEffect, useState } from "react";

import Header from "../components/Header";
import SideBar from "../components/SideBar";

import { Box, Button, TextField } from "@mui/material";

const DepositWithdraw = () => {
  const [saldo, setSaldo] = useState(100);
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    let { value } = event.target;
    setInputValue(value);
  };

  const handleSum = () => {
    setSaldo(parseInt(inputValue) + parseInt(saldo));
    console.log("somou:", saldo);
  };

  const handleSub = () => {
    setSaldo(parseFloat(inputValue) - parseFloat(saldo));
    console.log("subtraiu", saldo);
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
            <h2>{`R$ ${saldo}`}</h2>
            <div className="buttonsWithdrawDeposit">
              <Button
                onClick={() => handleSum()}
                sx={{ mr: 2, mt: 3 }}
                variant="contained"
                name="somar"
              >
                Depositar
              </Button>
              <Button
                onClick={() => handleSub()}
                sx={{ mr: 2, mt: 3 }}
                variant="contained"
                name="subtrair"
              >
                Sacar
              </Button>
            </div>
            <TextField
              variant="standard"
              label="Insira um valor"
              type="number"
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
