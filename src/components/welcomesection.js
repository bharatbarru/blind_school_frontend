import { Container, Typography } from '@mui/material';
import React from 'react';

function Welcomesection() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
        padding: '20px'
      }}
    >
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h3" sx={{ marginBottom: '10px' }}>
          Welcome to our Blind School!
        </Typography>
        <Typography>
          Where strength meets learning and every dream finds its way
        </Typography>
      </Container>
    </div>
  );
}

export default Welcomesection;
