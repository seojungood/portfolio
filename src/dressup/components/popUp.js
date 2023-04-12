import React from 'react';
import '../styles/popUp.css';
import { useEffect } from 'react';

const PopUp = props => {

  // Disables scrolling when Popup is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <div className='popUpContainer'>
      <div className='popUpContent'>
        <button className='closePopUpButton' onClick={props.handleClose}>X</button>
          {props.content}
      </div>
    </div>
  )
}

export default PopUp;