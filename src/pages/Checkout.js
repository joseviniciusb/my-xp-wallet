import React, { useEffect, useState } from "react";

import { Box, Button, TextField, InputAdornment } from "@mui/material";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";

export default function Checkout() {
  const params = useParams();

  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    disponiveis.map((item) => {
      if (item.name == params?.id) {
        setCurrentItem(item);
      }
    });
  }, []);

  const disponiveis = [
    { name: "BBDC4", quantidade: 159, preço: 6.0 },
    { name: "BRAP4", quantidade: 237, preço: 9.0 },
    { name: "BBAS3", quantidade: 262, preço: 16.0 },
    { name: "BTC", quantidade: 305, preço: 3.7 },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 14, 0.9)",
        color: "rgba(0, 0, 14, 0.8)",
        height: "100vh",
        width: "100vw",
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
            ml: 5,
            mr: 5,
            borderRadius: 15,
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <table className="table">
            <h3 className="tableTittle">Comprar / Vender Ação: </h3>
            <tr className="rowHeader">
              <th className="checkoutTableHeader">Ação</th>
              <th className="checkoutTableHeader">Quantidade</th>
              <th className="checkoutTableHeader">Preço</th>
            </tr>
            <hr></hr>
            <tr className="rowHeader">
              <th className="checkoutTableHeader">{currentItem?.name}</th>
              <th className="checkoutTableHeader">{currentItem?.quantidade}</th>
              <th className="checkoutTableHeader">
                {currentItem?.preço}
              </th>
            </tr>
          </table>
          <form className="buttonsCheckoutContainer">
            <div className="BuyButtonContainer">
              <Button variant="contained">Comprar</Button>
              <TextField
                placeholder="R$"
                sx={{ mt: 3, input: { color: "white" } }}
                className="textField"
                InputLabelProps={{
                  style: { color: "white" },
                }}
                label="Informe o valor"
                type="number"
                variant="standard"
              ></TextField>
            </div>
            <div className="BuyButtonContainer">
              <Button variant="contained" color="success">
                Vender
              </Button>
              <TextField
                className="textFieldCheckout"
                placeholder="R$"
                sx={{ mt: 3, input: { color: "white" } }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                variant="standard"
                label="Informe o valor"
                type="number"
                color="success"
              ></TextField>
            </div>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
