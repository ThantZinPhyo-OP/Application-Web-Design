import React from 'react'
import Global from "../../assets/Huge_Global.png";
import './Service.css'
import { AiOutlineTeam } from 'react-icons/ai'


const Service = () => {
  return (
    <section id='service' >
      <div className="container service">
        <div className='title'>
        <AiOutlineTeam color='chartreuse' size={40} />
          <h2>OUR AGENTS</h2>
          <p className='u-text-small u-text-dark'>
          In order to access the services, you must activate through an agent, and international agents will be announced soon.
          </p>
        </div>
        <div className='service-content'>
          <div className='service'>
            <img src={Global} alt={"Global"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service