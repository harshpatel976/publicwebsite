import React from "react";
import './Footer.css'
import insta from "./instagram.png"
import faceb from "./facebook-removebg-preview.png"
import x from "./x-removebg-preview.png"
import github from "./github-icon-512x497-oppthre2.png"
import youtube from "./youtube-removebg-preview.png"

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="footercontant">
      <div className="footer-section1 quicklink">
      <h2>Address</h2>
      <p>EpitomeCircuits, near RNSIT, Dr. Vishnuvardhana Road Post, RR Nagar, Bengaluru - 560098</p>
      <p>+91 9513800500</p>
      <p>admin@epitomecircuits.com</p>
      </div>
      <div className="footer-section2 quicklink">
        <h2>Quick link</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="courses">Courses</a>
          </li>
        </ul>
      </div>
      <div className="footer-section3 quicklink">
        <h2>Quick link</h2>
        <ul>
          <li>
            <a href="Placement">Placement</a>
          </li>
          <li>
            <a href="Online courses">Online coruses</a>
          </li>
          <li>
            <a href="Intenship">Intenship</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="line"></div>
    <div className="main11">
        <img src={insta} alt='instagram' className='socialicon'/>
        <img src={x} alt='x' className='socialicon'/>
        <img src={youtube} alt='youtube' className='socialicon youtube'/>
        <img src={faceb} alt='facebook' className='socialicon'/>
        <img src={github} alt='github' className='socialicon'/>
    </div>
    <div className="lastsection11">
      <p>Copyright © 2024, All Rights Reserved EpitomeCircuit</p>
    </div>
    </div>
   
    </>
  );
};

export default Footer;
