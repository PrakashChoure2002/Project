import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-light py-5">
      <div className="container-fluid">
      <div className="flex items-center justify-center " >
          <h1 className="text-5xl font-bold text-orange-500 mt-10" style={{ fontFamily: 'Poppins, sans-serif'}}>About us</h1>
        </div>
        <hr />
        <p className="text-center lead ">Simplifying Laundry, One Pickup at a Time</p>

        <div id="values-slider" className="carousel slide mt-5 mb-5" data-bs-ride="carousel" style={{ width: '80%', height: '400px', margin: '0 auto' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="text-center ">
                <h2>Our Mission</h2>
                <p className='text-justify mt-4' style={{ fontSize: 20}}>To revolutionize laundry management with seamless pickup, professional care, and timely delivery, ensuring every customer experiences convenience and quality. We aim to redefine how people think about laundry by integrating modern technology with customer-centric services. By offering accessible and reliable solutions, we empower individuals and families to save time, focus on what matters, and enjoy life without the hassle of laundry chores. Whether it's a busy professional, a growing family, or anyone in need of a hassle-free laundry experience, we are committed to providing a solution that fits their needs, making laundry a thing of the past. We envision a world where people can enjoy more time for the things they love, while leaving the laundry to us.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <h2>Customer First</h2>
                <p className='text-justify mt-4' style={{ fontSize: 20}}>We prioritize our customers by offering personalized services, transparent processes, and eco-friendly solutions tailored to their needs. Our team is dedicated to understanding your preferences and delivering a service that exceeds expectations. Whether it's special care instructions or timely updates, we strive to ensure every interaction leaves you satisfied and confident in our care for your garments. Whether it's a busy professional, a growing family, or anyone in need of a hassle-free laundry experience, we are committed to providing a solution that fits their needs, making laundry a thing of the past. We envision a world where people can enjoy more time for the things they love, while leaving the laundry to us.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <h2>Quality Assurance</h2>
                <p className='text-justify mt-4' style={{ fontSize: 20}}>Using advanced cleaning techniques and premium products, we ensure your clothes are treated with the utmost care and delivered in pristine condition. Our meticulous attention to detail guarantees that every item is handled professionally, from sorting to cleaning and final packaging. We are committed to maintaining the highest standards of hygiene, sustainability, and excellence in everything we do. Whether it's a busy professional, a growing family, or anyone in need of a hassle-free laundry experience, we are committed to providing a solution that fits their needs, making laundry a thing of the past. We envision a world where people can enjoy more time for the things they love, while leaving the laundry to us.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#values-slider" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#values-slider" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default AboutUs;
