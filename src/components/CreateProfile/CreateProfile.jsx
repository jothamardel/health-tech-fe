import React, { useState } from "react";
import "./CreateProfile.scss";

import {
  handleAdd,
  handleAddWithDate,
  handleRemove,
  handleUpdateProperty,
} from "../../utils";

const FullHistory = () => {
  const [childhoodIllness, setChildhoodIllness] = useState([{ illness: "" }]);
  const [adultIllness, setAdultIllness] = useState([{ illness: "" }]);
  const [surgeries, setSurgeries] = useState([{ date: "", reason: "" }]);
  const [hospitalizations, setHospitalizations] = useState([
    { date: "", reason: "" },
  ]);
  const [injuries, setInjuries] = useState([{ dat: "", reason: "" }]);
  const [trauma, setTrauma] = useState(false);
  const [medicAllergies, setMedicAllergies] = useState([{ allergy: "" }]);
  const [otherAllergies, setOtherAllergies] = useState([{ allergy: "" }]);
  const [familyIllness, setFamilyIllness] = useState([{ illness: "" }]);
  const [checkboxMedications, setCheckboxMedications] = useState({});
  function handleTrauma(e) {
    setTrauma(e.target.checked);
  }
  function handleCheckboxes(e) {
    const { name, value } = e.target;

    setCheckboxMedications((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }
  console.log(checkboxMedications);
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
            {surgeries.map((a, i) => (
              <div className="input" key={i}>
                <input
                  value={surgeries.date}
                  type="text"
                  name="date"
                  placeholder="MM/YY approx."
                  onChange={(e) =>
                    handleUpdateProperty(e, i, surgeries, setSurgeries)
                  }
                />
                <input
                  type="text"
                  name="surgery"
                  placeholder="Surgery"
                  value={surgeries.reason}
                  onChange={(e) =>
                    handleUpdateProperty(e, i, surgeries, setSurgeries)
                  }
                />
                {surgeries.length !== 1 && (
                  <button
                    className="remove"
                    onClick={() => handleRemove(i, surgeries, setSurgeries)}
                  >
                    Remove
                  </button>
                )}
                {surgeries.length - 1 === i && (
                  <button
                    className="add"
                    onClick={() =>
                      handleAddWithDate(surgeries, setSurgeries, "reason")
                    }
                  >
                    Add More
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="inputs">
            <label className="label">4. Were you ever hospitalized.</label>
            {hospitalizations.map((a, i) => (
              <div className="input" key={i}>
                <input
                  value={hospitalizations.date}
                  type="text"
                  name="date"
                  placeholder="MM/YY approx."
                  onChange={(e) =>
                    handleUpdateProperty(
                      e,
                      i,
                      hospitalizations,
                      setHospitalizations
                    )
                  }
                />
                <input
                  type="text"
                  name="reason"
                  placeholder="Reason"
                  value={hospitalizations.reason}
                  onChange={(e) =>
                    handleUpdateProperty(
                      e,
                      i,
                      hospitalizations,
                      setHospitalizations
                    )
                  }
                />
                {hospitalizations.length !== 1 && (
                  <button
                    className="remove"
                    onClick={() =>
                      handleRemove(i, hospitalizations, setHospitalizations)
                    }
                  >
                    Remove
                  </button>
                )}
                {hospitalizations.length - 1 === i && (
                  <button
                    className="add"
                    onClick={() =>
                      handleAddWithDate(
                        hospitalizations,
                        setHospitalizations,
                        "hospitalization"
                      )
                    }
                  >
                    Add More
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="inputs">
            <label className="label">5. Did you have any injuries.</label>
            {injuries.map((a, i) => (
              <div className="input" key={i}>
                <input
                  value={injuries.date}
                  type="text"
                  name="date"
                  placeholder="MM/YY approx."
                  onChange={(e) =>
                    handleUpdateProperty(e, i, injuries, setInjuries)
                  }
                />
                <input
                  type="text"
                  name="reason"
                  placeholder="Reason"
                  value={injuries.reason}
                  onChange={(e) =>
                    handleUpdateProperty(e, i, injuries, setInjuries)
                  }
                />
                {injuries.length !== 1 && (
                  <button
                    className="remove"
                    onClick={() => handleRemove(i, injuries, setInjuries)}
                  >
                    Remove
                  </button>
                )}
                {hospitalizations.length - 1 === i && (
                  <button
                    className="add"
                    onClick={() =>
                      handleAddWithDate(injuries, setInjuries, "reason")
                    }
                  >
                    Add More
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="inputs">
            <label className="label">6. Did you ever experienced trauma.</label>
            <span>
              <input
                type="radio"
                id="yes"
                name="trauma"
                onChange={(e) => handleTrauma(e)}
              />
              <label htmlFor="yes">Yes</label>
            </span>
            <span>
              <input type="radio" id="no" name="trauma" />
              <label htmlFor="no">No</label>
            </span>
          </div>
          <div className="inputs">
            <label className="label">
              7. Can you provide info about any medication allergies you may
              have
            </label>
            <div className="inputFields">
              {medicAllergies.map((a, i) => (
                <span key={i}>
                  <input
                    type="text"
                    name="allergy"
                    onChange={(e) =>
                      handleUpdateProperty(
                        e,
                        i,
                        medicAllergies,
                        setMedicAllergies
                      )
                    }
                    placeholder="Any allergies"
                  />
                  {medicAllergies.length !== 1 && (
                    <button
                      className="remove"
                      onClick={() =>
                        handleRemove(i, medicAllergies, setMedicAllergies)
                      }
                    >
                      Remove
                    </button>
                  )}
                  {medicAllergies.length - 1 === i && (
                    <button
                      className="add"
                      onClick={() =>
                        handleAdd(medicAllergies, setMedicAllergies, "allergy")
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
              8. Do you have any seasonal or environmental allergies or food
              allergies
            </label>
            <div className="inputFields">
              {otherAllergies.map((a, i) => (
                <span key={i}>
                  <input
                    type="text"
                    name="allergy"
                    onChange={(e) =>
                      handleUpdateProperty(
                        e,
                        i,
                        otherAllergies,
                        setOtherAllergies
                      )
                    }
                    placeholder="Any allergies"
                  />
                  {otherAllergies.length !== 1 && (
                    <button
                      className="remove"
                      onClick={() =>
                        handleRemove(i, otherAllergies, setOtherAllergies)
                      }
                    >
                      Remove
                    </button>
                  )}
                  {otherAllergies.length - 1 === i && (
                    <button
                      className="add"
                      onClick={() =>
                        handleAdd(otherAllergies, setOtherAllergies, "allergy")
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
              9. Did you ever have any of these medications if yes please
              specify which one.
            </label>
            <div className="inputFields">
              <span>
                <input
                  name="bcp"
                  type="checkbox"
                  id="birth-control"
                  value="Birth control pills"
                  placeholder="Any medications"
                  onChange={(e) => handleCheckboxes(e)}
                />
                <label htmlFor="birth-control">Birth control pills</label>
              </span>
              <span>
                <input
                  name="co"
                  type="checkbox"
                  id="creams"
                  value="Creams ointments"
                  placeholder="Any medications"
                  onChange={(e) => handleCheckboxes(e)}
                />
                <label htmlFor="creams">Creams/Ointments</label>
              </span>
              <span>
                <input
                  name="eem"
                  type="checkbox"
                  value="Eye Ear Medications"
                  placeholder="Any medications"
                  id="eye-ear"
                  onChange={(e) => handleCheckboxes(e)}
                />
                <label htmlFor="eye-ear">Eye/Ear Medications</label>
              </span>
              <span>
                <input
                  name="in"
                  type="checkbox"
                  value="Inhalers"
                  placeholder="Any medications"
                  id="inhalers"
                  onChange={(e) => handleCheckboxes(e)}
                />
                <label htmlFor="inhalers">Inhalers</label>
              </span>
            </div>
          </div>
          <div className="inputs">
            <label className="label">
              10. Are there any diseased or medical problems that run in your
              family?
            </label>
            <div className="inputFields">
              {familyIllness.map((a, i) => (
                <span key={i}>
                  <input
                    type="text"
                    name="illness"
                    onChange={(e) =>
                      handleUpdateProperty(
                        e,
                        i,
                        familyIllness,
                        setFamilyIllness
                      )
                    }
                    placeholder="Any illness"
                  />
                  {familyIllness.length !== 1 && (
                    <button
                      className="remove"
                      onClick={() =>
                        handleRemove(i, familyIllness, setFamilyIllness)
                      }
                    >
                      Remove
                    </button>
                  )}
                  {familyIllness.length - 1 === i && (
                    <button
                      className="add"
                      onClick={() =>
                        handleAdd(familyIllness, setFamilyIllness, "illness")
                      }
                    >
                      Add More
                    </button>
                  )}
                </span>
              ))}
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
