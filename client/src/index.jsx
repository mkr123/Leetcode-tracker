import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import ProblemList from "./components/ProblemList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import { useState, useEffect, useContext, createContext } from 'react';
import { Button } from 'antd';
import { Pagination } from 'antd';
import Filter from "./components/Filter.jsx";
import './index.css'
import 'antd/dist/antd.css';
export const ProblemContext = createContext();
const App = () => {
  const [problems, setProblems] = useState([]);
  const [current, setCurrent] = useState();
  const [length, setLength] = useState(1407);

  useEffect(() => {
    axios.get('/problems').then((res) => {
      setProblems(res.data);
    })
    //
  }, []);

  const handleLinkClick = () => {
    if (current.Title === undefined) {
      return;
    }
    let problemURL = current.Title.toLowerCase().replaceAll("(","").replaceAll(")","").replaceAll(",","").replaceAll(' ', '-');
    if (current.status === 0) {
      axios.put("/status", null, { params: { status: 1, title: current.Title } })
      setCurrent({
        ...current,
        status: 1
      })
    }
    window.open(`https://leetcode.com/problems/${problemURL}`,"_blank")
  }
  const handleSolveClick = () => {
    if (current.status === 1) {
      axios.put("/status", null, { params: { status: 2, title: current.Title } });
      setCurrent({
        ...current,
        status: 2
      })
    }
  }
  const onPageChange = (page) => {
    axios.get('/problems',{params:{"page":page-1}}).then((res) => {
      setProblems(res.data);
    })
  }

  return (
    <ProblemContext.Provider value={{ problems, setProblems, current, setCurrent, setLength}}>
      <div id="AppContainer">

        <h1><img src="https://leetcode.com/_next/static/images/logo-ff2b712834cf26bf50a5de58ee27bcef.png"/>Leetcode Problem Tracker</h1>
        <div id="display">
          <h2 id="link">{current === undefined ? "Please select a problem" : `You select`}</h2>
          <Button type="link" onClick={handleLinkClick}>{current === undefined ? null : current.Title}</Button>
          {(current !== undefined && current.status === 1) ? <Button onClick={handleSolveClick}>Solved</Button> : null}
        </div>
        <div id = "inputArea">
        <SearchBar />
        <Filter />
        </div>

        <ProblemList />
        <Pagination
        defaultCurrent={1}
        defaultPageSize={20}
        total={length}
        showQuickJumper={true}
        showSizeChanger={false}
        onChange={onPageChange} />
      </div>
    </ProblemContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));