import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import SearchComp from "./app-bar-components/SearchComp";
import RightButtons from "./app-bar-components/RightButtons";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LeftMenu from "./app-bar-components/LeftMenu";
import { MAIN_ROUTE } from "../../utils/consts";

////

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const homeRedirect = () => {
    navigate(MAIN_ROUTE);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <LeftMenu />
            <Typography
              onClick={homeRedirect}
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
            >
              SHIKALOV STORE
            </Typography>

            <SearchComp />

            <Box sx={{ flexGrow: 1 }} />

            <RightButtons />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
