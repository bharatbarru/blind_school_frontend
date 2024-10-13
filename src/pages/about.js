import React from 'react';
import img from '../assets/images/R 1.png';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Divider, Button } from '@mui/material';

const About = () => {
  return (
    <div style={{ marginTop: '40px' }}>
    <Box sx={{ padding: 4, maxWidth: '1200px', margin:'auto',bgcolor: 'teal' }}>
      {/* Title */}
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ color: 'white' }}>
        About Us
      </Typography>
      <Divider sx={{ marginBottom: 4, bgcolor: 'white' }} />

      {/* Image and Main Section */}
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
            <CardMedia
              component="img"
              alt="Girl Studying"
              height="350"
              image={img}
              sx={{ objectFit: 'cover', borderRadius: 2 }}
            />
          </Card>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <CardContent sx={{ color: 'white' }}>
            <Typography variant="body1" paragraph>
              Our institution is dedicated to empowering visually impaired girls through holistic education and comprehensive support systems. We create an inclusive environment where students thrive academically, socially, and emotionally, preparing them for successful and independent futures.
            </Typography>
            <Typography variant="body1" paragraph>
              At the core of our mission is the belief that every student, regardless of their challenges, deserves access to quality education and opportunities for personal growth. Our curriculum is designed not only to teach academic subjects but also to instill critical life skills.
            </Typography>
            <Typography variant="body1" paragraph>
              Our goal is to transform the lives of visually impaired girls by fostering independence, building confidence, and nurturing their talents.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      {/* Core Values Section */}
      <Box sx={{ marginTop: 6, bgcolor: 'white', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'teal' }}>
          Our Core Values
        </Typography>
        <Divider sx={{ marginBottom: 2, bgcolor: 'teal' }} />
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'teal' }}>
              Inclusive Education
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              We believe in providing equal opportunities for all students. Our tailored curriculum ensures that every student can participate fully, regardless of visual impairment.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'teal' }}>
              Empowerment
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              We aim to empower our students to lead independent, fulfilling lives by teaching practical life skills and promoting self-confidence.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'teal' }}>
              Community Support
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              Our school fosters a sense of community, where students, teachers, and staff support each other and work together to achieve common goals.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Vision and Mission Section */}
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
          Our Vision and Mission
        </Typography>
        <Divider sx={{ marginBottom: 2, bgcolor: 'white' }} />
        
        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
          Our vision is a world where visually impaired girls are empowered to lead fulfilling and independent lives. We strive to create an environment where they can reach their full potential, academically and personally, and become contributors to society.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
          Our mission is to provide quality education, vocational training, and emotional support to our students, ensuring they have the tools they need to succeed in the modern world. We focus on developing each student's strengths and giving them the confidence to overcome any challenges.
        </Typography>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ marginTop: 6, bgcolor: 'white', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'teal' }}>
          Why Choose Us
        </Typography>
        <Divider sx={{ marginBottom: 2, bgcolor: 'teal' }} />
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'teal' }}>
              A Holistic Approach to Learning
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              Our curriculum blends traditional academic subjects with practical life skills, mobility training, and vocational opportunities to ensure each student is well-rounded and prepared for independent living.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h3" gutterBottom sx={{ color: 'teal' }}>
              Expert Staff and Supportive Environment
            </Typography>
            <Typography variant="body2" sx={{ color: 'black' }}>
              We are staffed by experienced educators and specialists who are passionate about helping visually impaired students succeed. Our community is built on trust, encouragement, and mutual respect.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ marginTop: 6, textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ color: 'white' }}>
          Join Us in Making a Difference
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
          Together, we can create a brighter future for visually impaired girls, equipping them with the skills, knowledge, and confidence to lead independent lives.
        </Typography>
        <Button variant="contained" sx={{ marginTop: 2, bgcolor: 'white', color: 'teal', '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' } }}>
          Get Involved
        </Button>
      </Box>
    </Box>
    </div>
  );
};

export default About;
