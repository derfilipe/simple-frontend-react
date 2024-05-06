import {Grid} from "@mui/material";
import useCharacters from "../hooks/useCharacters.tsx";

function TestComponent() {
  const {data, isLoading, isError} = useCharacters();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
      <>
        <div>
          <h1>R</h1>
          <ul>
            {data?.characters.results.map((character) => (
                <li key={character.name}>{character.name}</li>
            ))}
          </ul>
        </div>
        {/* Your existing card components */}
        <Grid container spacing={3}>
          {/* ... */}
        </Grid>
      </>
  );
}

export default TestComponent;