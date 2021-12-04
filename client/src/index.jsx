import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import ProblemList from "./components/ProblemList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { useState, useEffect,useContext,createContext} from 'react';
export const ProblemContext = createContext();
const App = () => {
  const [problems, setProblems] = useState([]);
  useEffect(()=>{
    axios.get('/problems').then((res)=>{
      setProblems(res.data);
    })
   //
  },[])

  return (
    <ProblemContext.Provider value={{ problems, setProblems }}>
    <div>
      <div>Leetcode Problem Tracker</div>
      <div id="display">
        <div id="link">link</div>
      </div>
      <SearchBar/>
      <ProblemList />
    </div>
    </ProblemContext.Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));