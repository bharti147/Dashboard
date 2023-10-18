import React from 'react'
import './Card.css'


function Card(props) {
  return (
    <div className='card'>
      <div className='box' style={{backgroundColor:props.color1}}>
         <h2 style={{color:props.color3}}>{props.icon}</h2>
       
      </div>
          <div className='card1'>
            <h3>{props.one}</h3>
            <h2>${props.two}k</h2>
            <p><span style={{color:props.color2}}>{props.three}%  </span> this month</p>
          </div>
    </div>
  )
}

export default Card
