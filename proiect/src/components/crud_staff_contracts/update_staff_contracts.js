import React, { useState,useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
//import './USC.css';

export default function Update_Staff_Contracts() {
    useEffect(() => {
        
        setstart_date(localStorage.getItem('Start Date'));
        setend_date(localStorage.getItem('End Date'));
        setsalary(localStorage.getItem('Salary'))
        setagent(localStorage.getItem('Agent'));
        setstaffmemberid(localStorage.getItem('Staff Member ID'));
}, []);

    const [start_date, setstart_date] = useState(new Date('2021-12-16T10:43:46.737Z'));
    const [end_date, setend_date] = useState(new Date('2021-12-16T10:43:46.737Z'));
    const [salary, setsalary] = useState(0);
    const [agent, setagent] = useState('');
    const [staffmemberid, setstaffmemberid] = useState(null);
 
    const updateAPIData = () => {
        let navigate = useNavigate(); 
        let path = `/Contract`; 
        navigate(path);
        axios.put(`https://localhost:44307/api/Contract/put-by-id/${staffmemberid}`, {
            start_date,
            end_date,
            salary,
            agent,
            staffmemberid
        })
    }
    

    function myFunction(){
        updateAPIData();
        window.location = 'http://localhost:3000';
        
    }
    useEffect(() => {
            setstart_date(localStorage.getItem('Start Date'))
            setend_date(localStorage.getItem('End Date'));
            setsalary(localStorage.getItem('Salary'));
            setagent(localStorage.getItem('Agent'))
            setstaffmemberid(localStorage.getItem('ID'));
            
            
    }, []);

    
        

    return (
        
        <form className="create-form"> 
        <div>
           <Form.Field className='ff'>
            <label>Start Date</label>
            <input placeholder={start_date} defaultValue={start_date} onChange={(e) => setstart_date(e.target.value)} />
        </Form.Field>
        <Form.Field className='ff'>
            <label>End Date</label>
            <input placeholder={end_date} defaultValue={end_date} onChange={(e) => setend_date(e.target.value)} />
        </Form.Field>
        <Form.Field className='ff'>
            <label>Salary</label>
            <input placeholder={salary} defaultValue={salary} onChange={(e) => setsalary(e.target.value)} />
        </Form.Field>
        <Form.Field className='ff'>
            <label>Agent</label>
            <input placeholder={agent} defaultValue={agent} onChange={(e) => setagent(e.target.value)} />
        </Form.Field>
        
        </div>
        <Button className='bt2' type='submit' onClick={updateAPIData}>Update</Button>
        </form>
    )
}
