import React from 'react'

const Box1 = (props) => {
  return (
    <div className='col-md-4'>
        <div className='card'>
        <h1>{ props.data.name}</h1>
        <p>{props.data.para}</p>
        <img src={props.data.src} />
        </div>
    </div>
  )
}

export default Box1