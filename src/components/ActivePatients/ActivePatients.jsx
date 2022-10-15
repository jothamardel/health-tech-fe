import "./ActivePatients.scss";


function ActivePatients(props) {
  const { patients } = props;
  return (
    <>
      <div className="active-patient-input">
        <input placeholder="search..." type="search"/>
      </div>
      <div className="active-patient-container">
        <div className="card">
          {
            patients?.map(item => (
            <div className="card-patient" key={item._id}>
              <h1>{item.full_name}</h1>
              <div>
                <button>start diagnosis</button>
                <button>discharge</button>
              </div>
            </div>
            ))
          }

        </div>
      </div>
    </>
  )
}


export default ActivePatients;