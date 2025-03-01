import React from 'react'
import "./Contribute.css"
import { useNavigate } from 'react-router-dom'


const Contribute = () => {
  const navigate = useNavigate();
  return (
    <div className='contribute'>
        <h1 className='heading_c'>Click below to add data</h1>
        <button className='btn_c1' onClick={() => navigate("/Adddata")}>Add Data</button>
        <div className='request'>
        <h1 className='heading_c1'>Request Data for your need here</h1>
        <button className='btn_c1'  onClick={() => navigate("/Request")} >Request</button>
        </div>
    </div>
  )
}

export default Contribute;