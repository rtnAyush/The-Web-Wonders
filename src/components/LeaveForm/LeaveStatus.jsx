import './style.scss'

import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Nav from '../Home/Nav';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/index/StateProvider';





const LeaveStatus = () => {
    const [{ myForms }] = useStateValue()


    console.log('hh', myForms);


    return (
        <>
            <Nav />
            <div className="leave__status">
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Count</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Reason</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Remark</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                myForms && myForms.map((row, idx) => (
                                    <TableRow
                                        key={idx}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {idx + 1}
                                        </TableCell>
                                        <TableCell>{row.leavingDate}</TableCell>
                                        <TableCell>{row.reason}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                        <TableCell>{row.remark}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="float__left_side">
                <Link to={'/leave-form'} className='name'>Apply for leave from Hostel</Link>
            </div>
        </>
    )
}

export default LeaveStatus