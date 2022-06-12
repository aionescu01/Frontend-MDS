import React , { useEffect,useState }from 'react';
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RM.css';


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
    return { items: sortedItems, requestSort, sortConfig };
  };



export default function Read_Match() {

    const onDelete = (matchId) => {
        axios.delete(`https://localhost:44307/api/Match/delete-by-id/${matchId}`)
    }

    const getData = () => {
        axios.get(`https://localhost:44307/api/Match/get-all-matches`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

        const functie = (matchId) => {
        onDelete(matchId);
        window.location.href = 'http://localhost:3000/Matches';

    }
  
    const fct = (matchId)=>{
      //link catre match players si match staff
    }



    const [APIData, setAPIData] = useState([]);
useEffect(() => {
    axios.get(`https://localhost:44307/api/Match/get-all-matches`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])
const { items, requestSort, sortConfig } = useSortableData(APIData);
    const getClassNamesFor = (competition) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === competition ? sortConfig.direction : undefined;
        };

    const setData = (data) => {
    let { matchId, stadiumId, opponent, competition, event_date, score, referee } = data;
    localStorage.setItem('Match ID', matchId);
    localStorage.setItem('Stadium ID', stadiumId);
    localStorage.setItem('Opponent', opponent);
    localStorage.setItem('Competition', competition);
    localStorage.setItem('Event Date', event_date);
    localStorage.setItem('Score', score);
    localStorage.setItem('Referee', referee);
}

    return (
        
            <Table singleLine className='tabel'>
                <Table.Header className='tt1'>
                    <Table.Row>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Stadium ID')}
              className={getClassNamesFor('Stadium ID')}
            >Stadium ID</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Opponent')}
              className={getClassNamesFor('Opponent')}
            >Opponent</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Competition')}
              className={getClassNamesFor('Competition')}
            >Competition</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Event Date')}
              className={getClassNamesFor('Event Date')}
            >Event Date</button></Table.HeaderCell>
                        <Table.HeaderCell  className='titlu'><button
              type="button"
              onClick={() => requestSort('Score')}
              className={getClassNamesFor('Score')}
            >Score</button></Table.HeaderCell>
                        <Table.HeaderCell className='titlu'><button
              type="button"
              onClick={() => requestSort('Referee')}
              className={getClassNamesFor('Referee')}
            >Referee</button></Table.HeaderCell>
                        
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>

                {items.map((data) => {
     return (
       <Table.Row>
          <Table.Cell key={data.competition}>{data.competition}</Table.Cell>
          <Table.Cell >{data.stadiumId}</Table.Cell>
          <Table.Cell >{data.opponent}</Table.Cell>
          <Table.Cell >{data.event_date}</Table.Cell>
          <Table.Cell >{data.score}</Table.Cell>
          <Table.Cell >{data.referee}</Table.Cell>

           <Link to='/update_match'>
          <Table.Cell> 
        <Button onClick={() => setData(data)}>Update</Button>
        </Table.Cell>
        </Link> 
        <Table.Cell>
        <Button onClick={() => functie(data.matchId)}>Delete</Button>
        </Table.Cell> 
        <Table.Cell>
        <Button onClick={() => fct(data.matchId)}>Match Details</Button>
        </Table.Cell>
        </Table.Row>
   )})}
                </Table.Body>
            </Table>
        
        
    )
}
