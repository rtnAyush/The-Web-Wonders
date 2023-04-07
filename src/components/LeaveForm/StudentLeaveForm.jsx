import './style.scss'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Nav from '../Home/Nav';
import { Link, useNavigate, } from 'react-router-dom';

import LeaveFormDataService from '../../services/leave.service'



const StudentLeaveForm = () => {

    const navigate = useNavigate()


    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [department, setDepartment] = useState('')
    const [semester, setSemester] = useState('')
    const [reason, setReason] = useState('')
    const [leaving, setLeaving] = useState('')
    const [returning, setReturning] = useState('')
    const [studentPhone, setStudentPhone] = useState('')
    const [fatherPhone, setFatherPhone] = useState('')
    const [motherPhone, setMotherPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        addForm()
    }

    const addForm = async () => {
        const studentId = localStorage.getItem('id')

        const newForm = await {
            name,
            room,
            department,
            semester,
            reason,
            leavingDate: leaving,
            returningDate: returning,
            studentPhone,
            fatherPhone,
            motherPhone,
            address,
            studentId,
            status: 'pending'
        }


        try {
            await LeaveFormDataService.addForm(newForm)
            alert('your query has been summited')
            navigate('/leave-status')
        } catch (err) {
            console.log(err);
        }
    }





    return (
        <>
            <Nav />
            <div className="student__leave__form">
                <h1 className="heading">Hostel Leave Form</h1>
                <p className="text">Please Fill the form with responsibility</p>
                <form onSubmit={handleSubmit} className="form">
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                        size="small"
                        required
                    />

                    <TextField
                        value={room}
                        onChange={(e) => setRoom(e.target.value)}
                        label="Room No"
                        size="small"
                        type='number'
                        required
                    />

                    <TextField
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        label="Department"
                        size="small"
                        required
                    />

                    <TextField
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                        label="Semester/Year"
                        size="small"
                        required
                    />

                    <TextField
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        label="Reason for leave"
                        size="small"
                        required
                    />

                    <div>
                        <p>Leaving Date</p>
                        <TextField
                            value={leaving}
                            onChange={(e) => setLeaving(e.target.value)}
                            size="small"
                            type='date'
                            required
                            fullWidth
                        />
                    </div>

                    <div>
                        <p>Return Date (Expected)</p>
                        <TextField
                            value={returning}
                            onChange={(e) => setReturning(e.target.value)}
                            size="small"
                            type='date'
                            required
                            fullWidth
                        />
                    </div>

                    <TextField
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        label="Student Mobile Number"
                        size="small"
                        type='number'
                        required
                    />

                    <TextField
                        value={fatherPhone}
                        onChange={(e) => setFatherPhone(e.target.value)}
                        label="Father Mobile Number"
                        size="small"
                        type='number'
                    />

                    <TextField
                        value={motherPhone}
                        onChange={(e) => setMotherPhone(e.target.value)}
                        label="Mother Mobile Number"
                        size="small"
                        type='number'
                    />

                    <TextField
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        label="Permanent Address"
                        multiline
                        maxRows={4}
                    />

                    <div className="leave__btn">
                        <Link to='/' >
                            <Button variant="contained">back</Button>
                        </Link>
                        <Button variant="contained" type='submit'>Submit</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default StudentLeaveForm