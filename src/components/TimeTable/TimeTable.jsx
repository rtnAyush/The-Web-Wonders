import React, { useEffect, useState } from 'react'
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
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

import TableDataService from '../../services/table.service'



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





const TimeTable = () => {
    const [{ todayTable, user }, dispacher] = useStateValue()
    const [open, setOpen] = useState(false);
    const [openTotalDay, setOpenTotalDay] = useState(false);
    const [day, setDay] = useState('');
    const [newTable, setNewTable] = useState([])
    const [classDate, setClassDate] = useState([])

    const [subject, setSubject] = useState('')
    const [date, setDate] = useState('')


    useEffect(() => {
        const today = new Date()

        setDay1(today.getDay())
        setNewTable(todayTable)
        datesOfClass(subject)
        // eslint-disable-next-line
    }, [subject])

    const addClassDate = async () => {
        console.log(subject, classDate);

        // const today = new Date()
        // const date = `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`

        // console.log(date);
        let newData

        try {
            const docSnap = await TableDataService.getTable('total');
            const obj = docSnap.data()



            switch (subject) {
                case 'MA251':
                    newData = await {
                        MA251: [...obj.MA251, date]
                    }
                    break;
                case 'HM251':
                    newData = await {
                        HM251: [...obj.HM251, date]
                    }
                    break;
                case 'CS251':
                    newData = await {
                        CS251: [...classDate, date]
                    }
                    break;
                case 'CS252':
                    newData = await {
                        CS252: [...classDate, date]
                    }
                    break;
                case 'CS253':
                    newData = await {
                        CS253: [...classDate, date]
                    }
                    break;
                case 'CS254':
                    newData = await {
                        CS254: [...classDate, date]
                    }
                    break;
                case 'CS255':
                    newData = await {
                        CS255: [...classDate, date]
                    }
                    break;
                case 'CS256':
                    newData = await {
                        CS256: [...classDate, date]
                    }
                    break;

                default:
                    break;
            }
        }
        catch (err) {
            console.log(err);
        }



        const id = 'total'
        try {
            if (id !== undefined && id !== "") {
                await TableDataService.updateTable(id, newData);
                console.log('done');

            }
        }
        catch (err) {
            console.log(err);
        }


        datesOfClass(subject)
    }


    const datesOfClass = async () => {
        // setSubject(e.target.value)

        try {
            const docSnap = await TableDataService.getTable('total');
            const obj = docSnap.data()

            // console.log(obj);
            setClassDate([])
            switch (subject) {
                case 'MA251':
                    setClassDate(obj.MA251)
                    break;
                case 'HM251':
                    setClassDate(obj.HM251)
                    break;
                case 'CS251':
                    setClassDate(obj.CS251)
                    break;
                case 'CS252':
                    setClassDate(obj.CS252)
                    break;
                case 'CS253':
                    setClassDate(obj.CS253)
                    break;
                case 'CS254':
                    setClassDate(obj.CS254)
                    break;
                case 'CS255':
                    setClassDate(obj.CS255)
                    break;
                case 'CS256':
                    setClassDate(obj.CS256)
                    break;

                default:
                    break;
            }

        } catch (err) {

            console.log(err);
        }
    }


    const updateTable = (index) => (e) => {
        const newArray = todayTable.map((item, i) => {
            if (index === i) {
                return { ...item, subject: e.target.value };
            } else {
                return item;
            }
        });
        setNewTable(newArray);
    };


    const handleClose = () => {
        setOpen(false);
    };


    const handleFinalInput = async () => {
        setOpen(false);

        const id = day

        const today = new Date()

        const newTimeTable = setNewSubjects(today.getDay())


        try {
            if (id !== undefined && id !== "") {
                await TableDataService.updateTable(id, newTimeTable);
                console.log('done');
            }
        } catch (err) {
            console.log(err);
        }
        getTodaySubjects(today.getDay())

    };

    const setNewSubjects = (today) => {
        switch (today) {
            case 1:
                return {
                    mon: newTable,
                }
            case 2:
                return {
                    tue: newTable,
                }
            case 3:
                return {
                    wed: newTable,
                }
            case 4:
                return {
                    thu: newTable,
                }
            case 5:
                return {
                    fri: newTable,
                }
            default:
                break;
        }
    }

    const setDay1 = (today) => {

        switch (today) {
            case 1:
                setDay('mon')
                break;
            case 2:
                setDay('tue')
                break;
            case 3:
                setDay('wed')
                break;
            case 4:
                setDay('thu')
                break;
            case 5:
                setDay('fri')
                break;
            default:
                break;
        }
    }

    const getTodaySubjects = (today) => {
        switch (today) {
            case 1:
                return fetchTable('mon')
            case 2:
                return fetchTable('tue')
            case 3:
                return fetchTable('wed')
            case 4:
                return fetchTable('thu')
            case 5:
                return fetchTable('fri')
            default:
                break;
        }
    }

    const fetchTable = async (day) => {

        try {
            const docSnap = await TableDataService.getTable(day);
            const obj = docSnap.data()
            // console.log(obj);

            dispacher({
                type: 'SET_TODAY_TABLE',
                payload: Object.values(obj)[0]
            })

        } catch (err) {

            console.log(err);
        }
    };



    // console.log(classDate);


    return (
        <>
            <div className="time_table">

                <section className="table">
                    <TableContainer component={Paper}>
                        <Table aria-label="caption table">
                            <caption>Current {day} Time Table</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Live Time - Table for 2nd CSE
                                    </TableCell>
                                </TableRow>
                            </TableHead>
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
                                    newTable.map((val, idx) => (
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


                {
                    user?.cr ?
                        <>
                            <div className="float__aside">
                                <Fab color="primary" aria-label="add" onClick={() => setOpen(true)}>
                                    <EditIcon />
                                </Fab>
                            </div>
                            <div className="float__right_side">
                                <Fab aria-label="change" onClick={() => setOpenTotalDay(true)}>
                                    <EventAvailableIcon />
                                </Fab>
                            </div>
                        </>
                        : null
                }
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
                            newTable.map((val, idx) => {
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

            {
                <div>
                    <Dialog
                        fullScreen
                        open={openTotalDay}
                        onClose={() => setOpenTotalDay(false)}
                        TransitionComponent={Transition}
                    >
                        <AppBar sx={{ position: 'relative' }}>
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={() => setOpenTotalDay(false)}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                    Add Class Happened or not
                                </Typography>
                                <Button autoFocus color="inherit" onClick={() => setOpenTotalDay(false)}>
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem>
                                <FormControl fullWidth>
                                    <InputLabel id="select-label">Subject</InputLabel>
                                    <Select
                                        labelId="select-label"
                                        value={subject}
                                        label="Subject"
                                        onChange={(e) => { setSubject(e.target.value) }}
                                    >
                                        <MenuItem value=''></MenuItem>
                                        <MenuItem value={'HM251'}>HM251 (Eco)</MenuItem>
                                        <MenuItem value={'MA251'}>MA251 (Math)</MenuItem>
                                        <MenuItem value={'CS251'}>CS251 (DCCN)</MenuItem>
                                        <MenuItem value={'CS252'}>CS252 (OS)</MenuItem>
                                        <MenuItem value={'CS253'}>CS253 (AFL)</MenuItem>
                                        <MenuItem value={'CS254'}>CS254 (M&M)</MenuItem>
                                        <MenuItem value={'CS255'}>CS255 (OS LAB)</MenuItem>
                                        <MenuItem value={'CS256'}>CS256 (M&M LAB)</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <Divider />
                            <ListItem button>
                                <TableContainer component={Paper}>
                                    <Table aria-label="caption table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    Date
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                classDate.map((val, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell >{val}</TableCell>
                                                    </TableRow>
                                                ))
                                            }

                                        </TableBody>


                                    </Table>
                                    {
                                        subject !== '' &&
                                        < Table >
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell >
                                                        <TextField
                                                            size="small"
                                                            type='date'
                                                            value={date}
                                                            onChange={(e) => setDate(e.target.value)}
                                                        />
                                                    </TableCell>
                                                    <TableCell >
                                                        <Button variant="contained" size="small" onClick={addClassDate}> Add Today Class</Button>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    }
                                </TableContainer>
                            </ListItem>
                        </List>
                    </Dialog>
                </div >
            }
        </>
    )
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
