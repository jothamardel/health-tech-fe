import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
import Button from "../Button/Button";
import Requests from "../Requests/Requests";
import NotFeelingWell from "../NotFeelingWell/NotFeelingWell";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [section, setSection] = useState('home');
  const isPatient = false;

  const showPage = {
    home: <Button onClick={handleNotFeelingWell}  />,
    past_patients: null,
    log_patients: null,
    approvals: <Requests/>
  }


  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if(!userDetails){
      return;
    }
    setUser(JSON.parse(userDetails));
  }, []);

const [notFeelingWell, setNotFeelingWell] = useState(false);
function handleNotFeelingWell() {
  setNotFeelingWell(true);
}
function handleClose() {
  setNotFeelingWell(false);
}
  if (user && user.is_active) {
    return (
      <>
        <div className="doc-container">
          <h2>Patient Dashboard</h2>
          <div className="d-dashboard">
            <nav className="nav-tab">
              <ul>
                <li
                  className={`${section === "home" && "selected"}`}
                  onClick={() => setSection("home")}
                >
                  Home
                </li>
                <li
                  className={`${section === "past_patients" && "selected"}`}
                  onClick={() => setSection("past_patients")}
                >
                  Hospitals
                </li>
                <li
                  className={`${section === "log_patients" && "selected"}`}
                  onClick={() => setSection("log_patients")}
                >
                  Doctors
                </li>
                <li
                  className={`${section === "approvals" && "selected"} list`}
                  onClick={() => setSection("approvals")}
                >
                  Approvals
                </li>
              </ul>
            </nav>
          </div>
          {showPage[section]}
        </div>
        {notFeelingWell && (
          <span className="popup">
            <NotFeelingWell handleClose={handleClose} />
          </span>
        )}
      </>
    );
  }

  return (
    <>
      {!user?.is_active && (
        <div className="dashboard-modal">
          <div className="modal">
            <div className="modal__card">
              <h2>Hi {user && user?.fullName}, we found that you haven't created a profile yet.</h2>
              <p>Let's make one by clicking the button below.</p>
              <button>
                <Link to="/profile">Create Profile</Link>
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Dashboard;
