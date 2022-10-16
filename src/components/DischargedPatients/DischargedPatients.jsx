import "./DischargedPatients.scss";
import axios from "axios";
import { useState } from "react";


function DischargedPatients(props) {
  const { patients, httpGetAllUnWell } = props;
  const [search, setSearch] = useState("")

  function checkIfDoctorIsPermitted(arr = []) {
    if (!arr.length) {
      return "Request access"
    }
    const { _id } = JSON.parse(localStorage.getItem('user'));
    const newArr = [...arr];
    const findDoc = newArr.find(item => item.id === _id)

    if (!findDoc) {
      return "Request access"
    }

    if (findDoc && !findDoc.allowed) {
      return "Pending approval"
    }
    return findDoc.allowed;
  }

  async function httpRequestAccess(user) {
    const { _id, fullName } = JSON.parse(localStorage.getItem('user'));
    user.permissions.push({
      fullName,
      id: _id,
      allowed: false
    })
    try {
      const response = await axios.post(`${process.env.REACT_APP_UNIFY_API_URL}api/unwell`, user);
      console.log(response.data.message);
      httpGetAllUnWell();
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function filteredPatients(arr = []) {
    const newArr = [...arr];
    const filteredResult = newArr.filter(item => (item.full_name.toLowerCase().includes(search.toLowerCase()) && !item.discharged));

    return filteredResult;
  }

  async function httpDischargePatient(user) {
    user.discharged = true;
    try {
      const response = await axios.post(`${process.env.REACT_APP_UNIFY_API_URL}api/unwell`, user);
      console.log(response.data.data);
      httpGetAllUnWell()
    } catch (error) {
      console.log(error.response.data);
    }
  }


  return (
    <>
      <div className="active-patient-input">
        <input placeholder="search..." type="search" onChange={e => setSearch(e.target.value)}/>
      </div>
      <div className="active-patient-container">
        <div className="card">
          {
            filteredPatients(patients)?.map(item => (
            <div className="card-patient" key={item._id}>
              <h1>{item.full_name}</h1>
              <div>
                <p style={{ fontSize: '1rem'}}>Discharged</p>
                {/* <button onClick={() => httpRequestAccess(item)}>{checkIfDoctorIsPermitted(item.permissions)}</button>
                {
                  (checkIfDoctorIsPermitted() === true) &&
                  <>
                    <button>start diagnosis</button>
                    <button onClick={() => httpDischargePatient(item)}>discharge</button>
                  </>
                } */}
              </div>
            </div>
            ))
          }

          {
            !filteredPatients(patients).length &&
            <p style={{ textAlign: 'center', fontSize: '1rem'}}>No result found!</p>
          }

        </div>
      </div>
    </>
  )
}


export default DischargedPatients;