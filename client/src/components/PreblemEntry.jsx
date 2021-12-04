import React, { useState, useEffect,useContext} from 'react';
import "./ProblemEntry.css"
import {IoMdHeart, IoMdHeartEmpty} from 'react-icons/Io';
import {RiTodoLine} from "react-icons/Ri";
import {AiOutlineHourglass} from "react-icons/Ai";
import {ImCheckmark} from "react-icons/Im";
import axios from "axios";
import {ProblemContext} from "../index.jsx"
export default function ProblemEntry(props){
  const [faver, setFaver] = useState(props.data.favourite)
  const [status, setStatus] =useState(props.data.status)
  let currContext = useContext(ProblemContext);
  const handleClick = ()=>{
    currContext.setCurrent(props.data)
  }

  const handleFavourite = (e)=>{
   setFaver(!faver);
   axios.put("/favourite",null,{params:{favourite:faver, title:props.data.Title}});
  }
  let statusIcon;
  if(status === 0){
    statusIcon = <RiTodoLine />
  } else if(status === 1){
    statusIcon = <AiOutlineHourglass />
  } else {
    statusIcon = <ImCheckmark />
  }

  return (
    <div className = "ProblemEntry" onClick={handleClick}>
       <div>{statusIcon}</div>
       <div>{props.data.leetcodeID}. {props.data.Title}</div>
       <div>{props.data.solveTime}</div>
       <div>{props.data.Difficulty}</div>
       <div>{props.data.Acceptance}</div>
       <div onClick={handleFavourite}>{faver?<IoMdHeart />:<IoMdHeartEmpty />}</div>
    </div>



  )

}