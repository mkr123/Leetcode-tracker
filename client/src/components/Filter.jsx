import React from "react"
import { useState, useEffect,useContext} from 'react';
import axios from "axios";
import {ProblemContext} from "../index.jsx"
import  { Select }  from 'antd';
import 'antd/dist/antd.css';

export default function Filter (props){
  const OPTIONS = ['Easy', 'Medium', 'Hard'];
  const [selectedItems, setSelectedItems] = useState(OPTIONS);
  // state = {
  //   selectedItems: [],
  // };

  const handleChange = selectedItems => {
    // axios.get('/problems',{params:{
    //   filter:selectedItems
    // }})
    setSelectedItems(selectedItems)
    this.setState({ selectedItems });

  };

   // const { selectedItems } = selectedItems;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    return (
      <Select
        mode="multiple"
        placeholder="filter difficulty here"
        value={selectedItems}
        onChange={handleChange}
        style={{ width: '15%' }}
      >
        {filteredOptions.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
    );
  }
