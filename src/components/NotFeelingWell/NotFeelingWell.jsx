import React, { useEffect, useState } from "react";
import "./NotFeelingWell.scss";
import { useMultistepForm } from "../../utils";
import { GeneralForm } from "../HelperComps/GeneralForm";
import { HeadForm } from "../HelperComps/HeadForm";
import { EyeForm } from "../HelperComps/EyeForm";
import "./NotFeelingWell.scss";
import { NoseForm } from "../HelperComps/NoseForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NotFeelingWell = ({ handleClose }) => {
  useEffect(() => {}, []);

  const INITIAL_DATA = {
    age: 0,
    fever: "no",
    decreased_energy: "no",
    loss_appetite: "no",
    weight_gain: "no",
    weight_loss: "no",
    headache: "no",
    head_injury: "no",
    visual_change: "no",
    crossed_eyes: "no",
    redness_eyes: "no",
    runny_nose: "no",
    nasal_congestion: "no",
    nose_bleed: "no",
    difficulty_hearing: "no",
    ear_pain: "no",
  };

  const [data, setData] = useState(INITIAL_DATA);
  const navigate = useNavigate();
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <GeneralForm {...data} updateFields={updateFields} />,
      <HeadForm {...data} updateFields={updateFields} />,
      <EyeForm {...data} updateFields={updateFields} />,
      <NoseForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    const profileData = JSON.parse(localStorage.getItem("user"));
    if (!profileData) {
      alert("Something went wront. Try signing in again.");
      navigate("/signin");
      return;
    }
    const {fullName,_id} = profileData
    const config = {
      method: "post",
      url: "https://care-system.herokuapp.com/api/unwell",
      headers: {},
      data: {...data, full_name:fullName, userId:_id},
    };
    if (!isLastStep) return next();
    axios(config)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
    navigate("/");
  }

  return (
    <div className="notFeelingWell">
      <div className="notFeelingWell__card">
        <h1 className="notFeelingWell__card--heading">
          Not Feeling Well?{" "}
          <div className="close" onClick={handleClose}>
            X
          </div>
        </h1>
        <div className="notFeelingWell__card--form">
          <div className="notFeelingWell__card--question">
            <h2>
              Please select all if applicable that you may be experiencing now.
            </h2>
            <form onSubmit={onSubmit}>
              {step}
              <div className="notFeelingWell__card--footer">
                <div>
                  {!isFirstStep && (
                    <button
                      className="notFeelingWell__card--back"
                      type="button"
                      onClick={back}
                    >
                      Back
                    </button>
                  )}
                  <button className="notFeelingWell__card--next" type="submit">
                    {isLastStep ? "Finish" : "Next"}
                  </button>
                </div>
                <div className="steps">
                  {currentStepIndex + 1} / {steps.length}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFeelingWell;
