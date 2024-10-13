import React from 'react';
import { Container, Grid, CardContent, Typography, Button, CardMedia } from '@mui/material';
import r1 from '../assets/images/Rectangle 20.png';
import r2 from '../assets/images/Rectangle 21.png';
import r3 from '../assets/images/Rectangle 23.png'; 

// Sample card data
const cardData = [
  {
    image: r1, 
    title: 'Exploring New Horizons',
    description: 'Traveling to new places opens up a world of possibilities and experiences...',
  },
  {
    image: r2,
    title: 'Capturing Moments',
    description: 'Photographs preserve memories and offer us a way to share experiences with others...',
  },
  {
    image: r3,
    title: 'Diving into Adventure',
    description: 'Adventures are what make life exciting, allowing us to challenge our boundaries...',
  },
];

function ContentCards() {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>Exploring new Horizons</Typography>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid container item spacing={2} xs={12} key={index}>
            {/* Image on the left for even index, on the right for odd index */}
            {index % 2 === 0 ? (
              <>
                {/* Image on the left */}
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{ width: '100%', borderRadius: '16px' }}
                  />
                </Grid>
                {/* Text on the right */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <CardContent sx={{  padding: '24px', borderRadius: '16px' }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '16px', color: '#222' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                      {card.description}
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'teal', '&:hover': { backgroundColor: 'black' } }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Grid>
              </>
            ) : (
              <>
                {/* Text on the left */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <CardContent sx={{ padding: '24px', borderRadius: '16px' }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '16px', color: '#222' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                      {card.description}
                    </Typography>
                    <Button variant="contained" sx={{ backgroundColor: 'teal', '&:hover': { backgroundColor: 'black' } }}>
                      Learn More
                    </Button>
                  </CardContent>
                </Grid>
                {/* Image on the right */}
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                    sx={{ width: '100%', borderRadius: '16px' }}
                  />
                </Grid>
              </>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ContentCards;
