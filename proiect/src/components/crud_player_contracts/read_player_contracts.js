 import React , { useEffect, useState } from 'react';
 import { Table } from 'semantic-ui-react';
 import axios from 'axios';
 //import './RP.css';
 export default function Read_Player_Contracts(){
     const [APIData, setAPIData] = useState([]);
     useEffect(() => {
         axios.get('https://localhost:44307/api/Contract/get-all-player-contracts').then((response) => {
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
                                    { data.playerId ? data.name : '' }
                                </Table.Cell>
                            </Table.Row>
                    )})}
                </Table.Body>
             </Table>
         </div>
     )
 }
