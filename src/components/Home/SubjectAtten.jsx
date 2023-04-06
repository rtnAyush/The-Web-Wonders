import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useGeoLocation from "../Hooks/useGeoLocation";

import DoneGif from '../../img/happy.gif'
import SadGif from '../../img/sad.gif'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

import StudentDataService from '../../services/student.service'
import { useStateValue } from '../../context/index/StateProvider';
const SubjectAtten = ({ subject, startTime, endTime }) => {

    const [{ user }] = useStateValue()
    const location = useGeoLocation()

    const [open, setOpen] = useState(false);
    const [student, setStudent] = useState();
    const [userLocation, setUserLocation] = useState({});
    const [isPresent, setIsPresent] = useState(false);
    // console.log(subject);

    useEffect(() => {

        fetchStudent()

    }, [open])

    const handleClose = () => {
        setOpen(false);
    };

    const fetchStudent = async () => {

        const id = localStorage.getItem('id')
        try {
            if (id !== undefined && id !== "") {
                const docSnap = await StudentDataService.getStudent(id);
                setStudent(docSnap.data())
                // console.log('done');
            }
        } catch (err) {
            console.log(err);
        }
    }


    const handlePresent = async () => {
        let dis
        // console.log(location);
        if (checkDoubleClick()) {
            return
        }


        if (location.loaded) {

            dis = distance(location.coordinates.lat, location.coordinates.lng)
            // console.log(dis);
            setUserLocation(dis)

            if (dis <= 2000) {
                setIsPresent(true)


                const id = localStorage.getItem('id')


                // console.log('ssss', student);

                const newData = await setNewData()

                // console.log('if');

                // console.log(newData);
                // console.log(id);
                try {
                    if (id !== undefined && id !== "") {
                        await StudentDataService.updateStudent(id, newData);
                        console.log('done');

                        const currDate = new Date()
                        let currTime

                        if (currDate.getHours() < 10) {
                            if (currDate.getMinutes() < 10) {
                                currTime = "0" + currDate.getHours() + ":0" + currDate.getMinutes()
                            } else {
                                currTime = "0" + currDate.getHours() + ":" + currDate.getMinutes()
                            }
                        } else {
                            if (currDate.getMinutes() < 10) {
                                currTime = currDate.getHours() + ":0" + currDate.getMinutes()
                            } else {
                                currTime = currDate.getHours() + ":" + currDate.getMinutes()
                            }
                        }

                        localStorage.setItem('clickTime', currTime)
                    }
                } catch (err) {
                    console.log(err);
                }



            } else {
                setIsPresent(false)
                console.log('else');
            }
            console.log(user);

            setOpen(true)



        } else {
            console.log('else1');
            alert(location?.error.message)
        }


    }

    const setNewData = () => {
        switch (subject) {
            case 'MA251':
                return {
                    MA251: isNaN(student?.MA251?.present) ? 1 : student.MA251.present + 1,
                }
            case 'HM251':
                return {
                    HM251: isNaN(student?.HM251?.present) ? 1 : student.HM251.present + 1,
                }
            case 'CS251':
                return {
                    CS251: isNaN(student?.CS251?.present) ? 1 : student.CS251.present + 1,
                }
            case 'CS252':
                return {
                    CS252: isNaN(student?.CS252?.present) ? 1 : student.CS252.present + 1,
                }
            case 'CS253':
                return {
                    CS253: isNaN(student?.CS253?.present) ? 1 : student.CS253.present + 1,
                }
            case 'CS254':
                return {
                    CS254: isNaN(student?.CS254?.present) ? 1 : student.CS254.present + 1,
                }
            case 'CS255':
                return {
                    CS255: isNaN(student?.CS255?.present) ? 1 : student.CS255.present + 1,
                }
            case 'CS256':
                return {
                    CS256: isNaN(student?.CS256?.present) ? 1 : student.CS256.present + 1,
                }
            default:
                break;
        }
    }

    const checkDoubleClick = () => {
        const clickedTime = localStorage.getItem('clickTime')
        console.log(clickedTime);
        if (clickedTime >= startTime && clickedTime <= endTime) {
            alert('no need to mark your attendance again for this class')
            return true
        } else {
            localStorage.removeItem('clickTime')
            return false
        }
    }

    const distance = (lat1, lon1) => {
        // coordinates of center of the class
        let lat2 = 10.6696341
        let lon2 = 78.5938165


        let p = 0.017453292519943295;    // Math.PI / 180
        let c = Math.cos;
        let a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;

        return 12742000 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371000 km
    }


    return (
        <>
            <div className="subject__block">

                <div className="details">


                    <h1 className='header'>Mark Your Attendence For Below Subject</h1>

                    <p className="sub__name">
                        Subject:  {subject}
                    </p>
                    <p className="timings">
                        Timings:  {startTime + ' - ' + endTime}
                    </p>


                </div>

                <section className="mark__btns">
                    <Button
                        variant="contained"
                        onClick={handlePresent}
                        disabled={subject === 'No Class' || subject === 'NoClass' || subject === 'lunch' || subject === 'break' ? true : false}
                    >
                        Present
                    </Button>


                    <Button
                        variant="outlined"
                        disabled={subject === 'No Class' || subject === 'NoClass' || subject === 'lunch' || subject === 'break' ? true : false}
                    >
                        Absent
                    </Button>
                </section>


            </div>

            {
                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        {
                            isPresent ?
                                <>
                                    <DialogTitle style={{ textAlign: 'center' }} className='dialog__done'>
                                        {"Great your Attendence has been marked"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText className='dialog__done'>

                                            <img src={DoneGif} alt="" style={{ width: '100px', objectFit: 'cover' }} />
                                            <span>You are {userLocation} m from class</span>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} autoFocus>
                                            Thanks
                                        </Button>
                                    </DialogActions>
                                </>
                                :
                                <>
                                    <DialogTitle style={{ textAlign: 'center' }} className='dialog__done'>
                                        <SentimentDissatisfiedIcon />
                                        <strong>Oops, Invailed Attempt to mark attendence</strong>
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText className='dialog__done'>

                                            <img src={SadGif} alt="" style={{ width: '100px', objectFit: 'cover' }} />
                                            <span>You are {userLocation} m from class</span>

                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} autoFocus>
                                            Thanks
                                        </Button>
                                    </DialogActions>
                                </>
                        }

                    </Dialog>
                </div>
            }
        </>
    )
}

export default SubjectAtten