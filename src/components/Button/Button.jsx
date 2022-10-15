import React from 'react'
import "./Button.scss"

const Button = (props) => {
  return (
    <div className='button-container'>
      <div className=''>
          <button {...props}>I'm not feeling well!</button>
      </div>
    </div>
  )
}

export default Button;