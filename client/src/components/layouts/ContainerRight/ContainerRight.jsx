import React from 'react'
import { ImgUI } from '../../UI/ImgUI/ImgUI'

import imagePlate from '../../../Images/foodImg.png'
import { NavBarHome } from '../../UI/NavBarHome/NavBarHome'

export const ContainerRight = () => {
  return (
    <div className='containImage'>
        <ImgUI style='imgPlate'  routeImg={imagePlate} />
        <NavBarHome />
    </div>
  )
}
