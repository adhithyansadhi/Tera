import React from 'react'
import "./Getdata.css"

const Getdata = () => {
  return (
    <div className='Getdata-container'>
        <h1 className='Getdata-heading'>
            Name of the Data
        </h1>
        <p className='Getdata-description'>
            this data contains all the elements of information regarding the ...... 
        </p>
        <div>
            <button className='Getdata-btn'>Download File

            </button>


        </div>

        <div className='Getdata-authenticity'>
            <p>Authenticity:60%</p>
            <p>Contributed by: user17771</p>
        </div>
    </div>
  )
}

export default Getdata