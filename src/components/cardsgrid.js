import React from 'react';
import { Grid, Typography, Box,Card,CardContent, Container } from '@mui/material';
import BookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SchoolIcon from '@mui/icons-material/School';

const BoxCard = ({ icon, title, description }) => (
  <Card sx={{ backgroundColor: '#a3d4d4', borderRadius: '8px', boxShadow: 'none', border: '1px solid black' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ mr: 2 }}>{icon}</Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const CardsGrid = () => {
  const cardsData = [
    {
      icon: <BookIcon fontSize="large" />,
      title: 'Schedule Work',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: <RestaurantIcon fontSize="large" />,
      title: 'Nutrition and Food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: <SportsSoccerIcon fontSize="large" />,
      title: 'Sports and Games',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: 'Homework Help',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
    }
  ];

  return (
    <>
      <Container>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <BoxCard icon={card.icon} title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </>
  );
};

export default CardsGrid;
