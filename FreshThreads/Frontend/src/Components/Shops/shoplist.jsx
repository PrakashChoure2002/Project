import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid2,
  Chip,
  Rating,
  Menu,
  MenuItem,
} from '@mui/material';

const laundriesData = [
  {
    name: "Filter Out",
    address: "90 DLF Park, Gurgaon",
    deliveryTime: "48 hours",
    services: ["Wash & Fold", "Dry Cleaning", "Iron Clothes"],
    rating: 4.7,
  },
  {
    name: "Quick Clean Laundry",
    address: "123 Main Street, Mumbai",
    deliveryTime: "24 hours",
    services: ["Wash & Fold", "Iron Clothes"],
    rating: 4.5,
  },
  {
    name: "Sparkle Wash",
    address: "45 Park Avenue, Mumbai",
    deliveryTime: "48 hours",
    services: ["Dry Cleaning", "Iron Clothes"],
    rating: 4.0,
  }
];

const badgeColors = {
  "Wash & Fold": "#d050c0", 
  "Dry Cleaning": "#673ab7",    
  "Iron Clothes": "#ff3377", 
};

const LaundriesPage = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city');
  const [filter, setFilter] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterSelect = (filterOption) => {
    setFilter(filterOption);
    setAnchorEl(null);
  };

  const handleRemoveFilter = () => {
    setFilter('');
  };

  const filteredData = filter
    ? laundriesData.filter((laundry) => laundry.services.includes(filter))
    : laundriesData;

    const navigate = useNavigate();
    
    const handleAddItemsClick = () => {
      navigate('/orders'); 
    };

  return (
    <Box sx={{ fontFamily: 'Poppins, sans-serif' }}>
      <Box
        sx={{
          height: '40vh',
          backgroundColor: '#1976d2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" sx={{ fontFamily: 'Poppins, sans-serif' }}>Services available in {city}</Typography>
      </Box>

      {/* Filter Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <Button
          variant="contained"
          onClick={handleFilterClick}
          sx={{
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#EC961A',
            ':hover': { backgroundColor: '#145da0' },
          }}
        >
          Filter Services
        </Button>
        {filter && (
          <Button
            variant="outlined"
            onClick={handleRemoveFilter}
            sx={{
              fontFamily: 'Poppins, sans-serif',
              borderColor: '#1976d2',
              color: '#1976d2',
              ':hover': { borderColor: '#145da0', backgroundColor: '#e3f2fd' },
            }}
          >
            Remove Filter
          </Button>
        )}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {["Wash & Fold", "Dry Cleaning", "Iron Clothes"].map((option) => (
            <MenuItem
              key={option}
              onClick={() => handleFilterSelect(option)}
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* List Section */}
      <Grid2 container spacing={4} sx={{ padding: 2 }}>
        {filteredData.map((laundry, index) => (
          <Grid2
            item
            xs={12}
            key={index}
            sx={{
              width: '100%',
              border: '1px solid #ddd',
              borderRadius: 2,
              padding: 3,
              backgroundColor: '#f9f9f9',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {/* Left Section */}
            <Box>
              {/* Laundry Name */}
              <Typography
                variant="h5"
                sx={{
                  color: '#1976d2',
                  fontWeight: 'bold',
                  marginBottom: 1,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {laundry.name}
              </Typography>
              {/* Laundry Address */}
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  marginBottom: 2,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {laundry.address}
              </Typography>
              {/* Estimated Delivery Time */}
              <Typography
                variant="body2"
                sx={{
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  marginBottom: 2,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Estimated Delivery Time:{' '}
                <span style={{ color: '#ff5722' }}>{laundry.deliveryTime}</span>
              </Typography>
              {/* Rating */}
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                </Typography>
                <Rating
                  name="read-only"
                  value={laundry.rating}
                  readOnly
                  precision={0.5}
                />
              </Box>
            </Box>
            {/* Right Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              {/* Services */}
              <Box sx={{ marginBottom: 2 }}>
                {laundry.services.map((service, idx) => (
                  <Chip
                    key={idx}
                    label={service}
                    sx={{
                      marginRight: 1,
                      marginBottom: 1,
                      fontWeight: 'bold',
                      backgroundColor: badgeColors[service] || '#e0e0e0',
                      color: '#fff',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  />
                ))}
              </Box>
              {/* Proceed Button */}
              <Button
                variant="contained"
                onClick={handleAddItemsClick} 
                sx={{
                  width: '200px',
                  height: '40px',
                  borderRadius: '20px',
                  marginRight: '20px',
                  marginBottom: '30px',
                  backgroundColor: '#4caf50',
                  ':hover': { backgroundColor: '#45a049' },
                }}
              >
                <Typography variant="h6" sx={{fontFamily: 'Poppins, sans-serif'}}>Add Items</Typography>
              </Button>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default LaundriesPage;
