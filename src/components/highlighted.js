import React from 'react';
import { Container, Typography, Button, Grid, Box, CardMedia, ImageListItem } from '@mui/material';
import icon from '../assets/images/logo1.png';
import icon1 from '../assets/images/Rectangle 32.png';
import icon2 from '../assets/images/img1.jpeg';

function HighlightedSection() {
  return (
    <Container 
      sx={{ 
        backgroundColor: '#B3D9D9', // Soft background color similar to the image
        borderRadius: '16px', 
        padding: '40px', 
        marginTop: '40px', 
        marginBottom : '40px'
      }}
    >
      <Grid container spacing={4} alignItems="center">
        
        {/* Left Section - Text and Logo */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <ImageListItem sx={{ width: 80, height: 80, marginRight: '16px' }}>
              <img alt="Logo" src={icon} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </ImageListItem>
            <Typography variant="h6" sx={{ color: 'black' }}>
              Govt. School for blind Girls
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '16px', color: '#222' }}>
            Where Learning Has No Limits
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '24px', color: '#555' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </Typography>
          <Button 
            variant="contained" 
            sx={{
              backgroundColor: 'teal', // Color adjusted for better contrast
              color: 'white',
              padding: '8px 16px',
              fontSize: '14px',
              '&:hover': {
                backgroundColor: 'black',
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
        
        {/* Right Section - Images */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', gap: '16px' }}>
          <CardMedia 
            component="img" 
            src={icon1} 
            sx={{ width: '50%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} 
          />
          <CardMedia 
            component="img" 
            src={icon2} 
            sx={{ width: '50%', borderRadius: '12px', objectFit: 'cover', height: '200px' }} 
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HighlightedSection;
