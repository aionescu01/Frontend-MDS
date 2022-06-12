import React, {useState} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';


export default function Create_Match_Players(){
    const [matchId, setmatchid] = useState(0);
    const [playerid, setplayerid] = useState(0);
    
    const postData = () => {
        axios.post('https://localhost:44307/api/MatchPlayer/add-matchplayer',{
            matchId,
            playerid
        })
    }
    const fun = () => {
        document.getElementById('theDiv').innerHTML = 'Jucatorul a fost adaugat.';
    }
    function myFunction(){
        postData();

        window.location.href = 'http://localhost:3000/Match_Players'
    }

    return(
        <Form className="create-form">
            <Form.Field>
            <label className='scris'>Match ID</label>
            <input className='raspuns' placeholder='Match ID' onChange={(e) => setmatchid(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label className='scris'>Player ID</label>
            <input className='raspuns' placeholder='Player ID' onChange={(e) => setplayerid(e.target.value)} />
        </Form.Field>
        
        
        <Button onClick={myFunction} type = 'submit'>Submit</Button>
    </Form>
    )
}

