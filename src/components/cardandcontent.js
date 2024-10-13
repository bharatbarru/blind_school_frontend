import React from 'react';
import { Container, Grid, CardContent, Typography, Button, CardMedia } from '@mui/material';
import r1 from '../assets/images/Rectangle 20.png';
import r2 from '../assets/images/Rectangle 21.png';
import r3 from '../assets/images/Rectangle 23.png'; 

// Sample card data
const cardData = [
  {
    image: r1, // Directly assign the imported image
    title: 'Exploring New Horizons',
    description: 'Traveling to new places opens up a world of possibilities and experiences...',
  },
  {
    image: r2, // Directly assign the imported image
    title: 'Exploring New Horizons',
    description: 'Traveling to new places opens up a world of possibilities and experiences...',
  },
  {
    image: r3, // Directly assign the imported image
    title: 'Exploring New Horizons',
    description: 'Traveling to new places opens up a world of possibilities and experiences...',
  },
];

function ContentCards() {
  return (
    <Container sx={{ marginTop: '40px' }}>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Alternate the image and text positions */}
            {index % 2 === 0 ? (
              <>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{ width: '50%', borderRadius: '16px', marginRight: '16px' }} // Adjust width and margin
                />
                <CardContent sx={{ flex: 1, padding: '16px', backgroundColor: '#F9F9F9', borderRadius: '16px' }}>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#222' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                    {card.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ backgroundColor: 'teal', '&:hover': { backgroundColor: 'black' } }}>
                    Learn More
                  </Button>
                </CardContent>
              </>
            ) : (
              <>
                <CardContent sx={{ flex: 1, padding: '16px', backgroundColor: '#F9F9F9', borderRadius: '16px' }}>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: '8px', color: '#222' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '16px' }}>
                    {card.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ backgroundColor: 'teal', '&:hover': { backgroundColor: 'black' } }}>
                    Learn More
                  </Button>
                </CardContent>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{ width: '50%', borderRadius: '16px', marginLeft: '16px' }} // Adjust width and margin
                />
              </>
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ContentCards;
