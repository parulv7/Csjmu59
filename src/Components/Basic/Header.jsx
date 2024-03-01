import React from 'react'
import logo from "../assets/logo.png"
import logo2 from "../assets/logon.jpg"
const Header = () => {
  return (
  <>
  <main className='csjmuhead'>
    <ul className='logos_csjmu'>
                <li className='csjmu_logo'><img className='logo2' src={logo} alt="logo"/></li>
                <li className='csjmu_headname'><h1>CHATRAPATI SHAHUJI MAHARAJ UNIVERSITY KANPUR, UTTAR PRADESH </h1></li>
                <li className='csjmu_logo'><img className='logo2' src={logo2} alt="logo"/></li>
         </ul>
        </main>
  </>
  )
}

export default Header