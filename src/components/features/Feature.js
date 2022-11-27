import React from 'react'
import './Feature.css'
import { BsHexagon } from 'react-icons/bs'

const Feature = ({icon, heading, text}) => {
  return (
    <div className='feature'>
        <div className='feature-icon'>
            <BsHexagon color='chartreuse' size={55} />
            <div className='inner-icon'>
                {icon}
            </div>
        </div>
        <div className='feature-text'>
            <h3>{heading}</h3>
            <p className='u-text-small'>
            {text}
            </p>
        </div>
    </div>
  )
}

export default Feature;