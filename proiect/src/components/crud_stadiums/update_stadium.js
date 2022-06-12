import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./US.css";

export default function Update_Stadium() {
    useEffect(() => {
        setstadiumid(localStorage.getItem('Stadium ID'))
        setname(localStorage.getItem('Name'));
        setcapacity(localStorage.getItem('Capacity'));
        setsurface(localStorage.getItem('Surface'))
        setaddress(localStorage.getItem('Address'));
        
}, []);

    const [stadiumId, setstadiumid] = useState(null);
    const [name, setname] = useState('');
    const [capacity, setcapacity] = useState(0);
    const [surface, setsurface] = useState('');
    const [address, setaddress] = useState('');
    
    const updateAPIData = () => {
        let navigate = useNavigate(); 
        let path = `/Stadiums`; 
        navigate(path);
        //nu exista metoda put by id
        axios.put(`https://localhost:44307/api/Stadium/add-stadium`, {
            name,
            capacity,
            surface,
            address
        })
    }
    
    function myFunction(){
        updateAPIData();
        window.location = 'http://localhost:3000';
        
    }

    useEffect(() => {
        setstadiumid(localStorage.getItem('Stadium ID'))
        setname(localStorage.getItem('Name'));
        setcapacity(localStorage.getItem('Capacity'));
        setsurface(localStorage.getItem('Surface'))
        setaddress(localStorage.getItem('Address'));
            
    }, []);

   
    return (
        
        <form className='create-form'> 
        <div>
        
           <Form.Field className='ff'>
            <label>name</label>
            <input placeholder={name} defaultValue={name} onChange={(e) => setname(e.target.value)} />
        </Form.Field>
        <Form.Field className='ff'>
            <label>capacity</label>
            <input placeholder={capacity} defaultValue={capacity} onChange={(e) => setcapacity(e.target.value)} />
        </Form.Field>
        <Form.Field className='ff'>
            <label>surface</label>
            <input placeholder={surface} defaultValue={surface} onChange={(e) => setsurface(e.target.value)} />
        </Form.Field>
        <Form.Field className='ff'>
            <label>address</label>
            <input placeholder={address} defaultValue={address} onChange={(e) => setaddress(e.target.value)}/>
        </Form.Field>
        
        </div>
        <Button className='b1' type='submit' onClick={updateAPIData}>Update</Button>
        </form>
    )
}