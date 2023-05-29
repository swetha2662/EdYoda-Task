import React, { useState } from "react";
import "./Mainpage.css";
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';

const Mainpage = () => {
  return (
    <div className="headingcls" >
      Access accurated courses worth<br/>
      ₹ <span className="strike">18,500 </span>at just <span className="highlight">₹ 99</span> per year!
      <br/><br/>
      <div className="context">
        <ul>
        <li><img src={img1}/> <span className="highlight">100+</span> Job relevant courses </li>
        <li><img src={img2}/><span className="highlight"> 20,000</span> Hours of content</li>
        <li><img src={img3}/><span className="highlight">Exclusive</span> webinar access</li>
        <li><img src={img4}/>Scholarship worth <span className="highlight">₹94,500 </span> </li>
        <li><img src={img5}/><span className="highlight"> Ad Free</span>  learning experience</li>
        </ul>
      </div>
    </div>
   
  );
};

export default Mainpage;
