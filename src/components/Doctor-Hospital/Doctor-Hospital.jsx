import React, { useState } from 'react';
import "./Doctor-Hospital.scss"

const DoctorHospital = () => {
  const [section, setSection] = useState('active_patients');

  const showPage = {
    active_patients: null,
    past_patients: null,
    log_patients: null,
    approvals: null
  }


  return (
    <div className='doc-container'>
      <h2>Doctor/Hospital Dashboard</h2>
      <div className='d-dashboard'>
        <nav className='nav-tab'> 
          <ul>
            <li>Active Patients</li>
            <li>Past Patients</li>
            <li>Log Patients</li>
            <li className='list'>Approvals</li>
          </ul>
        </nav>
      </div>
      {showPage[section]}
    </div>
  )
}

export default DoctorHospital