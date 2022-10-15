import React, { useState } from "react";
import NotFeelingWell from "../NotFeelingWell/NotFeelingWell";
import Medical from "../../assets/images/medical.png";
//
import "./Main.scss";

const Main = () => {
  const [notFeelingWell, setNotFeelingWell] = useState(false);
  function handleNotFeelingWell() {
    setNotFeelingWell(true);
  }
  function handleClose(){
    setNotFeelingWell(false)
  }
  return (
    <>
      <div className="main-container">
        <div className="">
          <img src={Medical} alt="medical" />
          <h1>Unify</h1>
          <p>get well, save the planet!</p>
          <button onClick={handleNotFeelingWell}>I'm not feeling well!</button>
        </div>
      </div>
      {notFeelingWell &&<span className="popup"> <NotFeelingWell handleClose={handleClose} /></span>}
    </>
  );
};

export default Main;
