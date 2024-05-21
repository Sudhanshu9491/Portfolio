import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Fixed.css';
import verticle from '../../assets/verticle.svg'

const Fixed = () => {
  return (
    <button title='Back To Home' className='btn'>
      <AnchorLink className='anchor-link' href='#home'>
        <img src={verticle} alt="verticle" />
      </AnchorLink>
    </button>
  )
}

export default Fixed