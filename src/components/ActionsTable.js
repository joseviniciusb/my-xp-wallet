import "../pages/Wallet.css";

import {
  Typography,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";

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

const ActionsTable = () => {
  return (
    <>
      <TableContainer
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.719)",
          height: 450,
          width: 650,
          overflow: "hidden",
          borderRadius: 8,
          margin: "0 auto",
          my: 10,
          boxShadow: 3,
        }}
      >
        <Table sx={{ maxWidth: 450, my: 5, mx: 10 }} size="medium">
          <TableHead>
            <Typography sx={{ color: "white", my: -3, fontWeight: 700 }}>
              Ações disponíveis
            </Typography>
            <TableRow>
              <TableCell>
                <Typography sx={{ color: "white" }}>Ação</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white" }}>Qtd </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white" }}>Valor </Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ color: "white" }}>Negociar </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ my: "100" }}>
                <TableCell component="th" scope="row">
                  <Typography sx={{ color: "white" }}> {row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: "white" }}>
                    {row.quantidade}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: "white" }}>{row.preço}</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: "white" }}>
                    {row.negociar}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ActionsTable;
