import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Menu from "./Menu.tsx";
import MainCanvas from "./MainCanvas.tsx";

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'right',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function Home() {
  return (
      <Box sx={{display: 'flex'}}>
        <CssBaseline/>
        <Menu/>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <DrawerHeader/>
          <MainCanvas/>
        </Box>
      </Box>
  );
}

export default Home;