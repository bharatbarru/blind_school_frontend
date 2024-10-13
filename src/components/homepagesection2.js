import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import { ReactTyped as Typed } from 'react-typed'; // Ensure correct import
import img1 from '../assets/images/img1.jpg'; // Adjust the image path

const Section2 = () => {
  return (
    <>
    <Container>
    <Grid container spacing={4} alignItems="center" sx={{ minHeight: '70vh', padding: '20px' }}>
      {/* Image on the left */}
      <Grid item xs={12} md={6}>
        <Box
          component="div"
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={img1} // Image source
            alt="Description"
            sx={{
              width: '80%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Box>
      </Grid>

      {/* Typed Text on the right */}
      <Grid item xs={12} md={6}>
        <Box sx={{ textAlign: 'left', padding: '20px' }}>
        <Typography variant="h3" gutterBottom>
  <Typed
    strings={[
      'Shaping their <span style="color:teal;">Life</span>',
      'Shaping their <span style="color:teal;">Minds</span>',
      'Shaping their <span style="color:teal;">Pathways</span>',
    ]}
    typeSpeed={65}
    backSpeed={50}
    loop
  />
</Typography>

          <Typography variant="body1" color="textSecondary" sx={{ marginTop: '20px' }}>
  Empowering blind girls with education, care, and the skills they need to thrive. Our school fosters independence, creativity, and confidence, ensuring a brighter future for every student.
</Typography>

        </Box>
      </Grid>
    </Grid>
    </Container>
    </>
  );
};

export default Section2;
