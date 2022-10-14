import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.scss";
const Dashboard = () => {
  const isPatient = false;
  return (
    <>
      {!isPatient && (
        <div className="dashboard-modal">
          <div className="modal">
            <div className="modal__card">
              <h2>We found that you haven't created a profile yet.</h2>
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
