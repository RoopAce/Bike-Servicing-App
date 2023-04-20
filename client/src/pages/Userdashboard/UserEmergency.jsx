import React from 'react';
import { Box, Button, Typography, Container, Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';
export default function UserEmergency() {
  return (
    <>
      <Helmet>
        <title> Emergency </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Emergency Breakdown
          </Typography>
        </Stack>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box
            className="serviceBack breakdown"
            data-id="2"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #e5e5e5',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 4,
              height: '20rem',
              ml: '2rem',

            }}
          >

            <img
              src="https://thirdwheel.com.np/assets/frontend/images/emergency-bd/4567_wheel.png"
              alt="Tire/Tube"
              className="img img-responsive"
              width="110"
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Tire / Tube
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Rs 500
            </Typography>
            <Button
              href="#"
              variant="contained"
              sx={{ mt: 2, borderRadius: '25px', px: 3, py: 1.5 }}
            >
              Get Service
            </Button>
          </Box>

          <Box
            className="serviceBack breakdown"
            data-id="3"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #e5e5e5',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 3,
              height: '20rem',
              ml: '4rem'
            }}
          >

            <img
              src="https://thirdwheel.com.np/assets/frontend/images/emergency-bd/8909_spark.png"
              alt="Battery"
              className="img img-responsive"
              width="110"
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Unable to Start
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Rs 800
            </Typography>
            <Button
              href="#"
              variant="contained"
              sx={{ mt: 2, borderRadius: '25px', px: 3, py: 1.5 }}
            >
              Get Service
            </Button>
          </Box>
          <Box
            className="serviceBack breakdown"
            data-id="3"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #e5e5e5',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 3,
              height: '20rem',
              ml: '4rem'
            }}
          >

            <img
              src="https://thirdwheel.com.np/assets/frontend/images/emergency-bd/4347_2417_wire.png"
              alt="Battery"
              className="img img-responsive"
              width="110"
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Clutch Wire Problem
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Rs 300
            </Typography>
            <Button
              href="#"
              variant="contained"
              sx={{ mt: 2, borderRadius: '25px', px: 3, py: 1.5 }}
            >
              Get Service
            </Button>

          </Box>
          <Box
            className="serviceBack breakdown"
            data-id="3"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #e5e5e5',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 3,
              height: '20rem',
              ml: '4rem'
            }}
          >

            <img
              src="https://thirdwheel.com.np/assets/frontend/images/emergency-bd/4191_link.png"
              alt="Battery"
              className="img img-responsive"
              width="110"
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Chain Problem
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Rs 560
            </Typography>
            <Button
              href="#"
              variant="contained"
              sx={{ mt: 2, borderRadius: '25px', px: 3, py: 1.5 }}
            >
              Get Service
            </Button>
          </Box>
          <Box
            className="serviceBack breakdown"
            data-id="3"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #e5e5e5',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 3,
              height: '20rem',
              ml: '4rem'
            }}
          >

            <img
              src="https://thirdwheel.com.np/assets/frontend/images/emergency-bd/3671_break.png"
              alt="Battery"
              className="img img-responsive"
              width="110"
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Break Fail / Lock
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Rs 200
            </Typography>
            <Button
              href="#"
              variant="contained"
              sx={{ mt: 2, borderRadius: '25px', px: 3, py: 1.5 }}
            >
              Get Service
            </Button>
          </Box>
          
          <Box
            className="serviceBack breakdown"
            data-id="3"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #e5e5e5',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              p: 3,
              height: '20rem',
              ml: '4rem'
            }}
          >

            <img
              src="https://thirdwheel.com.np/assets/frontend/images/emergency-bd/4856_light.png"
              alt="Battery"
              className="img img-responsive"
              width="110"
            />

            <Typography variant="h6" sx={{ mt: 2 }}>
              Electrical Issue
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Rs 500
            </Typography>
            <Button
              href="#"
              variant="contained"
              sx={{ mt: 2, borderRadius: '25px', px: 3, py: 1.5 }}
            >
              Get Service
            </Button>
          </Box>
          </Box>
          
        
        </Container>
      
</>
)
}

