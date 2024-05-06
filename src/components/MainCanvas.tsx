import Typography from '@mui/material/Typography';
import CardList from "./CardList.tsx";

function MainCanvas() {
  return (
      <>
        <Typography paragraph>
          <CardList/>
        </Typography>
      </>
  );
}

export default MainCanvas;