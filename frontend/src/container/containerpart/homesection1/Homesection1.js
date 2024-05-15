import React from 'react'
import './Homesection1.css'
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import p4 from './p4.png'

const Homesection1 = () => {
  return (
    <div className='homesection1'>
    <div className='homesecpart1'>
    
      <div className='boxsec1'>
        <div className='imgbox1' >
        <img src={p1} alt="" className='imgbox12' />
      </div>
      <h1 className='sec1title'>SEMICONDUCTOR EXPERTS</h1>
      <p>Mentors with over a Decade of Semiconductor Expertise in Analog, ASICs and Memory Design. </p>
      </div>
      <div className='boxsec1'>
      <div className='imgbox1'>
      <img src={p2} alt="" className='imgbox12'/>
      </div>
      <h1  className='sec1title'>QUALITY EDUCATION</h1>
      <p>Curriculum with right blend of Theory, Labs and Current Industry Trends.</p>
      </div>
      <div className='boxsec1'>
      <div className='imgbox1'>
      <img src={p3} alt="" className='imgbox12'/>
      </div>
      <h1  className='sec1title'>COMPREHENSIVE
      COUNSELLING</h1>
      <p>Course Certification, Internship and Placement Assistance.</p>
      </div>
      <div className='boxsec1'>
      <div className='imgbox1'>
      <img src={p4} alt="" className='imgbox12'/>
      </div>
      <h1  className='sec1title'>MODERATE FEES</h1>
      <p>Affordable and Student Friendly Fee Structure with Easy Instalments.</p>
      </div></div>
    </div>
  )
}

export default Homesection1
