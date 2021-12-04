import React from "react"
import { useState, useEffect,useContext} from 'react';
import axios from "axios";
import {ProblemContext} from "../index.jsx"
import  { Select }  from 'antd';
import 'antd/dist/antd.css';

export default function Filter (props){
  const OPTIONS = ['Easy', 'Medium', 'Hard'];
  const [selectedItems, setSelectedItems] = useState(OPTIONS);
  const problemsContext = useContext(ProblemContext);

  const handleChange = selectedItems => {
    console.log(JSON.stringify(selectedItems))
    axios.get('/problems',{params:{
      filter:JSON.stringify(selectedItems)
    }}).then((res)=>{
      console.log(res.data);
      problemsContext.setProblems(res.data)
    })
    setSelectedItems(selectedItems)

  };

    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    let filtercolor;

    return (
      <Select
        mode="multiple"
        placeholder="filter difficulty here"
        value={selectedItems}
        onChange={handleChange}
        style={{ width: '30%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
