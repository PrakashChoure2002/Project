import React, { useState } from 'react'; 
import { Box, Select, MenuItem, Typography, Container, Button, Snackbar, Alert } from '@mui/material';
import Cards from "../FrontCards/Cards";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/confetti.css';
import AboutUs from './AboutUs';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(''); 
  const [date, setDate] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleExploreClick = () => {
    if (!selectedCity) {
      setSnackbarMessage('Please select a city before proceeding!');
      setSnackbarOpen(true); // Show Snackbar
    } else if (!date) {
      setSnackbarMessage('Please select a pickup date before proceeding!');
      setSnackbarOpen(true); // Show Snackbar
    } else {
      window.location.href = `/shoplist?city=${selectedCity}&date=${date.toISOString()}`;
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="https://video.rinse.com/assets/rebrand/video/landing_2023.mp4" type="video/mp4" />
        </video>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.4)', 
            zIndex: -1,
          }}
        />

        <Container sx={{ textAlign: 'left', ml: 8, mt: -10 }}>
          <Typography sx={{ fontWeight: 'bold', mb: 2, fontFamily: 'Poppins, sans-serif', fontSize: '80px' }}>
            The Smartest Way<br />to Do Laundry
          </Typography>
          <Typography sx={{ fontWeight: 'bold', mb: 4, fontFamily: 'Poppins, sans-serif', fontSize: '20px', letterSpacing: 0.9 }}>
            Rinse picks up, cleans, and delivers<br />your laundry and dry cleaning.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'left', gap: 2 }}>
            <Select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              displayEmpty 
              variant="outlined"
              sx={{
                bgcolor: '#fff',
                fontWeight: 700,
                width:210,
                fontFamily: 'Poppins, sans-serif',
                color: selectedCity ? 'black' : 'gray', 
                '& .MuiSelect-select': {
                  color: selectedCity ? 'black' : 'gray',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <MenuItem value="" disabled>
                Select your Location
              </MenuItem>
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
            </Select>

            <Flatpickr
              value={date}
              onChange={(selectedDates) => setDate(selectedDates[0])}
              placeholder='Pickup Date'
              options={{
                dateFormat: 'Y-m-d',
                allowInput: false,
              }}
              style={{ 
                backgroundColor: '#fff',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                color: date ? 'black' : 'gray', 
                padding: '10px',
                fontSize: '16px',
                width: '200px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            />

            <Button
              variant="outlined"
              onClick={handleExploreClick}
              sx={{
                backgroundColor: '#EF951A',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                border: '2px solid white',
                borderRadius: '50px',
                padding: '10px 20px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#D47F18', 
                  borderColor: 'white',
                },
              }}
            >
              Explore Laundries
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* <div id="about">
      <AboutUs/>
      </div> */}
      <div>
        <div className="flex items-center justify-center " >
          <h1 className="text-5xl font-bold text-orange-500 mt-10" style={{ fontFamily: 'Poppins, sans-serif'}}>OUR SERVICES</h1>
        </div>
        
        <div>
          <Cards />
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="warning" sx={{ fontFamily: 'Poppins, sans-serif' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
