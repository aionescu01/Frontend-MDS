import React, {useState} from "react"
import {Button, Checkbox, Form} from "semantic-ui-react"
import axios from "axios";

export default function Create_Staff(){
    const [name, setname] = useState('');
    const [role, setrole] = useState('');
    const [birth_date, setbirth_date] = useState(new Date('2021-12-16T10:43:46.737Z'));
    const [email, setemail] = useState('');
    const [phone_number, setphone_number] = useState('');


    const postData = () => {
        axios.post('/api/StaffMember/Add one staff member', {
            name,
            role,
            birth_date,
            email,
            phone_number
        })
    }

    const fun = () => { 
        document.getElementById('theDiv').innerHTML = 'Membrul din staff ' + name + ' a fost adaugat.';
    }
    function myFunction(){
        postData();
        fun();
    }

    return(
        <Form className="create-form">
            <Form.Field>
                <label>name</label>
                <input placeholder="Name" onChange={(e) => setname( e.target.value )} />
            </Form.Field>
            <Form.Field>
                <label>role</label>
                <input placeholder="Role" onChange={(e) => setrole( e.target.value )} />
            </Form.Field>
            <Form.Field>
                <label>birth_date</label>
                <input placeholder="Birth_Date" onChange={(e) => setbirth_date( e.target.value )}/>
            </Form.Field>
            <Form.Field>
                <label>email</label>
                <input placeholder="Email" onChange={(e) => setemail( e.target.value )}/>
            </Form.Field>
            <Form.Field>
                <label>phone_number</label>
                <input placeholder="Phone_Number" onChange={(e) => setphone_number( e.target.value )}/>
            </Form.Field>
            <Button onClick={myFunction} type = 'submit'>Submit</Button>
        </Form>
    )
}
