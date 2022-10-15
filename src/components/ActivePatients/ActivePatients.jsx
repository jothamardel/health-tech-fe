import "./ActivePatients.scss";


function ActivePatients() {
  
  return (
    <>
      <div className="active-patient-input">
        <input placeholder="search..." type="search"/>
      </div>
      <div className="active-patient-container">
        <div className="card">
          <div className="card-patient">
            <h1>John Doe</h1>
            <div>
              <button>start diagnosis</button>
              <button>discharge</button>
            </div>
          </div>
          <div className="card-patient">
            <h1>Sarah Doe</h1>
            <div>
              {/* <button>start diagnosis</button> */}
              <button>Request access</button>
            </div>
          </div>
          <div className="card-patient">
            <h1>Peter Doe</h1>
            <div>
              <button>start diagnosis</button>
              <button>discharge</button>
            </div>
          </div>
          <div className="card-patient">
            <h1>Daniel Doe</h1>
            <div>
              <button>start diagnosis</button>
              <button>discharge</button>
            </div>
          </div>
          <div className="card-patient">
            <h1>Esther Doe</h1>
            <div>
              <button>start diagnosis</button>
              <button>discharge</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ActivePatients;