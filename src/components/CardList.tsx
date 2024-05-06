import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Grid} from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const {expand, ...other} = props;
  return <IconButton {...other} />;
})(({theme, expand}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const card1 = {
  title: "Kiwi",
  imageUrl: "/static/images/kiwi.jpeg",
  info: "Add info here",
};

const card2 = {
  title: "Another Title",
  imageUrl: "/static/images/watermelon.jpeg",
  info: "Another Info",
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
                        KR
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
                    {card.info}
                  </Typography>
                </CardContent>
                {/*<CardActions disableSpacing>*/}
                {/*  <ExpandMore*/}
                {/*      expand={expanded}*/}
                {/*      onClick={handleExpandClick}*/}
                {/*      aria-expanded={expanded}*/}
                {/*      aria-label="show more"*/}
                {/*  >*/}
                {/*    <ExpandMoreIcon/>*/}
                {/*  </ExpandMore>*/}
                {/*</CardActions>*/}
                {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
                {/*  <CardContent>*/}
                {/*    <Typography paragraph>Method:</Typography>*/}
                {/*  </CardContent>*/}
                {/*</Collapse>*/}
              </Card>
            </Grid>
        ))}
      </Grid>
  );
}