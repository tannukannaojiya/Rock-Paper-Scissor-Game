import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import {images} from './images';


const PlayPage = () => {
    const navigate=useNavigate();
    const home = () => {
      navigate("/");
    }
    const [userChoice, setUserChoice]=useState('rock');
    const [computerChoice, setComputerChoice]=useState('rock');
    const [userPoints, setUserPoints]=useState(0);
    const [computerPoints, setComputerPoints]=useState(0);
    const [turnResult, setTurnResult]=useState(null);
    const [gameOver, setGameOver]=useState(false);
    const [result, setResult]=useState('Let\'s see who wine');
   
   const move= userChoice + computerChoice;


    const choice=['rock','paper','scissor'];
   
    const handleOnClick=(value)=>{
        setUserChoice(value);
        generatComputerChoice();
    }

    const generatComputerChoice=()=>{
        const randomChoices=choice[Math.floor(Math.random()*choice.length)]
        setComputerChoice(randomChoices);
    }

    const reset=()=>{
      window.location.reload();
    }
    
    useEffect(()=>{
        if(userPoints <=4 && computerPoints <= 4){
            if(move === 'scissorspaper'|| move==='rockscissors' || move==='paperrock' ){
                const updatedUserPoints=userPoints+1;
                setUserPoints(updatedUserPoints);
                setTurnResult('User got the point');
                if(updatedUserPoints === 5){
                   setResult('User Wins');
                    const gameOff = true;
                    setGameOver(gameOff);
                }
        }
        if(move === 'paperscissors'|| move==='scissorsrock' || move==='rockpaper' ){
            const updatedComputerPoints=computerPoints+1;
            setComputerPoints(updatedComputerPoints);
            setTurnResult('Computer got the point');
            if(updatedComputerPoints === 5){
                setResult('Computer Wins');
                const gameOff = true;
                setGameOver(gameOff);
            }
        }
        if(move === 'paperpaper'|| move==='rockrock' || move==='scissorsscissors' ){
            setTurnResult('No one got the point');
        }
    }
    },[computerChoice,userChoice])
   
return (
   
    <div className="play-game">
    <div className="play-start">
    <h1 className='heading'>Rock Paper Scissors</h1>

    <div className="points">
    <p>User Points:{userPoints}</p>
    <p>Computer Points:{computerPoints}</p>
   </div>

   <div className="choice">
   <div className="choice-user">
   {/* {(userChoice =='paper'|| userChoice==='scissor' || userChoice==='rock' )  && ( */}
    <img className='img' src={require(`./images/${userChoice}.png`)} alt="" />
    </div>
   <div className="choice-computer">
   {/* {(computerChoice =='paper'|| computerChoice==='scissor' || computerChoice==='rock' )  && ( */}
    <img className='img' src={require(`./images/${computerChoice}.png`)} alt=""/>
    </div>
  </div>

   <div className='btn-div'>
   {choice.map((choice, index)=>
   <button className='btn' key={index} onClick={()=>handleOnClick(choice)} disabled={gameOver}>{choice}</button>)}
  </div>

   <div className='result'>
   <p>Turn Result:{turnResult}</p>
   <p>Final Result:{result}</p>
 </div>

 <div className='btn-div'>
<button className='btn' onClick={()=>reset()}>Reset Game?</button>
  <button className='btn' onClick={home}>Back</button>
 </div>

</div>
</div>

    
  )
}

export default PlayPage;
