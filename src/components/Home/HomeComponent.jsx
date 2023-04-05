import React, { useEffect, useState } from 'react'
import AccountMenu from './AccountMenu'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStateValue } from '../../context/index/StateProvider';

import TableDataService from '../../services/table.service'

const HomeComponent = () => {
    const [{ user }] = useStateValue()

    const [totalClass, setTotalClass] = useState()

    useEffect(() => {
        fetchTotalClass()
    }, [])

    const fetchTotalClass = async () => {
        try {
            const doc = await TableDataService.getTable('total')
            setTotalClass(doc.data())
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(totalClass);
    return (
        <div className="home__block">
            <div className="home__nav">
                <AccountMenu />
            </div>
            <div className="attendence__card">
                <div className="header">
                    Your Attendence
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Subject</StyledTableCell>
                                <StyledTableCell>Present</StyledTableCell>
                                <StyledTableCell>Absent</StyledTableCell>
                                {/* <StyledTableCell>Percent %</StyledTableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">MA251</StyledTableCell>
                                <StyledTableCell>{user?.MA251}</StyledTableCell>
                                <StyledTableCell>{totalClass?.MA251.length - user?.MA251}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">HM251</StyledTableCell>
                                <StyledTableCell>{user?.HM251}</StyledTableCell>
                                <StyledTableCell>{totalClass?.HM251.length - user?.HM251}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">CS251</StyledTableCell>
                                <StyledTableCell>{user?.CS251}</StyledTableCell>
                                <StyledTableCell>{totalClass?.CS251.length - user?.CS251}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">CS252</StyledTableCell>
                                <StyledTableCell>{user?.CS252}</StyledTableCell>
                                <StyledTableCell>{totalClass?.CS252.length - user?.CS252}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">CS253</StyledTableCell>
                                <StyledTableCell>{user?.CS253}</StyledTableCell>
                                <StyledTableCell>{totalClass?.CS253.length - user?.CS253}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">CS254</StyledTableCell>
                                <StyledTableCell>{user?.CS254}</StyledTableCell>
                                <StyledTableCell>{totalClass?.CS254.length - user?.CS254}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">CS255</StyledTableCell>
                                <StyledTableCell>{user?.CS255}</StyledTableCell>
                                <StyledTableCell>{totalClass?.CS255.length - user?.CS255}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">CS256</StyledTableCell>
                                <StyledTableCell>{user?.CS256}</StyledTableCell>
                                <StyledTableCell>{totalClass?.CS256.length - user?.CS256}</StyledTableCell>
                                {/* <StyledTableCell>{3}</StyledTableCell> */}
                            </StyledTableRow>



                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className="options">
                <div className="option">
                    <ExitToAppIcon />
                    <Link to={'/leave-form'} className='name'>Apply for leave</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
