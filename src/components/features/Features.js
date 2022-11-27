import React from 'react'
import './Features.css'
import { AiFillSlackCircle } from 'react-icons/ai'
import phoneFeatures from '../../assets/phone-features.png'
import Feature from './Feature'
import { featureList } from './data.js'

const Features = () => {
  return (
    <section id='features' >
      <div className='container features'>
        <div className='title'>
          <AiFillSlackCircle color='chartreuse' size={40} />
            <h2>App Features</h2>
            <p className='u-text-small u-text-dark'>
              Mypay App is Protected By Our Technical & Ethical Security Procedures.It is an Independent Payment System With Absolutely No Other Influence.
            </p>
        </div>
        <div className='features-content'>
          <div className='features-left'>
            <img src={phoneFeatures} alt= 'phone'/>
          </div>
          <div className='features-right'>
            {
              featureList.map((feature) => (
                <Feature key={feature.js} icon={feature.icon} heading={feature.heading} text={feature.text}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features