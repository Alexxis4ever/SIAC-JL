import React from 'react'

import { ImgUI } from '../../UI/ImgUI/ImgUI'
import imagePlate from '../../../Images/foodImg.png'

import { Link } from "react-router-dom";


export const Main = () => {
  return (
    <main className='mainHome'>
      <div className='containerText'>
        <h1 className='titleInfo'>We serve the test you love 😍</h1>
        <p className='information'>This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The term comes from the rench word meaning food.</p>
  
        <Link className='btnExplore' to="/login">
          Explore
        </Link>
      </div>
        
      <div className='containImage'>
        <ImgUI style='imgPlate'  routeImg={imagePlate}/>
        <nav>
          <ul>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Dishes</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Dessert</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Drinks</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Platter</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Snacks</a></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
