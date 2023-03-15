import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NavBar = ({style}) => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleClick = (link) => {
        setActiveLink(link);
    };

  return (
    <nav className={style}>
        <ul>
            <li>
                <Link to="/login" className='anclaOne' style={{backgroundColor: activeLink === '/login' ? '#f07000' : 'white', color: 'black', border:'1px solid #f07000'}} onClick={() => handleClick('/login')} >
                    Login
                </Link>
            </li>
            <li>
                <Link to="/register" className='anclaTwo' style={{backgroundColor: activeLink === '/register' ? '#f07000': 'white', color: 'black'}} onClick={() => handleClick('/register')} >
                    Register
                </Link>
            </li>
        </ul>
    </nav>
  )
}