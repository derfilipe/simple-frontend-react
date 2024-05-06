import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import {Drawer} from "@mui/material";
import {styled, useTheme} from "@mui/material/styles";

export const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function SideBar() {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List>
          {['Inbox', 'Starred'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{display: 'block'}}>
                <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                >
                  <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                  >
                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
                </ListItemButton>
              </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {['All mail'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{display: 'block'}}>
                <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                >
                  <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                  >
                    {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
                </ListItemButton>
              </ListItem>
          ))}
        </List>
      </Drawer>
  );
}

export default SideBar;