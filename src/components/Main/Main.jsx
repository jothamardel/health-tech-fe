import React from 'react'
import Medical from '../../assets/images/medical.png';
import "./Main.scss"

const Main = () => {
  return (
    <div className='main-container'>
      <div className=''>
          <img src={Medical} alt="medical"/>
          <h1>Unify</h1>
          <p>get well, save the planet!</p>
          <button>I'm not feeling well!</button>
      </div>
    </div>
  )
}

export default Main