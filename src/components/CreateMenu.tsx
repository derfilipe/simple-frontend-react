import {Button} from "@mui/material";
import {useMutation} from "@apollo/client";
import {useState} from "react";
import {CREATE_MENU} from "../graphql/queries/menu.create.ts";
import {GET_MENUS} from "../graphql/queries/menu.query.ts";

function CardMenu() {

  const [createMenu] = useMutation(CREATE_MENU);

  // State for new menu data
  const [newMenuData] = useState({
    name: "My Menu sdfdsfsdg",
    description: "my description",
    price: 10.99
  });

  // Function to handle create menu action
  const handleCreateMenu = async () => {
    try {
      await createMenu({
        variables: {
          createMenuData: newMenuData
        },
        refetchQueries: [{query: GET_MENUS}]
      });
    } catch (error) {
      console.error("Error creating menu:", error);
    }
  };

  return (
      <Button variant="contained" onClick={handleCreateMenu}>Create Menu</Button>
  );
}

export default CardMenu;