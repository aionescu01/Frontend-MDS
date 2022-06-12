import React , { useEffect,useState }from 'react';
import { Form,Button, Input } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
//import './RSC.css';
import { body } from 'express-validator';

export default function Add_staff_contracts() {

    const [Link, setlink] = useState('');

    const handleSubmit = (e) => {
        console.log(Link);
    axios.post(`https://localhost:44307/api/Contract/add-staff`,
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
        
        <Button className='bt2' type = 'submit'>Submit</Button>
    </Form>
    )

}
