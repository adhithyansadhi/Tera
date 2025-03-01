import React from 'react';
import './Request.css'

const Request = () => {
  return (
    <div>
      <h1>Request Data</h1>
      <input type="text" placeholder="Request the type of data"  className='Request-input'/>
      <div>
      <h2>Way of Collecting Data</h2>
      <select className='custom-dropdown'>
        <option value="survey">Survey</option>
        <option value="web_scraping">Web Scraping</option>
        <option value="manual_entry">Manual Entry</option>
      </select>
      </div>
      

      <button className='Request-btn'>Submit</button>
    </div>
  );
};

export default Request;
