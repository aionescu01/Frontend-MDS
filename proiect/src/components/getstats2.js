import React, { useState, useEffect, useCallback, useContext } from "react";
import {Table, Button} from 'semantic-ui-react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { render } from "react-dom";


const useFetch = (url, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async function () {
        try {
          setLoading(true);
          const response = await axios.get(url);
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          throw error;
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);
    return { loading, data };
}


export default function Stats_2(){
    const {loading, data} = useFetch(
        `https://localhost:44307/api/Contract/salary-statistics`
      );


      let txt="";
      if(loading==false)
      {
      for(let x in data[0])
      {
      txt=x+": "+data[0][x];
      var node = document.createElement('li');
      node.appendChild(document.createTextNode(txt));
   
      document.getElementById('bb').appendChild(node);
      }}
  

    

    return(
        <div>
        <h3>Statistici salarii</h3>
        <ul id="bb"></ul>
        </div>
    )
}