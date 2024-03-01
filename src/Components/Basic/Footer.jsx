import React from 'react'
import { IoIosSend } from "react-icons/io";
import { AiTwotoneHome } from "react-icons/ai";
import { FaHandHoldingHand } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <>
    <main className='main_footer'>
        <section className='FOOTER_FIRST'>
            <h2>Features</h2>
            <div className='flex'>
            <div className='f_box'> <div><IoIosSend /></div> <p>INNOVATION</p> </div>
            <div className='f_box'> <div><AiTwotoneHome /></div> <p>GYANSHANCHAY</p> </div>
            <div className='f_box'> <div><FaHandHoldingHand /></div> <p>...NSS...</p> </div>
            <div className='f_box'> <div><FaBookOpen /></div> <p>E-LIBRARY</p> </div> </div>
        </section>
        <section className='second_footer'>
        <ul className='second_footer1'> 
        <li className='second_footerli1'><img src={logo}/> <p>Chhatrapati Shahu Ji Maharaj University, Kanpur <br/>
         (Formerly Kanpur University, Kanpur)
         <br/>
         Kalyanpur, Kanpur-208024</p> </li>
        </ul> 
        <li>Contact : +911203643705 <br/>
E-mail: info@csjmu.ac.in / <br/> ssc@csjmu.ac.in</li>
<li className='media_box'>
  <div className='media'>  <a hred="https://www.facebook.com/csjmuknp"><FaFacebook /></a></div>
  <div className='media'>  <a hred="https://twitter.com/CSJM_University"><FaTwitter /></a></div>
  <div className='media'>  <a hred="https://www.youtube.com/channel/UCXmhWnOP5IPSR59bdSLglyA"><FaYoutube /></a></div>
  <div className='media'>  <a hred="https://www.facebook.com/csjmuknp"><IoIosPeople /></a></div>
  <div className='media'>  <a hred="https://www.facebook.com/csjmuknp"><FaLocationDot /></a></div>
</li>
        <ul className='second_footer2'><p>Terms & Policies
Logo Download
Copyrights
Hyperlinking Policy
Terms & Conditions
Privacy Policy
Disclaimer</p></ul>
        <ul className='second_footer3'> <p>Important Links
Raj Bhavan, Uttar Pradesh
Higher Education, Uttar Pradesh
Uttar Pradesh Higher Education Digital Library
HRD Minister
NCTE
NSS Registration
MGSL (NSS)
Tenders</p> </ul>
        </section>
    </main>
    </>
  )
}

export default Footer