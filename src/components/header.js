import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ImageListItem, Box, Typography } from '@mui/material';
import icon from '../assets/images/logo1.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  { pagename: 'Home', pagelink: '/' },
  { pagename: 'About', pagelink: '/about' },
  { pagename: 'Contact', pagelink: '/contact' },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'teal', boxShadow: 'none', padding: '0.5rem 0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/">
            <ImageListItem sx={{ width: 120, height: 120, display: { xs: 'none', md: 'block' } }}>
              <img alt="Logo" src={icon} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </ImageListItem>
          </Link>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.pagename} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={page.pagelink}
                      style={{ textDecoration: 'none', color: 'black', fontWeight: 500 }}
                    >
                      {page.pagename}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
            {pages.map((page) => (
              <Button
                key={page.pagename}
                sx={{
                  color: 'white',
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                <Link
                  to={page.pagelink}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  {page.pagename}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Mobile Logo */}
          <ImageListItem sx={{ width: 80, height: 100, display: { xs: 'block', md: 'none' } }}>
            <img alt="Logo" src={icon} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </ImageListItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
