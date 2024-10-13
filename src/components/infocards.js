import { Card, CardContent, Typography, Grid, Container, Box } from '@mui/material';
import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const cards = [
  { title: 'Meet Our Staff', description: 'Learn more about our dedicated team.', icon: <PeopleIcon sx={{ fontSize: 60 }} />, link: '/staff' },
  { title: 'Achievements', description: 'Explore our accomplishments and milestones.', icon: <EmojiEventsIcon sx={{ fontSize: 60 }} />, link: '/achievements' },
  { title: 'Gallery', description: 'Take a look at memorable moments captured at our school.', icon: <PhotoCameraIcon sx={{ fontSize: 60 }} />, link: '/gallery' },
];

function InfoCards() {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <Container>
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '250px',         
                       backgroundColor: '#B3D9D9', 
                color: 'black',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                  backgroundColor: 'teal',
                  color: 'white',
                },
              }}
              onClick={() => handleClick(card.link)} // Redirect on click
            >
              <CardContent>
                <Box display="flex" justifyContent="center" alignItems="center" mb={2} sx={{ height: '60%' }}>
                  {card.icon}
                </Box>
                <Typography variant="h5" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default InfoCards;