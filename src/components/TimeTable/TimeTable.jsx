import React, { useEffect, useState } from 'react'
// import EditIcon from '@mui/icons-material/Edit';
import { useStateValue } from '../../context/index/StateProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';


import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const TimeTable = () => {
    const [{ timeTable }, dispacher] = useStateValue()
    const [open, setOpen] = useState(false);
    const [day, setDay] = useState('');
    const [todayTable, setTodayTable] = useState([])


    useEffect(() => {

        const today = new Date()
        getTodaySubjects(today.getDay())

    }, [])



    console.log(timeTable);

    const updateTable = (index) => (e) => {
        const newArray = todayTable.map((item, i) => {
            if (index === i) {
                return { ...item, subject: e.target.value };
            } else {
                return item;
            }
        });
        setTodayTable(newArray);
    };



    const handleClose = () => {
        setOpen(false);
    };

    const handleFinalInput = () => {
        setOpen(false);
        dispacher({
            type: `UPDATE_${day}_TIME_TABLE`,
            payload: todayTable,
        })
    };

    const getTodaySubjects = (today) => {
        switch (today) {
            case 1:
                setTodayTable(timeTable.mon);
                setDay('MON')
                break;
            case 2:
                setTodayTable(timeTable.tue);
                setDay('TUE')
                break;
            case 3:
                setTodayTable(timeTable.wed);
                setDay('WED')
                break;
            case 4:
                setTodayTable(timeTable.thu);
                setDay('THU')
                break;
            case 5:
                setTodayTable(timeTable.fri);
                setDay('FRI')
                break;
            default:
                break;
        }
    }


    return (
        <>
            <div className="time_table">
                <section className="table">
                    <TableContainer component={Paper}>
                        <Table aria-label="caption table">
                            <caption>Current {day} Time Table</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Timings</TableCell>
                                    <TableCell>
                                        Subjects
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    todayTable.map((val, idx) => (
                                        <TableRow key={idx}>
                                            <TableCell component="th" scope="row">
                                                {val.startTime + " - " + val.endTime}
                                            </TableCell>
                                            <TableCell >{val.subject}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>

                <div className="float__aside">
                    <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
                        <EditIcon />
                    </Fab>
                </div>
            </div>



            {
                <div>
                    <BootstrapDialog
                        fullWidth={true}
                        maxWidth={'md'}
                        onClose={handleClose}
                        aria-labelledby="dialog-title"
                        open={open}
                    >
                        <BootstrapDialogTitle id="dialog-title" onClose={handleClose}>
                            Edit Today time table
                        </BootstrapDialogTitle>

                        <div className="row">

                            <div className="col">
                                <DialogContent dividers className='subHeading'>
                                    Timings
                                </DialogContent>
                            </div>

                            <div className="col">
                                <DialogContent dividers className='subHeading'>
                                    subjects
                                </DialogContent>
                            </div>

                        </div>
                        {
                            todayTable.map((val, idx) => {
                                return (
                                    <div className="row" key={idx}>
                                        <div className="col">
                                            <DialogContent>
                                                {val.startTime + " - " + val.endTime}
                                            </DialogContent>
                                        </div>
                                        <div className="col" >
                                            <DialogContent >
                                                <TextField
                                                    name={val.startTime}
                                                    onChange={updateTable(idx)}
                                                    value={val.subject}
                                                    label="Subject"
                                                    size="small"
                                                />
                                            </DialogContent>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <DialogActions>
                            <Button
                                onClick={handleFinalInput}
                                variant="contained"
                            >
                                change
                            </Button>
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                style={{ backgroundColor: '#000' }}
                            >
                                CANCEL
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>
            }
        </>)
}

export default TimeTable;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));



function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
