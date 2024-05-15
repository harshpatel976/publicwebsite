import React from "react";
import "./Projectpage.css";
import Project from "./Project.json";

const Projectpage = () => {
  return (
   
        <div className="project">
          <h1 className="projecttitle"> Projects </h1>
          <div className="projectbox">
            {Project.map((Project, i) => (
              <div key={i} className="projectcontainer">
              <div className='aboutimagecon'>
                <img src={Project.img} alt="" className='aboutimage' /></div>
                <div className="projecttext">
                <h1 className="Pprojecttitlelist">{Project.title}</h1>
                <ul className="projectable">
                  <li key={i} className="list7">
                    {Project.Discription.d1}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d2}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d3}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d4}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d5}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d6}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d7}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d8}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d9}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d10}


                  </li>

                  <li key={i} className="list7">
                    {Project.Discription.d11}


                  </li>
                  <li key={i} className="list7">
                    {Project.Discription.d12}


                  </li>
                </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
     
  );
};

export default Projectpage;
