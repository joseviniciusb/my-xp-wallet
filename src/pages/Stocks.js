import ActionsTable from "../components/ActionsTable";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { useHistory } from "react-router-dom";

import { Box } from "@mui/material";

const Stocks = () => {
  const history = useHistory();

  const navigateTo = (page) => {
    history.push(`/${page}`);
  };

  const disponiveis = [
    { name: "BBDC4", quantidade: 159, preço: 6.0 },
    { name: "BRAP4", quantidade: 237, preço: 9.0 },
    { name: "BBAS3", quantidade: 262, preço: 16.0 },
    { name: "BTC", quantidade: 305, preço: 3.7 },
  ];

  const adiquiridas = [
    { name: "BBDC4", quantidade: 159, preço: 6.0 },
    { name: "BRAP4", quantidade: 237, preço: 9.0 },
    { name: "BTC", quantidade: 201, preço: 3.8 },
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
          }}
        >
          <ActionsTable
            renderVender={true}
            data={adiquiridas}
            onBuy={(data) => navigateTo(`checkout=${data.name}`)}
            onSell={(data) => navigateTo(`checkout=${data.name}`)}
          />
          <ActionsTable
            data={disponiveis}
            onBuy={(data) => navigateTo(`checkout=${data.name}`)}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Stocks;
