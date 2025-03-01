import React from 'react'
import "./Adddata.css"

const Adddata = () => {
  return (
    <div className='adddata-container'>
        <h1 className='adddata-heading'>Add Data here</h1>
        <input type='text' placeholder='Name of Data' className='adddata-input'></input>
        <input type='text' placeholder='Add Description' className='adddata-input1'></input>
        <button className='adddata-btn'>Upload</button>
        
    </div>
  )
}

export default Adddata