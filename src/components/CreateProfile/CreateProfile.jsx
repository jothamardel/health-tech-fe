import React, { useState } from "react";
import "./CreateProfile.scss";

import { handleAdd, handleRemove, handleUpdateProperty } from "../../utils";

const FullHistory = () => {
  const [childhoodIllness, setChildhoodIllness] = useState([{ illness: "" }]);
  const [adultIllness, setAdultIllness] = useState([{ illness: "" }]);
  return (
    <div className="profile">
      <div className="profile__card">
        <h1 className="profile__card--heading">
          Please Provide the following information
        </h1>
        <div className="profile__card--form">
          <div className="inputs">
            <label className="label">
              1. Did you have any childhood illnesses.
            </label>
            <div className="inputFields">
              {childhoodIllness.map((a, i) => (
                <span key={i}>
                  <input
                    type="text"
                    name="illness"
                    onChange={(e) =>
                      handleUpdateProperty(
                        e,
                        i,
                        childhoodIllness,
                        setChildhoodIllness
                      )
                    }
                    placeholder="Any illness"
                  />
                  {childhoodIllness.length !== 1 && (
                    <button
                      className="remove"
                      onClick={() =>
                        handleRemove(i, childhoodIllness, setChildhoodIllness)
                      }
                    >
                      Remove
                    </button>
                  )}
                  {childhoodIllness.length - 1 === i && (
                    <button
                      className="add"
                      onClick={() =>
                        handleAdd(
                          childhoodIllness,
                          setChildhoodIllness,
                          "illness"
                        )
                      }
                    >
                      Add More
                    </button>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="inputs">
            <label className="label">
              2. Did you have any adult illnesses.
            </label>
            <div className="inputFields">
              {adultIllness.map((a, i) => (
                <span key={i}>
                  <input
                    type="text"
                    name="illness"
                    onChange={(e) =>
                      handleUpdateProperty(e, i, adultIllness, setAdultIllness)
                    }
                    placeholder="Any illness"
                  />
                  {adultIllness.length !== 1 && (
                    <button
                      className="remove"
                      onClick={() =>
                        handleRemove(i, adultIllness, setAdultIllness)
                      }
                    >
                      Remove
                    </button>
                  )}
                  {adultIllness.length - 1 === i && (
                    <button
                      className="add"
                      onClick={() =>
                        handleAdd(adultIllness, setAdultIllness, "illness")
                      }
                    >
                      Add More
                    </button>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="inputs">
            <label className="label">
              3. Did you have ever have any surgeries. Please enter all of them
            </label>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Surgery" />
            </div>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Surgery" />
            </div>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Surgery" />
            </div>
          </div>
          <div className="inputs">
            <label className="label">4. Were you ever hospitalized.</label>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Reason" />
            </div>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Reason" />
            </div>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Reason" />
            </div>
          </div>
          <div className="inputs">
            <label className="label">5. Did you have any injuries.</label>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Injury" />
            </div>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Injury" />
            </div>
            <div className="input">
              <input type="text" placeholder="MM/YY approx." />
              <input type="text" placeholder="Injury" />
            </div>
          </div>
          <div className="inputs">
            <label className="label">6. Did you ever experienced trauma.</label>
            <span>
              <input type="radio" id="yes" name="trauma" />
              <label htmlFor="yes">Yes</label>
            </span>
            <span>
              <input type="radio" id="no" name="trauma" />
              <label htmlFor="no">No</label>
            </span>
          </div>
          <div className="inputs">
            <label className="label">
              7. Can you provide info about any allergies you may have
            </label>
            <div className="inputFields">
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
            </div>
          </div>
          <div className="inputs">
            <label className="label">
              8. Do you have any seasonal or environmental allergies or food
              allergies
            </label>
            <div className="inputFields">
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
              <input type="text" placeholder="Any allergies" />
            </div>
          </div>
          <div className="inputs">
            <label className="label">
              9. Are you currently taking any medications.
            </label>
            <div className="inputFields">
              <div className="input">
                <span>
                  <label>Name:</label>
                  <input type="text" placeholder="Any medications" />
                </span>
              </div>
              <div className="input">
                <span>
                  <label>Dosage/Frequency:</label>
                  <input type="text" placeholder="Any medications" />
                </span>
              </div>
              <div className="input">
                <span>
                  <label>Reason:</label>
                  <input type="text" placeholder="Any medications" />
                </span>
              </div>
              <div className="input">
                <span>
                  <label>For how long are you taking it:</label>
                  <input type="text" placeholder="Any medications" />
                </span>
              </div>
              <div className="input">
                <span>
                  <label>Name:</label>
                  <input type="text" placeholder="Any medications" />
                </span>
              </div>
            </div>
          </div>
          <div className="inputs">
            <label className="label">
              10. Did you ever have any of these medications if yes please
              specify which one.
            </label>
            <div className="inputFields">
              <span>
                <input
                  type="checkbox"
                  value="Birth control pills"
                  placeholder="Any medications"
                />
                Birth control pills
              </span>
              <span>
                <input
                  type="checkbox"
                  value="Creams ointments"
                  placeholder="Any medications"
                />
                Creams/Ointments
              </span>
              <span>
                <input
                  type="checkbox"
                  value="Eye Ear Medications"
                  placeholder="Any medications"
                />
                Eye/Ear Medications
              </span>
              <span>
                <input
                  type="checkbox"
                  value="Inhalers"
                  placeholder="Any medications"
                />
                Inhalers
              </span>
              <span>
                <input
                  type="checkbox"
                  value="Recent Current antibiotics"
                  placeholder="Any medications"
                />
                Recent/Current antibiotics
              </span>
            </div>
          </div>
          <div className="inputs">
            <label className="label">
              11. Are there any diseased or medical problems that run in your
              family?
            </label>
            <div className="inputFields">
              <input type="text" placeholder="Any illness" />
              <input type="text" placeholder="Any illness" />
              <input type="text" placeholder="Any illness" />
              <input type="text" placeholder="Any illness" />
              <input type="text" placeholder="Any illness" />
            </div>
          </div>
        </div>
        <div className="profile__card--footer">
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default FullHistory;
