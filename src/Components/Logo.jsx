import React from 'react'
import myImage from '../assets/maniyar.png'

function Logo({width='100px'}) {
  return (
    <img src={myImage} alt="Logo" width={width} className='cursor-pointer bg-black' />
  )
}

export default Logo