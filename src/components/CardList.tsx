import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {Grid} from "@mui/material";
import {useQuery} from "@apollo/client";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import {MenuItem} from "../graphql/api/model/menuItem.ts";
import {GET_MENUS} from "../graphql/queries/menu.query.ts";


function CardList() {

  const {loading, error, data} = useQuery(GET_MENUS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
      <>
        {data?.menus.map((menu: MenuItem, index: number) => (
            <Grid item xs={8} key={index}> {/* Add the key prop here */}
              <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={
                      <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                        {menu.name}
                      </Avatar>
                    }
                    title={menu.description}
                />
                <CardContent>
                  {/* Your card content goes here */}
                </CardContent>
              </Card>
            </Grid>
        ))}
      </>
  );
}

export default CardList;