import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Requests.scss";

const Requests = () => {
  const { _id, fullName } = JSON.parse(localStorage.getItem("user"));
  const [fetchedData, setFetchedData] = useState(null);
  const [permissions, setPermissions] = useState([]);
  useEffect(() => {
    const config = {
      method: "get",
      url: `https://care-system.herokuapp.com/api/unwell/${_id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response)
        setFetchedData(response.data.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [_id]);

  function rejectRequest(doctor) {
    console.log(doctor)
    const newArr = [...permissions];
    const doc = newArr[0].permissions.filter(item => item.id !== doctor.id)
    newArr[0].permissions = doc;
    console.log(newArr);
    httpUpdatePatientPermissions(newArr[0]);
    // const config = {
    //   method: "post",
    //   url: `https://care-system.herokuapp.com/api/unwell`,
    //   headers: {},
    //   data: { ...fetchedData, permissions: [] },
    // };
    // axios(config)
    //   .then(function (res) {
    //     console.log(res);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  }
  function approveRequest(doctor) {
    console.log(doctor)
    const newArr = [...permissions];
    const doc = newArr[0].permissions.find(item => item.id === doctor.id)
    doc.allowed = true;
    console.log(newArr);
    httpUpdatePatientPermissions(newArr[0]);
    // const permissionsObj = [
    //   {
    //     fullName: fetchedData?.permissions[0]?.fullName,
    //     id: fetchedData?.permissions[0]?.id,
    //     allowed: true,
    //   },
    //   {
    //     fullName: "Tom",
    //     id: "634b5e7550c8f9ab6b4d66c8",
    //     allowed: true,
    //   },
    // ];
    // const config = {
    //   method: "post",
    //   url: `https://care-system.herokuapp.com/api/unwell/`,
    //   headers: {},
    //   data: { ...fetchedData, permissions: [...permissionsObj] },
    // };
    // axios(config)
    //   .then(function (res) {
    //     localStorage.setItem('user', JSON.stringify(res.data.data[0]))
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  }
 
  async function httpGetPatientPermissions() {
    const user =  JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const { _id } = user;
    try {
      const response = await axios.get(`${process.env.REACT_APP_UNIFY_API_URL}api/unwell/${_id}`);
      // console.log(response.data)
      setPermissions(response.data.data)
    } catch (error) {
      console.log(error.response.data);
    }
  }
  async function httpUpdatePatientPermissions(data) {
   
    try {
      const response = await axios.post(`${process.env.REACT_APP_UNIFY_API_URL}api/unwell`, data);
      httpGetPatientPermissions();
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    httpGetPatientPermissions();
  }, [])


  function getJustPermissions(arr = []) {
    const newArr = [...arr];
    const filteredPermissions = newArr.reduce((acc, arr) => {
      let value = acc.concat(arr.permissions)
      return value;
    }, [])
    return filteredPermissions;
  }
  

  return (
    
    <div className="requests">
      {
        getJustPermissions(permissions).map(item => (
          <div className="requests__card" key={item.id}>
            <h2 className="requests__card--heading">You have a request to approve.</h2>
            <p>Hi, {fullName}</p>
            <p>Doctor {item.fullName} is requesting get access to your medical history and profile.</p>
            <p>If you authorized this please click 'Approve'.</p>
            <p>If not please click on 'Reject'</p>
            <div className="requests__card--cta">
              <button className="approve" onClick={() => approveRequest(item)}>
                Approve
              </button>
              <button className="reject" onClick={() => rejectRequest(item)}>
                Reject
              </button>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Requests;
