import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ImageListItem } from '@mui/material';
import icon from '../assets/images/logo.png'
const pages = [
  { pagename: 'Home', pagelink: '/' },
  { pagename: 'About', pagelink: '/about' },
  { pagename: 'Contact', pagelink: '/contact' },
  { pagename: 'Events', pagelink: '/events' },
  { pagename: 'Clubs', pagelink: '/clubs' },
];


function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor:'white'}}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
              <ImageListItem sx={{ width: 75, height: 75 }}>
                <img alt="Remy Sharp" src={icon} />
              </ImageListItem>
              {pages.map((page) => (
                <Button key={page.pagename} sx={{ my: 4, color: 'black', display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Link
                    to={page.pagelink}
                    style={{ textDecoration: 'none', color: 'black' }}>
                    {page.pagename}
                  </Link>
                </Button>
              ))}    
          <Button variant="contained" color="primary">Call Us</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;