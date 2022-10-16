import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Requests.scss";

const Requests = () => {
  const { _id } = JSON.parse(localStorage.getItem("user"));
  const [fetchedData, setFetchedData] = useState(null);
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
  function rejectRequest() {
    const config = {
      method: "post",
      url: `https://care-system.herokuapp.com/api/unwell`,
      headers: {},
      data: { ...fetchedData, permissions: [] },
    };
    axios(config)
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function approveRequest() {
    const permissionsObj = [
      {
        fullName: fetchedData?.permissions[0]?.fullName,
        id: fetchedData?.permissions[0]?.id,
        allowed: true,
      },
      {
        fullName: "Tom",
        id: "634b5e7550c8f9ab6b4d66c8",
        allowed: true,
      },
    ];
    const config = {
      method: "post",
      url: `https://care-system.herokuapp.com/api/unwell/`,
      headers: {},
      data: { ...fetchedData, permissions: [...permissionsObj] },
    };
    axios(config)
      .then(function (res) {
        localStorage.setItem('user', JSON.stringify(res.data.data[0]))
      })
      .catch(function (err) {
        console.log(err);
      });
  }
 

  return (
    
    <div className="requests">
      {fetchedData ? (
        <div className="requests__card">
          <h2 className="requests__card--heading">
            
            {!fetchedData?.permissions[0]?.allowed ?
              `You have a request to approve.`:`You don't have any requets pending` }
          </h2>
          {!fetchedData?.permissions[0]?.allowed ? (
            <>
              <p>Hi, {fetchedData.permissions[0].fullName}</p>
              <p>
                Doctor {fetchedData?.permissions[1]?.fullName} is requesting get
                access to your medical history and profile.
              </p>
              <p>If you authorized this please click 'Approve'.</p>
              <p>If not please click on 'Reject'</p>
            </>
          ): (
            <>
              <p>Sorry, you dont have any requests pending.</p>
              <p>Please refresh and try again.</p>
            </>
          )}
          <div className="requests__card--cta">
            {fetchedData?.permissions[0]?.allowed && (
              <button className="approve">
                <Link to="/">Go to Home</Link>
              </button>
            )}
            {!fetchedData?.permissions[0]?.allowed && (
              <>
                <button className="approve" onClick={approveRequest}>
                  Approve
                </button>
                <button className="reject" onClick={rejectRequest}>
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      ): <p style={{fontSize:'2rem'}}>Loading</p>}
    </div>
  );
};

export default Requests;
