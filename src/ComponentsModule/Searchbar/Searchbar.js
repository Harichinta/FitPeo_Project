import React, { useContext } from 'react'
import './searchbar.css'
import { DashboardContext } from '../../Contextapi/DashboardContext';

function Searchbar() {
  const { state, setState } = useContext(DashboardContext);

  const Shownavbar=()=>{
    setState(!state)
  }

  const serach =()=>{
    console.log("searching.......")
  }
  return (
    <div className='sidenavmain' >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
         <div className='d-block d-md-none menubutton' onClick={()=>Shownavbar()}><i className="bi bi-microsoft"></i></div>
         <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex w-25 position-relative serchform" >
              <span onClick={serach}  className="position-absolute top-50 translate-middle-y" id="basic-addon1">
                <i className="bi bi-search"></i>
              </span>
              <input className="inputsearch" style={{paddingLeft:"50px"}} type="search" placeholder="Search" aria-label="Search" />
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li><a href="mailto:harivenkateshjb12@gmail.com"><i className="bi bi-envelope"></i></a></li>
              <li><a href="#"><i className="bi bi-gear"></i></a></li>
              <li><a href="#"><i className="bi bi-bell-fill"></i></a></li>
              <li><a><i className="bi bi-person-fill"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Searchbar