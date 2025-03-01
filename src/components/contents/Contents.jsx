import React from 'react'
import "./Contents.css"
import { useNavigate } from "react-router-dom";


const dataItems = [
  {id:1,title:"Data 1",desc:"this is a sample data"},
  {id:2,title:"Data 2",desc:"this is a sample data"},
  {id:3,title:"Data 3",desc:"this is a sample data"},
  {id:4,title:"Data 4",desc:"this is a sample data"},
  {id:5,title:"Data 5",desc:"this is a sample data"}
];


const Contents = () => {
  const navigate = useNavigate();
  return (
    <div className='card-container'>
        {dataItems.map((item) => (
            <div key={item.id} className='card'>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button className='btn' onClick={() => navigate("/get")}>GET DATA</button>
        </div>
        )
        )}
    </div>
  
  )
}

export default Contents;