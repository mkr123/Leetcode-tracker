import React, { useState, useEffect,useContext} from 'react';
import ProblemEntry from "./PreblemEntry.jsx";
import {ProblemContext} from "../index.jsx"
//import AddProblem from "./AddProblem.jsx";
import "./ProblemList.css";
import axios from 'axios';
export default function ProblemList(props){
let problemContext = useContext(ProblemContext);

  return (
    <div id = "ProblemListContainer">
       <div id="topLineContainer">
            <div>status</div>
            <div>title</div>
            <div>time</div>
            <div>difficulty</div>
            <div>acceptance</div>
            <div>favourite</div>
         </div>
         {problemContext.problems.map((problem)=>{
           return <ProblemEntry data={problem} key={problem._id}/>
         })}
    </div>
  )
}

