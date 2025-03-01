import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='home-container'>
      {/* Banner Image */}
      <img src='./banner.PNG' alt='banners' className='home-image' />

      {/* Data Category Cards */}
      <div className='homecard-container'>
        <div className='homecard'>
          <h2>Business Data</h2>
          <p>Get insights into various industries with high-quality business data.</p>
        </div>
        <div className='homecard'>
          <h2>Machine Learning Data</h2>
          <p>Access ML-ready datasets for training AI models efficiently.</p>
        </div>
        <div className='homecard'>
          <h2>Market Research Data</h2>
          <p>Explore detailed market trends and consumer insights.</p>
        </div>
        <div className='homecard'>
          <h2>Healthcare Data</h2>
          <p>Find critical datasets related to healthcare and medical research.</p>
        </div>
        <div className='homecard'>
          <h2>Financial Data</h2>
          <p>Analyze financial trends with curated datasets from the industry.</p>
        </div>
        <div className='homecard'>
          <h2>Geospatial Data</h2>
          <p>Utilize location-based datasets for mapping and analytics.</p>
        </div>
      </div>

      {/* More Info Section */}
      <div className='more-info-heading'>
        <h1>Here is More to Do</h1>
      </div>
      <div className='more-info'>
        <div className='info-cards'>
          <h2>Real-time Data</h2>
          <img src='./realtimedata.png' alt='realtimedata' className='info-cards-img1'/>
        </div>
        <div className='info-cards'>
          <h2>Authentic Sourcing of Data</h2>
        </div>
        <div className='info-cards'>
          <h2>Get Data for Anything from Anywhere</h2>
        </div>
      </div>

      {/* Footer */}
      <footer className='footer'>
        <div className='footer-content'>
          <p> </p>
          <div className='footer-links'>
            <a href='/about'>About Us</a>
            <a href='/contact'>Contact</a>
            <a href='/privacy'>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
