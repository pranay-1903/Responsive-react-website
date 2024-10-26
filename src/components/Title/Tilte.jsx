import React from 'react'
import './Title.css'

const Tilte = (props) => {
  return (
    <div className='title'>
        <p>{props.sub}</p>
        <h2> {props.title} </h2>
      
    </div>
  )
}

export default Tilte
