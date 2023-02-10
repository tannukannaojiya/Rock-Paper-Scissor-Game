import React from 'react';
import { useNavigate } from 'react-router-dom';
import play from './startbtn.png';


const Start = () => {
 const navigate=useNavigate();

    const handleOnClick = () => {
       navigate("/PlayPage");
    }
  
  return (
    <div className="main-div">
    <div className="main-containor">
    <h1>Rock Paper Scissors<br/><span>Game</span> </h1>
     <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/38166/rock-paper-scissors-children-clipart-md.png"   width="600vw" height="320vh"></img>
      <img src={play} className='play-btn' alt="" onClick={handleOnClick} width="280vw" height="150vh" cursor="pointer"/>
      
      </div>
    </div>
  )
}

export default Start;
