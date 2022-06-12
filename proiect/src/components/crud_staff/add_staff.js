import React , { useEffect,useState }from 'react';
import { Form,Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './RS.css';

export default function Add_staff() {

const postData = () => {
    const [Link, setlink] = useState('');
        
<<<<<<< Updated upstream
    axios.post(`create staff ${Link}`, {
        Link
        
    })
}
    return(
        <Form className="create-form">
        <Form.Field>
            <label className='Link'>Link</label>
            <input className='raspuns' placeholder='Link' />
        </Form.Field>    
        <Button onClick={postData(Link)} type = 'submit'>Submit</Button>
=======
        <Form className="create-form1" onSubmit={handleSubmit}>
             <h2 className='bt2'>Link</h2>
            <Input className='inp' onChange={(e) => setlink(e.target.value)} value = {Link}></Input>
        
        <Button className='bt2' type = 'submit'>Submit</Button>
>>>>>>> Stashed changes
    </Form>
    )

    }
