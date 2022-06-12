<<<<<<< Updated upstream
 import React , { useEffect, useState } from 'react';
 import { Table } from 'semantic-ui-react';
 import axios from 'axios';
 import './RP.css';
 export default function Read_Player_Contracts(){
     const [APIData, setAPIData] = useState([]);
     useEffect(() => {
         axios.get('https://localhost:44307/api/Contract').then((response) => {
             setAPIData(response.data);
         })
     }, [])
     return(
         <div>
             <Table singleLine>
                <Table.Header>
=======
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import {Link} from "react-router-dom";
//import './RPC.css';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);
  
    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
    //console.log(sortedItems)
    return { items: sortedItems, requestSort, sortConfig };
  };



export default function Read_Staff_Contracts() {

    const onDelete = (id) => {
        axios.delete(`https://localhost:44307/api/Contract/delete-by-id/${id}`)
    }

    const getData = () => {
        axios.get(`https://localhost:44307/api/Contract/get-all-player-contracts`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

        const functie = (id) => {
        onDelete(id);
        window.location.href = 'http://localhost:3000/Player_Contracts';

    }



    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://localhost:44307/api/Contract/get-all-player-contracts`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])
const { items, requestSort, sortConfig } = useSortableData(APIData);
    const getClassNamesFor = (playerId) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === playerId ? sortConfig.direction : undefined;
        };

    const setData = (data) => {
    let { start_date, end_date, salary, agent, playerId } = data;
    localStorage.setItem('Player ID', playerId);
    localStorage.setItem('Start Date', start_date);
    localStorage.setItem('End Date', end_date);
    localStorage.setItem('Salary', salary);
    localStorage.setItem('Agent', agent);
}

    return (
        
            <Table singleLine className='tabel'>
                <Table.Header className='tt1'>
>>>>>>> Stashed changes
                    <Table.Row>
                    <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Player ID')}
              className={getClassNamesFor('Player ID')}
            >Player ID</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Start Date')}
              className={getClassNamesFor('Start Date')}
            >Start Date</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('End Date')}
              className={getClassNamesFor('End Date')}
            >End Date</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Salary')}
              className={getClassNamesFor('Salary')}
            >Salary</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Agent')}
              className={getClassNamesFor('Agent')}
            >Agent</button></Table.HeaderCell>
                        
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
<<<<<<< Updated upstream
                    {APIData.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>
                                    { data.playerId ? data.salary : '' }
                                </Table.Cell>
                            </Table.Row>
                    )})}
=======
                {/* {APIData.map((data) => { */}
                {items.map((data) => {
     return (
       <Table.Row>
          <Table.Cell key={data.playerId}>{data.playerId}</Table.Cell>
          <Table.Cell >{data.start_date}</Table.Cell>
          <Table.Cell >{data.end_date}</Table.Cell>
          <Table.Cell >{data.salary}</Table.Cell>
          <Table.Cell >{data.agent}</Table.Cell>

           <Link to='/update_player_contract'>
          <Table.Cell> 
        <Button onClick={() => setData(data)}>Update</Button>
        </Table.Cell>
        </Link> 
         <Table.Cell>
        <Button onClick={() => functie(data.id)}>Delete</Button>
        </Table.Cell> 

        </Table.Row>
   )})}
>>>>>>> Stashed changes
                </Table.Body>
            </Table>
        
        
    )
}
