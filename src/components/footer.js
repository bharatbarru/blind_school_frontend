import React from 'react';
import { Box, Container, Typography, Grid, Link, ImageListItem } from '@mui/material';
import { teal } from '@mui/material/colors';
import icon from '../assets/images/logo1.png';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#3B9991', 
        color: '#fff', 
        padding: '2rem 0',
        marginTop: '2rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} align="center">
            <ImageListItem sx={{ width: 150, height: 150, marginBottom: '1rem' }}>
              <img alt="School Logo" src={icon} />
            </ImageListItem>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              Empowering Girls Through Education and Support
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }} align="center">
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>
              <Link href="/home" underline="hover" sx={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>
                Home
              </Link>
              <Link href="/about" underline="hover" sx={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>
                About Us
              </Link>
              <Link href="/contact" underline="hover" sx={{ color: '#fff', fontSize: '1rem' }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }} align="center">
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '1rem', color: '#fff', textAlign: 'center' }}>
               <br />
              Opp Raddison Hotel Rushikonda <br />
              Phone: 6304758607 <br />
              Email: tabiabegum250119@gmail.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box sx={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid #fff', paddingTop: '1rem' }}>
          <Typography variant="body2" sx={{ color: '#fff' }}>
            © {new Date().getFullYear()} Blind School for Girls. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
