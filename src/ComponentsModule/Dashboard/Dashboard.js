import React from 'react'
import './dashboard.css'
import Orderssection from '../ordersection/Orderssection'
import Netprofile from '../Netprofilesection/Netprofile'
import Activity from '../Activitysection/Activity'
import Submenu from '../submenu/Submenu'
import Resentorders from '../Recentordersection/Resentorders'
import Feedback from '../customerfeedback/Feedback'
function Dashboard() {
  return (
    <div className='dashboardmain'>
      <h5 className='Dashboardhead'>Dashboard</h5>
      <div className="row mt-4">
        <div className="col-md"></div>
        <div className="col-md-7 comsection"><Orderssection/></div>
        <div className="col-md-4 comsection"><Netprofile/></div>
        <div className="col-md"></div>
      </div>


      <div className="row mt-4">
        <div className="col-md"></div>
        <div className="col-md-7 comsection"><Activity/></div>
        <div className="col-md-4 comsection"><Submenu/></div>
        <div className="col-md"></div>
      </div>


      <div className="row mt-4">
        <div className="col-md"></div>
        <div className="col-md-7 comsection"><Resentorders/></div>
        <div className="col-md-4 comsection"><Feedback/></div>
        <div className="col-md"></div>
      </div>

    </div>
  )
}

export default Dashboard