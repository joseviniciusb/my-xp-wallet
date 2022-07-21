import ActionsTable from "../components/ActionsTable";
import Header from "../components/Header";

import { Box } from "@mui/material";

const Actions = () => {
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
      <Box
        sx={{
          backgroundColor: "rgba(3, 3, 3, 0.79)",
          height: "80vh",
          width: "80vw",
          ml: 24,
          borderRadius: 15,
          p: 2,
        }}
      >
        <ActionsTable />
      </Box>
    </Box>
  );
};

export default Actions;
