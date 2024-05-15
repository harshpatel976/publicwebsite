import React from 'react'
import "./contact.css";
import faq from "./faq.json";

const Contactpart = () => {
  return (
    
    <div className="faq">
    <div className="faq1">
      <div className="section1">
        <h1 className="title">Frequently Asked Question </h1>
        <div className="accordion1">
        {faq.map((faq, i) => (
          <div key={i} >
            <ul className="accordion">
              <li key={i} className="slider">
                <input type="radio" name="accordion" id={`accordion-${i}`} />
                <label htmlFor={`accordion-${i}`}>{faq.que}</label>
                <div className="content">
                  <p>{faq.ans}</p>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div></div>

      <div className="section2">
            

      <form >
      <h2 className="title">Contact Form</h2>
      <label htmlFor="name" >Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
       
      />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write something.."
        
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
      
      </div>
    </div></div>
   
  )
}

export default Contactpart
