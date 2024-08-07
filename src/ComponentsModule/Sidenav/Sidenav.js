import React, { useState } from 'react'
import './sidenav.css'
import { NavLink } from 'react-router-dom'

function Sidenav() {

  const [Tabactive, setTabacitive] = useState('1')


  return (
    <div className='sidenav'>
       <div className="logosection">
       <div className='logo'><i className="bi bi-microsoft"></i></div>
        <NavLink to='/dashboard' className={`logo ${Tabactive === '1' ? 'acitvetab' : ''}`} onClick={()=>{setTabacitive('1')}}><i className="bi bi-house-fill"></i></NavLink>
        <div className={`logo ${Tabactive === '2' ? 'acitvetab' : ''}`} onClick={()=>{setTabacitive('2')}}><i className="bi bi-clipboard-data"></i></div>
        <div className={`logo ${Tabactive === '3' ? 'acitvetab' : ''}`} onClick={()=>{setTabacitive('3')}}><i className="bi bi-clipboard2-check"></i></div>
        <div className={`logo ${Tabactive === '4' ? 'acitvetab' : ''}`} onClick={()=>{setTabacitive('4')}}><i className="bi bi-wallet-fill"></i></div>
        <div className={`logo ${Tabactive === '5' ? 'acitvetab' : ''}`} onClick={()=>{setTabacitive('5')}}><i className="bi bi-bag-check-fill"></i></div>
       </div>
    </div>

    // <div className='sidenav'>
    //   <div className="logosection">
    //   <NavLink
    //     to="/data"
    //     className={({ isActive }) => (isActive ? 'logo acitvetab' : 'logo')}
    //   >
    //     <i className="bi bi-microsoft"></i>
    //   </NavLink>
    // <NavLink
    //     to="/"
    //     className={({ isActive }) => (isActive ? 'logo acitvetab' : 'logo')}
    //   >
    //     <i className="bi bi-house-fill"></i>
    //   </NavLink>
    //   <NavLink
    //     to="/dashboard"
    //     className={({ isActive }) => (isActive ? 'logo acitvetab' : 'logo')}
    //   >
    //     <i className="bi bi-clipboard-data"></i>
    //   </NavLink>
    //   <NavLink
    //     to="/home"
    //     className={({ isActive }) => (isActive ? 'logo acitvetab' : 'logo')}
    //   >
    //     <i className="bi bi-clipboard2-check"></i>
    //   </NavLink>
    //   <NavLink
    //     to="/home"
    //     className={({ isActive }) => (isActive ? 'logo acitvetab' : 'logo')}
    //   >
    //     <i className="bi bi-wallet-fill"></i>
    //   </NavLink>
    //   <NavLink
    //     to="/home"
    //     className={({ isActive }) => (isActive ? 'logo acitvetab' : 'logo')}
    //   >
    //     <i className="bi bi-bag-check-fill"></i>
    //   </NavLink>
    //   </div>
    //   </div>
    
  )
}

export default Sidenav