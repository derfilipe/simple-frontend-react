import CardList from "./CardList.tsx";
import {Grid} from "@mui/material";
import CreateMenu from "./CreateMenu.tsx";

function MainCanvas() {
  return (
      <Grid container spacing={3}>
        <CardList/>
        <Grid item xs={8}>
          <CreateMenu/>
        </Grid>
      </Grid>
  );
}

export default MainCanvas;