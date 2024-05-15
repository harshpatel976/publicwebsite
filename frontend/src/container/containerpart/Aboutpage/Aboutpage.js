import React from 'react'
import './Aboutpaage.css'
import about from './About.json'

const Aboutpage = () => {
  return (
    <div>
    <div className="About">
    <h1 className="Abouttitle">About Us </h1>
    <div className="Aboutbox">
    {about.map((about, i) => (
      <div key={i} className='aboutcontainer' >
     <div className='aboutimagecon'>
      <img src={about.img} alt="" className='aboutimage' /></div>
      <div className='abouttextcon'>
      <h1 className="abouttitlelist">{about.title}</h1>
        <ul className="Abouttable">
          <li key={i} className="slider">
            {about.description1}
          </li>
          <li key={i}>{about.description2}</li>
          <li key={i}>{about.description3}</li>
        </ul></div>
      </div>
    ))}
  </div></div>
    </div>
  )
}

export default Aboutpage
