import './App.css'
import Home from "./components/Home.tsx";
import {StyledEngineProvider} from "@mui/material";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {

  return (
      <>
        <QueryClientProvider client={queryClient}>
          <StyledEngineProvider injectFirst>
            <Home/>
          </StyledEngineProvider>
        </QueryClientProvider>
      </>
  )
}

export default App
