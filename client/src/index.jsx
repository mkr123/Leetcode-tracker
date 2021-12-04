import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import ProblemList from "./components/ProblemList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { useState, useEffect,useContext,createContext} from 'react';
import { Button } from 'antd';
export const ProblemContext = createContext();
const App = () => {
  const [problems, setProblems] = useState([]);
  const [current, setCurrent] = useState();
  useEffect(()=>{
    axios.get('/problems').then((res)=>{
      setProblems(res.data);
    })
   //
  },[]);
  const handleLinkClick = () =>{
    if(current.Title===undefined){
      return;
    }
    let problemURL = current.Title.toLowerCase().replaceAll(' ','-')
    console.log(problemURL);
    window.open(`https://leetcode.com/problems/${problemURL}`)
  }
  return (
    <ProblemContext.Provider value={{ problems, setProblems ,current, setCurrent}}>
    <div>
      <div>Leetcode Problem Tracker</div>
      <div id="display">
        <div id="link">{current===undefined?"Please select a problem":`You select`}</div>
        <Button type="link" onClick={handleLinkClick}>{current===undefined? null: current.Title}</Button>
        <Button>Solved</Button>
      </div>
      <SearchBar/>
      <ProblemList />
    </div>
    </ProblemContext.Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));