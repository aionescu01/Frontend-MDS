import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Update_Match() {
    useEffect(() => {
        setstadiumId(localStorage.getItem('Stadium ID'))
        setopponent(localStorage.getItem('Opponent'));
        setcompetition(localStorage.getItem('Competition'));
        setevent_date(localStorage.getItem('Event Date'))
        setscore(localStorage.getItem('Score'));
        setreferee(localStorage.getItem('Referee'));
        
}, []);

    const [stadiumId, setstadiumId] = useState(null);
    const [opponent, setopponent] = useState('');
    const [competition, setcompetition] = useState('');
    const [event_date, setevent_date] = useState(new Date('2021-12-16T10:43:46.737Z'));
    const [score, setscore] = useState(0);
    const [referee, setreferee] = useState('');
    
    const updateAPIData = () => {
        let navigate = useNavigate(); 
        let path = `/Match`; 
        navigate(path);
        //nu e put by id la match
        axios.put(`https://localhost:44307/api/Match/add-match`, {

            stadiumId,
            opponent,
            competition,
            event_date,
            score,
            referee
        })
    }
    

    useEffect(() => {
        setstadiumId(localStorage.getItem('Stadium ID'));
        setopponent(localStorage.getItem('Opponent'));
        setcompetition(localStorage.getItem('Competition'));
        setevent_date(localStorage.getItem('Event Date'))
        setscore(localStorage.getItem('Score'));
        setreferee(localStorage.getItem('Referee'));
            
    }, []);


        

    return (
        
        <form> 
        <div>
        
           <Form.Field>
            <label>Stadium ID</label>
            <input placeholder={stadiumId} defaultValue={stadiumId} onChange={(e) => setstadiumId(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Opponent</label>
            <input placeholder={opponent} defaultValue={opponent} onChange={(e) => setopponent(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Competition</label>
            <input placeholder={competition} defaultValue={competition} onChange={(e) => setcompetition(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Event Date</label>
            <input placeholder={event_date} defaultValue={event_date} onChange={(e) => setevent_date(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Score</label>
            <input placeholder={score} defaultValue={score} onChange={(e) => setscore(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Referee</label>
            <input placeholder={referee} defaultValue={referee}  onChange={(e) => setreferee(e.target.value)}/>
        </Form.Field>
        </div>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
        </form>
    )
}
