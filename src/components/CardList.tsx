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

const card1 = {
  initials: "KR",
  title: "Kiwi",
  imageUrl: "/static/images/kiwi.jpeg",
  info: "Add info here",
  price: 1.99,
};

const card2 = {
  initials: "KR",
  title: "Watermelon",
  imageUrl: "/static/images/watermelon.jpeg",
  info: "Another Info",
  price: 2.99,
};

const cards = [card1, card2];


export default function RecipeReviewCard() {

  return (
      <Grid container spacing={3}>
        {cards.map((card, index) => (
            <Grid item xs={8}>
              <Card key={index} sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={
                      <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        {card.initials}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon/>
                      </IconButton>
                    }
                    title={card.title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={card.imageUrl}
                    alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {card.info} - Price: {card.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        ))}
      </Grid>
  );
}