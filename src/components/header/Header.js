import React from 'react'
import './Header.css'
import phoneHeader from '../../assets/phone-header-bg.png'
import "../UI/Button/Button.css";


const Header = () => {
  return (
    <section id='header'>
      <div className='container header'>
        <div className='header-left'>
          <h1>
            <span>NEW PAYMENT SYSTEM</span>
            <span>FIRST BLOCKCHAIN TECHNOLOGY</span>
            <span>CAN BE USED AT ANYTIME FOR MYANMAR PEOPLE</span>
          </h1>
          <p>This is Myanmar's First Blockchain Technology-Based Digital Currency , Proudly Produce By MyPay App Team , The First Product Of Mypay Digital Blockchain Company.</p>
          <div className="download">
              <img
                src={require("../../assets/App Store.png")}
                alt="appstore"
              />
              <img
                src={require("../../assets/Google Play.png")}
                alt="playstore"
              />
            </div>
          </div>
        <div className="header-right">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
    </section>
  )
}

export default Header