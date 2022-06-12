import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
<<<<<<< Updated upstream

export default function Read_Staff_Contracts(){
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
                   <Table.Row>
                       <Table.HeaderCell>Name</Table.HeaderCell>
                   </Table.Row>
               </Table.Header>

               <Table.Body>
                   {APIData.map((data) => {
                       return(
                           <Table.Row>
                               <Table.Cell>
                                   { data.staffMemberId ? data.salary : '' }
                               </Table.Cell>
                           </Table.Row>
                   )})}
               </Table.Body>
=======
import {Link} from 'react-router-dom';
import './RSC.css';

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

    const onDelete = (staffmemberId) => {
        axios.delete(`https://localhost:44307/api/Contract/delete-by-id/${staffmemberId}`)
    }

    const getData = () => {
        axios.get(`https://localhost:44307/api/Contract`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

        const functie = (staffmemberId) => {
        onDelete(staffmemberId);
        window.location.href = 'http://localhost:3000/Staff_Contracts';

    }



    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://localhost:44307/api/Contract/get-all-staff-contracts`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])
const { items, requestSort, sortConfig } = useSortableData(APIData);
    const getClassNamesFor = (start_date) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === start_date ? sortConfig.direction : undefined;
        };

    const setData = (data) => {
    let { staffmemberId, start_date, end_date, salary, agent } = data;
    localStorage.setItem('Staff ID', staffmemberId);
    localStorage.setItem('Start Date', start_date);
    localStorage.setItem('End Date', end_date);
    localStorage.setItem('Salary', salary);
    localStorage.setItem('Agent', agent);
}

    return (
        
            <Table striped className='tabel'>
                <Table.Header className='tt1'>
                    <Table.Row>
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

                {items.map((data) => {
     return (
       <Table.Row>
          <Table.Cell key={data.start_date}>{data.start_date}</Table.Cell>
          <Table.Cell >{data.end_date}</Table.Cell>
          <Table.Cell >{data.salary}</Table.Cell>
          <Table.Cell >{data.agent}</Table.Cell>
          
           <Link to='/update_staff_contracts'>
          <Table.Cell> 
        <Button onClick={() => setData(data)}>Update</Button>
        </Table.Cell>
        </Link> 
         <Table.Cell>
        <Button onClick={() => functie(data.id)}>Delete</Button>
        </Table.Cell> 

        </Table.Row>
   )})}
                </Table.Body>
>>>>>>> Stashed changes
            </Table>
        
        
    )
}