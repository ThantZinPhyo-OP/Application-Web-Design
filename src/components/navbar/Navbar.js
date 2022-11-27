import React, {useState} from 'react'
import './Navbar.css'
import { SiAdguard } from 'react-icons/si'
import { RiMenu5Line } from 'react-icons/ri'
import { RiCloseLine } from 'react-icons/ri'
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  return (
    <nav className='container navbar'>
        <div className='logo'>
          <SiAdguard color='#fff' size={33}/>
          <p className='logo-text'>
            MY<span>Pay</span>
          </p>
        </div>
        <menu>
          <ul className='nav-links' id={showMenu ? 'nav-links-mobile' : 'nav-links-mobile-hide'}>
            <li><a href='#'>Home</a></li>
            <li><a href='#features'>Features</a></li>
            <li><a href='#service'>Agents</a></li>
            <li><a href='#faq'>FAQs</a></li>
            {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="nav-btn">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
        </ul>
        </menu>
        <div className='menu-icons' onClick={toggleMenu}>
          {
            showMenu ? <RiCloseLine color='#fff' size={30}/> : <RiMenu5Line color='#fff' size={27}/>
          }
        </div>
    </nav>
  )
}

export default Navbar