import React from 'react'
import './Content.css'

function Content(props) {
  return (
    <div className='content'>
      <img src={props.url} />
            <div className='contentDetails'>
              <h1>{props.heading}</h1>
              <p>{props.para} </p>
            </div>
            <div className='contentDetails1'>
            <h5>{props.stock}</h5>
            <h4>{props.price}</h4>
            <h5>{props.total}</h5>
            </div>
    </div>
  )
}

export default Content
