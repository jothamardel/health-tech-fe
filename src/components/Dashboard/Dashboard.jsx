import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const isPatient = false;


  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    setUser(JSON.parse(userDetails));
  }, [])

  return (
    <>
      {!isPatient && (
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
