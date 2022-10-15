import React, { useEffect, useState } from 'react';
import ActivePatients from '../ActivePatients/ActivePatients';
import "./Doctor-Hospital.scss"
import axios from 'axios';

const DoctorHospital = () => {
  const [section, setSection] = useState('active_patients');
  const [patients, setPatients] = useState([]);

  const showPage = {
    active_patients: <ActivePatients patients={patients} httpGetAllUnWell={httpGetAllUnWell}/>,
    past_patients: null,
    log_patients: null,
    approvals: null
  }

  async function httpGetAllUnWell() {
   
    try {
      const response = await axios.get(`${process.env.REACT_APP_UNIFY_API_URL}api/all-unwell`);
      setPatients(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    httpGetAllUnWell();
  }, [])


  return (
    <div className='doc-container'>
      <h2>Doctor/Hospital Dashboard</h2>
      <div className='d-dashboard'>
        <nav className='nav-tab'> 
          <ul>
            <li className={`${(section === 'active_patients') && 'selected'}`} onClick={() => setSection('active_patients')}>Active Patients</li>
            <li className={`${(section === 'past_patients') && 'selected'} list`} onClick={() => setSection('past_patients')}>Discharged Patients</li>
            {/* <li className={`${(section === 'log_patients') && 'selected'}`} onClick={() => setSection('log_patients')}>Log Patients</li> */}
            {/* <li  className={`${(section === 'approvals') && 'selected'} list`}onClick={() => setSection('approvals')}>Approvals</li> */}
          </ul>
        </nav>
      </div>
      {showPage[section]}
    </div>
  )
}

export default DoctorHospital