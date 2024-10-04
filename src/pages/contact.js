import React, { useState } from 'react';
import { Box, Container, TextField, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box sx={{ backgroundColor: '#f5f5f5', padding: '4rem 0' }}>
        <Container maxWidth="sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Paper elevation={6} sx={{ padding: '2rem' }}>
              <Typography
                variant="h4"
                component="h1"
                align="center"
                gutterBottom
                sx={{ fontWeight: 'bold', color: 'black' }}
              >
                Contact Us
              </Typography>

              <Typography variant="body1" align="center" paragraph>
                We'd love to hear from you! Please fill out the form below.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      label="Name"
                      variant="outlined"
                      fullWidth
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      type="email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="phone"
                      label="Phone No"
                      variant="outlined"
                      fullWidth
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      type="number"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      name="message"
                      label="Feedback"
                      variant="outlined"
                      fullWidth
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                      sx={{
                        padding: '0.75rem',
                        fontSize: '1rem',
                        backgroundColor: 'teal',
                        '&:hover': { backgroundColor: 'black' }
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </motion.div>
        </Container>

        {/* Google Map iframe */}
        <Box sx={{ marginTop: '4rem' }}>
          <Container maxWidth="md">
            <Typography variant="h5" align="center" gutterBottom>
              Find us
            </Typography>
            <Box
              sx={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                marginBottom: '2rem',
              }}
            >
                      <iframe
            title="school location"
            src="https://www.google.com/maps/embed?pb=!4v1728060731410!6m8!1m7!1sJ0LHsZd_cGYteFEis13grA!2m2!1d17.76936666304392!2d83.3692323184241!3f359.2296969289615!4f-11.268478384068558!5f0.7820865974627469"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

            </Box>
          </Container>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Contact;
