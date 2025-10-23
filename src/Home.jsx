import React from 'react'
import './Home.css'
import  home1 from '/home1.jpg'
import home4 from '/home4.gif'
import home2 from '/home2.jpg'
import home6 from '/home6.jpg'
import home3 from '/home3.jpg'
export default function DocHomepage() {
  return (
    <div className='home'>
 <h1 align="center">Medical Clinic</h1>
   
    <div className='image' align="center">
     
     <img className='home1'src={home1} width="35% " alt="" left />


</div>
  
      {/* <div className="top-left">
        <img src={home6} alt="Top Left" className="corner-img" />
      </div>

      <div className="top-right">
        <img src={home6} alt="Top Right" className="corner-img" />
      </div>

      <div className="bottom-left">
        <img src={home6} alt="Bottom Left" className="corner-img" />
      </div>

      <div className="bottom-right">
        <img src={home6} alt="Bottom Right" className="corner-img" />
      </div> */}
<img src={home6} alt="Top Left" className="corner-image top-left" />
<img src={home3} alt="Top Right" className="corner-image top-right" />
<img src={home2} alt="Bottom Left" className="corner-image bottom-left" />
<img src={home4} alt="Bottom Right" className="corner-image bottom-right" width="50%" />

    </div>

  
     
  );
}
