import React from 'react'
import { Link } from 'react-router-dom'
import "./Main.scss"

const Main = () => {
  return (
    <div className="main-container">
      <div className="">
        <button>
          <Link to="/not-feeling-well">I'm not feeling well!</Link>
        </button>
      </div>
    </div>
  );
}

export default Main