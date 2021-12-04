import React, { useState, useEffect,useContext} from 'react';
import "./ProblemEntry.css"
import {IoMdHeart, IoMdHeartEmpty} from 'react-icons/Io'
export default function ProblemEntry(props){



  return (
    <div className = "ProblemEntry">
       <div>status</div>
       <div>{props.data.leetcodeID}. {props.data.Title}</div>
       <div>{props.data.solveTime}</div>
       <div>{props.data.Difficulty}</div>
       <div>{props.data.Acceptance}</div>
       <div>{props.data.favourite?<IoMdHeart />:<IoMdHeartEmpty />}</div>
    </div>



  )

}