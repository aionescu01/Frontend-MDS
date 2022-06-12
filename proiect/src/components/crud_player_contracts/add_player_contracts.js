import React , { useEffect,useState }from 'react';
import { Form,Button, Input } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
//import './RP.css';
import { body } from 'express-validator';

export default function Add_player_contracts() {

    const [Link, setlink] = useState('');

    const handleSubmit = (e) => {
        console.log(Link);
    axios.post(`https://localhost:44307/api/Contract/add-players`,
    Link,
    { 
        headers: { 'Content-Type': 'application/json', 'charset':'utf-8'}
    }
    ).then(response=>{window.location.reload()})
} 
    return(

        
        <Form className="create-form1" onSubmit={handleSubmit}>
            <h2 className='bt2'>Link</h2>
            <Input className='inp' onChange={(e) => setlink(e.target.value)} value = {Link}></Input>
            <Input className='inp' onChange={(e) => setlink(Link + e.target.value)} value = {Link}></Input>
        <Button className='bt2' type = 'submit'>Submit</Button>
    </Form>
    )

}
