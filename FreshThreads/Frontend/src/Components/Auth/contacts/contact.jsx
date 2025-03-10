import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
//import "../style/s.css";
import "./contact.css";
import { grey } from '@mui/material/colors';

const profiles = [
  {
    name: "Pratyush M.",
    role: "Developer",
    Contact: "8874XXXXXX",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Payal G.",
    role: "Developer",
    Contact: "8805XXXXXX",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Aakarsh S.",
    role: "Developer",
    Contact: "9425XXXXXX",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Prakash C.",
    role: "Developer",
    Contact: "9826XXXXXX",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Rajnandini S.",
    role: "Developer",
    Contact: "9021XXXXXX",
    image: "https://via.placeholder.com/150",
  },
];

const ProfileSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100 ">

      <div className="card shadow-lg rounded-3 border-none p-4 " style={{ width: '100%', maxWidth: '1400px'}}> 
        
        <h2 className="text-center mb-4 " style={{color:'black'}}>Our Team</h2>
        <div className="row justify-content-center" style={{ backgroundColor:'#f8f9fa'}} >
          <div className="col-12  " >
            <Slider {...settings}>
              {profiles.map((profile, index) => (
               
                <div key={index} className="card-img-top px-5 mb-4 ">
                  <div className="card shadow-sm border-0 rounded-3 ">
                    <img
                      src={profile.image}
                      className="card-img-top"
                      alt={profile.name}
                      style={{ height: '150px', objectFit: 'cover' }} 
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title text-dark">{profile.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{profile.role}</h6>
                      <p className="card-text">{profile.Contact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSlider;
