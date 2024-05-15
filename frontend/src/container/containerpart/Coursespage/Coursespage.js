import React from "react";
import "./coursespage.css";
import Courses from "./Coursees.json";

const Coursespage = () => {
  return (
    
        <div className="courses">
          <h1 className="coursestitle">Courses Us </h1>
          <div className="coursesbox">
            {Courses.map((Courses, i) => (
              <div key={i} className="coursescontainer">
              <div className="coursesimage"><img src={Courses.img} alt="" className='aboutimage' /></div>
              <div className="coursestextcon">
                <h1 className="coursestitlelist">{Courses.title}</h1>
                <ul className="coursestable">
                <li key={i} className="courseslist">
                {Courses.Discription.d1}
              </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d2}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d3}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d4}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d5}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d6}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d7}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d8}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d9}
                  </li>
                  <li key={i} className="courseslist">
                    {Courses.Discription.d10}
                  </li>
                </ul>
              </div>
              </div>
            ))}
          </div>
        </div>
    
  );
};

export default Coursespage;
