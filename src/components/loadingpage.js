// LoadingPage.jsx
import React from 'react';
import { Container, Box } from '@mui/material'
import giphy from '../assets/images/giphy.gif';

const LoadingPage = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <Box>
        <img src={giphy} alt="Loading..." style={{ width: '300px', height: 'auto' }} />
      </Box>
    </Container>
  );
};

export default LoadingPage;
