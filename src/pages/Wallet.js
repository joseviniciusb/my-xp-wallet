import * as React from "react";
import Header from "../components/Header";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, quantidade, preço, negociar) {
  return { name, quantidade, preço, negociar };
}

const rows = [
  createData("BBDC4", 159, 6.0, "Comprar / Vender"),
  createData("BRAP4", 237, 9.0, "Comprar / Vender"),
  createData("BBAS3", 262, 16.0, "Comprar / Vender"),
  createData("BTC", 305, 3.7, "Comprar / Vender"),
  createData("Lalaland", 356, 16.0, "Comprar / Vender"),
];

const Wallet = () => {
  return (
    <>
      <Header />
      <TableContainer>
        <Table
          sx={{ minWidth: 650, maxWidth: 700, my: 10, mx: 35 }}
          size="medium"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Qtd</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Negociar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ my: "100" }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.quantidade}</TableCell>
                <TableCell>{row.preço}</TableCell>
                <TableCell>{row.negociar}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Wallet;
