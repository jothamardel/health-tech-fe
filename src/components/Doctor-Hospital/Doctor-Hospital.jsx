import React, { useState } from 'react';
import ActivePatients from '../ActivePatients/ActivePatients';
import "./Doctor-Hospital.scss"

const DoctorHospital = () => {
  const [section, setSection] = useState('active_patients');

  const showPage = {
    active_patients: <ActivePatients />,
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
            <li className={`${(section === 'active_patients') && 'selected'}`} onClick={() => setSection('active_patients')}>Active Patients</li>
            <li className={`${(section === 'past_patients') && 'selected'}`} onClick={() => setSection('past_patients')}>Past Patients</li>
            <li className={`${(section === 'log_patients') && 'selected'}`} onClick={() => setSection('log_patients')}>Log Patients</li>
            <li  className={`${(section === 'approvals') && 'selected'} list`}onClick={() => setSection('approvals')}>Approvals</li>
          </ul>
        </nav>
      </div>
      {showPage[section]}
    </div>
  )
}

export default DoctorHospital