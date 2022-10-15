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
        setFetchedData(JSON.stringify(response.data));
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
        console.log("success");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  function approveRequest() {
    const permissionsObj=[{
        fullName: fetchedData?.data?.permissions[0]?.fullName,
        id: fetchedData?.data?.permissions[0]?.id,
        allowedToBe: true
    }]
    const config = {
      method: "post",
      url: `https://care-system.herokuapp.com/api/unwell/${_id}`,
      headers: {},
      data: { ...fetchedData, permissions: [...permissionsObj] },
    };
    axios(config)
      .then(function (res) {
        console.log("success");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div className="requests">
      <div className="requests__card">
        <h2 className="requests__card--heading">
          {!fetchedData?.data?.permissions[0]?.allowedToBe &&
            `You don't have any requets pending`}
          {fetchedData?.data?.permissions[0]?.allowedToBe &&
            `You have a request to approve.`}
        </h2>
        {fetchedData?.data?.permissions[0]?.allowedToBe && (
          <>
            <p>
              Doctor {fetchedData?.data?.permissions[0]?.fullName} is requesting get access to your medical history
              and profile.
            </p>
            <p>If you authorized this please click 'Approve'.</p>
            <p>If not please click on 'Reject'</p>
          </>
        )}
        {!fetchedData?.data?.permissions[0]?.allowedToBe && (
          <>
            <p>Sorry, you dont have any requests pending.</p>
            <p>Please refresh and try again.</p>
          </>
        )}
        <div className="requests__card--cta">
          {!fetchedData?.data?.permissions[0]?.allowedToBe && (
            <button className="approve">
              <Link to="/">Go to Home</Link>
            </button>
          )}
          {fetchedData?.data?.permissions[0]?.allowedToBe && (
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
    </div>
  );
};

export default Requests;
