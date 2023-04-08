import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Grid, Button, Container, Stack, Typography, MenuItem, Select } from '@mui/material';
import Iconify from '../../components/iconify';
import { TextField } from '@mui/material';

export default function UserService() {
  const BikeForm = () => {
    const [company, setCompany] = useState('');
    const [model, setModel] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [color, setColor] = useState('');
    const [picture, setPicture] = useState(null);
    const [service, setService] = useState('');

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };


    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
    };
  
    const handlePictureChange = (event) => {
      setPicture(event.target.files[0]);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column" maxWidth="md" sx={{ py: 5, backgroundColor: '#F0F0F0' }}>
          <Grid item>
            <TextField
              label="Bike Company"
              variant="outlined"
              fullWidth
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Model"
              variant="outlined"
              fullWidth
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Registration No."
              variant="outlined"
              fullWidth
              value={registrationNo}
              onChange={(e) => setRegistrationNo(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Color of bike"
              variant="outlined"
              fullWidth
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </Grid>
          <Grid item>
        <Select
          value={service}
          onChange={handleServiceChange}
          displayEmpty
          fullWidth
          variant="outlined"
        >
          <MenuItem value="" disabled>
            Select a service
          </MenuItem>
          <MenuItem value="Service A">Service A</MenuItem>
          <MenuItem value="Service B">Service B</MenuItem>
          <MenuItem value="Service C">Service C</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Typography variant="body1">Selected service: {service}</Typography>
      </Grid>
          <Grid item>
            <input
              accept="image/*"
              id="picture-upload"
              type="file"
              onChange={handlePictureChange}
            />
            <label htmlFor="picture-upload">
              <Button component="span" variant="contained">
                Upload picture
              </Button>
            </label>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <>
      <Helmet>
        <title>Customer</title>
      </Helmet>
      <Container maxWidth="md" sx={{ py: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bike Service
          </Typography>
          <Iconify icon="bicycle" fontSize="3rem" />
        </Stack>
        <BikeForm />
      </Container>
    </>
  );
}
  