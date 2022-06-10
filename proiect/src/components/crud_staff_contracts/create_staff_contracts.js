import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react"
import axios from "axios";



export default function Create_Staff_Contracts() {
    const [start_date, setstart_date] = useState(new Date('2021-12-16T10:43:46.737Z'));
    const [end_date, setend_date] = useState(new Date('2021-12-16T10:43:46.737Z'));
    const [salary, setsalary] = useState(0);
    const [agent, setagent] = useState('');
    const [staffmemberid, setstaffmemberid] = useState(0);

    const postData = () => {
        axios.post('https://localhost:44307/api/Contract/add-one-contract', {
            start_date,
            end_date,
            salary,
            agent,
            staffmemberid
        })
    }

    const fun = () => {
        document.getElementById('theDiv').innerHTML = 'Contractul persoanei din staff a fost adaugat.';
    }
    function myFunction(){
        postData();
        //fun();
        window.location.href = 'http://localhost:3000/Staff_Contracts';
    }

    return(
        <Form className="create-form">
        <Form.Field>
            <label>start_date</label>
            <input placeholder='2021-12-12' onChange={(e) => setstart_date(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>end_date</label>
            <input placeholder='2021-12-12' onChange={(e) => setend_date(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>salary</label>
            <input placeholder='Salary' onChange={(e) => setsalary(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>agent</label>
            <input placeholder='Agent' onChange={(e) => setagent(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>staff id</label>
            <input placeholder='StaffMemberId' onChange={(e) => setstaffmemberid(e.target.value)}/>
        </Form.Field>
        <Button onClick={myFunction} type = 'submit'>Submit</Button>
    </Form>
    )
}