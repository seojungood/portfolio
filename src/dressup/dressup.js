import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import PopUp from './components/popUp';
import './styles/dressup.css';
import IconButton from '@material-ui/core/IconButton';
import NextButton from "@material-ui/icons/ArrowForwardIos"
import PrevButton from "@material-ui/icons/ArrowBackIos"
import InfoButton from "@material-ui/icons/Info"

function Dressup() {
  const [clothingIndex, setClothingIndex] = useState([1,3,2]);
  const [isOpen, setIsOpen] = useState(false);
  // To lead user to path from dress up game
  const navigate = useNavigate();

  //Useeffect to make change everytime clothingIndex is changed
  useEffect(() => {
    document.getElementById("top").className = `top${clothingIndex[0]}`;
    document.getElementById("bottom").className = `bottom${clothingIndex[1]}`;
    document.getElementById("shoes").className = `shoes${clothingIndex[2]}`;
    checkClothingIndex();
  }, [clothingIndex, navigate])
  
  function nextTop(){
    setClothingIndex([clothingIndex[0] === 3 ? 1 : clothingIndex[0] + 1, clothingIndex[1], clothingIndex[2]]);
  }

  function nextBottom(){
    setClothingIndex([clothingIndex[0], clothingIndex[1] === 3 ? 1 : clothingIndex[1] + 1, clothingIndex[2]]);
  }

  function nextShoes(){
    setClothingIndex([clothingIndex[0], clothingIndex[1], clothingIndex[2] === 3 ? 1 : clothingIndex[2] + 1]);
  }
  function prevTop(){
    setClothingIndex([clothingIndex[0] === 1 ? 3 : clothingIndex[0] - 1, clothingIndex[1], clothingIndex[2]]);
  
  }

  function prevBottom(){
    setClothingIndex([clothingIndex[0], clothingIndex[1] === 1 ? 3 : clothingIndex[1] - 1, clothingIndex[2]]);
  
  }

  function prevShoes(){
    setClothingIndex([clothingIndex[0], clothingIndex[1], clothingIndex[2] === 1 ? 3 : clothingIndex[2] - 1]);
  }

  function togglePopUp(){
    setIsOpen(!isOpen);
  }

  function checkClothingIndex() {
    const [top, bottom, shoes] = clothingIndex;
    if (top === bottom && bottom === shoes && top == 1) {
      setTimeout(function() {
        window.location.href = 'https://github.com/seojungood/portfolio';
      }, 3000);
    }
    if (top === bottom && bottom === shoes && top == 2) {
      setTimeout(function() {
        navigate('/projects');
        window.scrollTo(0,0);
      }, 3000);
    }
    if (top === bottom && bottom === shoes && top == 3) {
      setTimeout(function() {
        navigate('/about');
        window.scrollTo(0,0);
      }, 3000);
    }
  }

  return (
    <div className='dressUp'>
      <div className='infoContainer'>
        <InfoButton className='infoButton' 
        style={{color: 'white', fontSize: 50}} 
        onClick={togglePopUp}/>

        {isOpen && <PopUp
          handleClose={togglePopUp}
          content={<div>
            <h2>Seojun's Dress Up Game</h2>
            <p>Coordinate the correct fit to be directed to the corresponding page!</p>
            <div className='fits'>
              <div className='fitContainer'>
                <img src={require('./assets/fit/fit1rm.png')}/>
                <p>Portfolio Github</p>
              </div>
              <div className='fitContainer'>
                <img src={require('./assets/fit/fit2rm.png')}/>
                <p>Project Page</p>
              </div>
              <div className='fitContainer'>
                <img src={require('./assets/fit/fit3rm.png')}/>
                <p>About Page</p>
              </div>
            </div>
          </div>}
        />}
      </div>

      <div className='gameContainer'>
        <div className='buttonContainer'>
          <IconButton className='button' style={{ color: 'white'}} >
            <PrevButton onClick={prevTop}/>
          </IconButton >
          <IconButton className='button' style={{ color: 'white' }} >
            <PrevButton onClick={prevBottom}/>
          </IconButton>
          <IconButton className='button' style={{ color: 'white' }} >
            <PrevButton onClick={prevShoes}/>
          </IconButton>
        </div>

          <div className='container'>
            <div className='head'></div>
            <div id='top'></div>
            <div id='bottom'></div>
            <div id='shoes'></div>
          </div>

        <div className='buttonContainer'>
        <IconButton className='button' style={{ color: 'white'}} >
            <NextButton onClick={nextTop}/>
          </IconButton >
          <IconButton className='button' style={{ color: 'white' }} >
            <NextButton onClick={nextBottom}/>
          </IconButton>
          <IconButton className='button' style={{ color: 'white' }} >
            <NextButton onClick={nextShoes}/>
          </IconButton>
        </div>
      </div>
    </div>

    )
  }
  
  export default Dressup