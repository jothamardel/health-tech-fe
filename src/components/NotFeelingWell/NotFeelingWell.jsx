import React, { useState } from "react";
import { useMultistepForm } from "../../utils";
import { GeneralForm } from "../HelperComps/GeneralForm";
import { AddressForm } from "../HelperComps/AddressForm";
import { UserForm } from "../HelperComps/UserForm";
import "./NotFeelingWell.scss";
import { HeadForm } from "../HelperComps/HeadForm";
import { EyeForm } from "../HelperComps/EyeForm";
// import { EarForm } from "../HelperComps/EarForm";
import "./NotFeelingWell.scss";
import { NoseForm } from "../HelperComps/NoseForm";
const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  fever: "",
  decreaseEnergy: "",
  lossAppetite: "",
  weightGain: "",
  weightLoss: "",
  headache: "",
  headInjury: "",
  visualChange: "",
  crossed: "",
  redness: "",
  runnyNose: "",
  nasalCongestion: "",
  noseBleed: "",
  diffHearing: "",
  earPain: "",
};
const NotFeelingWell = ({handleClose}) => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <GeneralForm {...data} updateFields={updateFields} />,
      <HeadForm {...data} updateFields={updateFields} />,
      <EyeForm {...data} updateFields={updateFields} />,
      <NoseForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  }
  console.log(data);
  return (
    <div className="notFeelingWell">
      <div className="notFeelingWell__card">
        <h1 className="notFeelingWell__card--heading">
          Not Feeling Well? <div className="close" onClick={handleClose}>X</div>
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
