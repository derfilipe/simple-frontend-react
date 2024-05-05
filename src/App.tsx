import './App.css'
import Home from "./components/Home.tsx";
import {StyledEngineProvider} from "@mui/material";

function App() {

  return (
      <>
        <StyledEngineProvider injectFirst>
          <Home/>
        </StyledEngineProvider>
      </>
  )
}

export default App
