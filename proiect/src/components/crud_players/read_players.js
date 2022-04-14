import React , { useEffect,useState }from 'react';
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RP.css';


export default function Read_Players() {

    const onDelete = (id) => {
        axios.delete(`https://localhost:44307/api/Player/delete-by-id/${id}`)
    }

    const getData = () => {
        axios.get(`https://localhost:44307/api/Player`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

        const functie = (id) => {
        onDelete(id);
        window.location.href = 'http://localhost:3000/Players';

    }



    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://localhost:44307/api/Player`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])

    const setData = (data) => {
    let { id, name, nationality, birth_Date,height,foot,position,value } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Nationality', nationality);
    localStorage.setItem('Birth Date', birth_Date)
    localStorage.setItem('Height', height);
    localStorage.setItem('Foot', foot);
    localStorage.setItem('Position', position);
    localStorage.setItem('Value', value)
}

    return (
        
            <Table singleLine className='tabel'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Nationality</Table.HeaderCell>
                        <Table.HeaderCell>birth_Date</Table.HeaderCell>
                        <Table.HeaderCell>Height</Table.HeaderCell>
                        <Table.HeaderCell>Foot</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Value</Table.HeaderCell>
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
     return (
       <Table.Row>
          <Table.Cell key={data.name}>{data.name}</Table.Cell>
          <Table.Cell >{data.nationality}</Table.Cell>
          <Table.Cell >{data.birth_Date}</Table.Cell>
          <Table.Cell >{data.height}</Table.Cell>
          <Table.Cell >{data.foot}</Table.Cell>
          <Table.Cell >{data.position}</Table.Cell>
          <Table.Cell >{data.value*1000000}</Table.Cell>

           <Link to='/update_players'>
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
            </Table>
        
        
    )
}
