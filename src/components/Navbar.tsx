import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Category', 'Category 2'];
const settings = ['Cristiano Ronaldo', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
                width={108}
                height={13}
                src={'https://www.jacando.com/wp-content/uploads/2023/06/jacando_logo_Signatur_positiv.svg'}
                alt="logo"
            />
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: {xs: 'none', md: 'flex'},
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
            >
              Restaurant
            </Typography>

            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
              >
                <MenuIcon/>
              </IconButton>
              <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {xs: 'block', md: 'none'},
                  }}
              >
                {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: {xs: 'flex', md: 'none'},
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
            >
              Restaurant
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              {pages.map((page) => (
                  <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{my: 2, color: 'white', display: 'block'}}
                  >
                    {page}
                  </Button>
              ))}
            </Box>

            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                  <Avatar alt="Remy Sharp"
                          src={"data:image/jpeg;base64,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"}/>
                </IconButton>
              </Tooltip>
              <Menu
                  sx={{mt: '45px'}}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Navbar;