import React from 'react'

import { ImgUI } from '../../UI/ImgUI/ImgUI'
import imagePlate from '../../../Images/foodImg.png'

export const NavBarHome = () => {
  return (
    <nav>
        <ul>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Dishes</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Dessert</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Drinks</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Platter</a></li>
            <li className='lists'><a className='anchor' href=""><ImgUI style='imgPlateAnchor'  routeImg={imagePlate}/>Snacks</a></li>
        </ul>
    </nav>
  )
}
