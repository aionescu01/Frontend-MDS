import React , { useEffect,useState }from 'react';
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';



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



export default function Read_Match_Players() {

    const onDelete = (playerid) => {
        axios.delete(`https://localhost:44307/api/MatchPlayer/delete-by-PlayerId/${playerid}`)
    }

    const getData = () => {
        axios.get(`https://localhost:44307/api/MatchPlayer/get-all-matchplayers`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

        const functie = (playerid) => {
        onDelete(playerid);
        window.location.href = 'http://localhost:3000/Match_Players';

    }



    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://localhost:44307/api/MatchPlayer/get-all-matchplayers`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])
const { items, requestSort, sortConfig } = useSortableData(APIData);
    const getClassNamesFor = (matchid) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === matchid ? sortConfig.direction : undefined;
        };

    const setData = (data) => {
    let { playesid, matchid } = data;
    localStorage.setItem('Player ID', playerid);
    localStorage.setItem('Match ID', matchid);
    
}

    return (
        
            <Table singleLine className='tabel'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Player ID')}
              className={getClassNamesFor('Player ID')}
            >Player ID</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Match ID')}
              className={getClassNamesFor('Match ID')}
            >Match ID</button></Table.HeaderCell>
                        
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                
                {items.map((data) => {
     return (
       <Table.Row>
          <Table.Cell key={data.matchid}>{data.matchid}</Table.Cell>
          <Table.Cell >{data.playerid}</Table.Cell>
          
           <Link to='/update_match_players'>
          <Table.Cell> 
        <Button onClick={() => setData(data)}>Update</Button>
        </Table.Cell>
        </Link> 
         <Table.Cell>
        <Button onClick={() => functie(data.playerid)}>Delete</Button>
        </Table.Cell> 

        </Table.Row>
   )})}
                </Table.Body>
            </Table>
        
        
    )
}
