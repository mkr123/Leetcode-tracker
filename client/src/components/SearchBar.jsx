import React from "react"
import { useState, useEffect,useContext} from 'react';
import axios from "axios";
import {ProblemContext} from "../index.jsx"
import {  Input, Space  }  from 'antd';
import 'antd/dist/antd.css';
import "./SearchBar.css";
import { Select, Option } from 'antd';

export default function SearchBar(props){
  let problemContext = useContext(ProblemContext);
  const { Search } = Input;
  const onSearch = value => {
    axios.get("/search",{params:{input:value}}).then((res)=>{
      console.log(res.data);
      problemContext.setProblems(res.data);
    })
  };
  const handleChange = (value)=>{
    console.log(value)
  }
  return(
    <div id="SearchContainer">
      <Search placeholder="Search problem title" onSearch={onSearch} enterButton />


    </div>


  )

}