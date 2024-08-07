import React from 'react'
import './submenu.css'
import Goal from '../../Assets/goal.png'
import Dish from '../../Assets/burger.svg'
import menu from '../../Assets/Travel-pict-dinner.svg'
function Submenu() {
    return (
        <div className='submenucontain'>
            <div className='subnav'><span className='navlogo'><span className="submenu1"><img src={Goal} alt="" width='34px' /></span> <span>Goals</span></span> <span className='redirectlogo'><i className="bi bi-chevron-right"></i>
            </span></div>
            <div className='subnav'><span className='navlogo'><span className="submenu2"><img src={Dish} alt="" width='44px' /></span><span>Popular Dishes</span></span><span className='redirectlogo'><i className="bi bi-chevron-right"></i>
            </span></div>
            <div className='subnav'><span className='navlogo'><span className="submenu3"><img src={menu} alt="" width='44px' /></span><span>Menus</span></span><span className='redirectlogo'><i className="bi bi-chevron-right"></i>
            </span></div>
        </div>
    )
}

export default Submenu