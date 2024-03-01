import React from 'react'
import img1 from "../assets/i1.png"
import img2 from "../assets/12.png"
import img3 from "../assets/13.png"
import logo from "../assets/logo.png"
// import logo2 from "../assets/logon.jpg"
const Uni = () => {
  return (
    <main id='#university' className='uni_main'>
        <section className='uni_sec'>
          <h1>UNIVERSITY </h1>
            <ul className='university_list'>
                <li>
               <div className='box'>
               <div className='pic1'><img src={img1}/></div>
               <p>Located in one of the  Chhatrapati Shahu Ji Maharaj University stands as a hallmark of higher education</p>
               </div>
               </li>
               <li>
               <div className='box'>
               <div className='pic1'><img src={img2}/></div>
               <p>Located in one of  Chhatrapati Shahu Ji Maharaj University stands as a hallmark of higher education. </p>
               </div>
               </li>
               <li>
               <div className='box'>
               <div className='pic1'><img src={img3}/></div>
               <p>Located in one of  Chhatrapati Shahu Ji Maharaj University stands as a hallmark of higher education. </p>
               </div>
               </li>
            </ul>
            <section className='about_university'>
            <img src={logo}/>
            <p>Rising Sun : Spreading of Knowledge
            <br/>
Lotus Flower : Revolution in various spheres of knowledge
<br/>
Water : Depth of Knowledge
<br/>
“Aaroha Tamsoh Jyotiha” : (Rise from Darkness to light)
<br/>
The colors of various faculties are as follows:
<br/>
Agriculture : Yellow
<br/>
Arts : Blue
<br/>
Ayurvedi & Unani System : Red
<br/>
of Medicine
<br/>
Commerce : Green
<br/>
Education : Brown
<br/>
Homeopathic Medicine : Deep Chauklate
<br/>
Law : Basanti
<br/>
Medicine : Dark Blue
<br/>
Engineering & Technology : Orange
<br/>
Science : Light Pink
<br/>

University Flag
<br/>
Sky blue surface superimposed by the
<br/>
University Monogram in the center
<br/>
and the circles arranged in Semilumar shape below the monogram
<br/>
fitted in different colours representing various faculties</p>
            </section>
        </section>
    </main>
  )
}

export default Uni