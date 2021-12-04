import React, { useState, useEffect,useContext} from 'react';
import {IoMdHeart, IoMdHeartEmpty} from 'react-icons/Io';
import {RiTodoLine} from "react-icons/Ri";
import {AiOutlineHourglass} from "react-icons/Ai";
import {ImCheckmark} from "react-icons/Im";
import axios from "axios";
import {ProblemContext} from "../index.jsx";
import { Progress } from 'antd';
import "./ProblemEntry.css"

export default function ProblemEntry(props){
  const [faver, setFaver] = useState(props.data.favourite)
  const [status, setStatus] =useState(props.data.status)
  let currContext = useContext(ProblemContext);
  const handleClick = ()=>{
    currContext.setCurrent(props.data)
  }
  useEffect(()=>{
    if(currContext.current!==undefined && currContext.current.leetcodeID===props.data.leetcodeID){
      setStatus(currContext.current.status)
    }
  },[currContext.current])
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
  const act = props.data.Acceptance.replace("%","")

  let diffstyle;
  if(props.data.Difficulty==="Easy"){
    diffstyle={
      color: `#13c2c2`
    };
  }
  if(props.data.Difficulty==="Medium"){
    diffstyle={
      color: `#faad14`
    };
  }if(props.data.Difficulty==="Hard"){
    diffstyle={
      color: `#f5222d`
    };
  }

  return (
    <div className = "ProblemEntry" onClick={handleClick}>
       <div>{statusIcon}</div>
       <div>{props.data.leetcodeID}. {props.data.Title}</div>
       <div>{props.data.solveTime}</div>
       <div style={diffstyle}>{props.data.Difficulty }</div>
       <div><Progress percent={+act} showInfo={false} />{props.data.Acceptance}</div>
       <div onClick={handleFavourite}>{faver?<IoMdHeart />:<IoMdHeartEmpty />}</div>
    </div>



  )

}