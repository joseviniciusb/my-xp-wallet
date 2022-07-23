import ActionsTable from "../components/ActionsTable";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

import { Box } from "@mui/material";

const Stocks = () => {
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
            backgroundColor: "rgba(62, 62, 62, 0.9)",
            height: "80vh",
            width: "80vw",
            ml: 5,
            mr: 5,
            borderRadius: 15,
            p: 2,
            display: "flex",
          }}
        >
          <ActionsTable />
        </Box>
      </Box>
    </Box>
  );
};

export default Stocks;
