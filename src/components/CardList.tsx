import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Grid} from "@mui/material";
import TestComponent from "./TestComponent.tsx";
import useMenu from "../hooks/useMenu.tsx";


function CardList() {

  const {data, isLoading, isError} = useMenu();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
      <>
        <TestComponent/>
        <Grid container spacing={3}>
          {data?.cards.results.map((card, index) => (
              <Grid item xs={8}>
                <Card key={index} sx={{maxWidth: 345}}>
                  <CardHeader
                      avatar={<Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        {card.initials}
                      </Avatar>}
                      action={<IconButton aria-label="settings">
                        <MoreVertIcon/>
                      </IconButton>}
                      title={card.title}/>
                  <CardMedia
                      component="img"
                      height="194"
                      image={card.imageUrl}
                      alt="Paella dish"/>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {card.info} - Price: {card.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          ))}
        </Grid>
      </>
  );
}

export default CardList;