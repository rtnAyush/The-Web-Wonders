import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import useGeoLocation from "../Hooks/useGeoLocation";

const SubjectAtten = ({ subject, startTime, endTime }) => {
    const location = useGeoLocation()

    const [open, setOpen] = useState(false);
    const [userLocation, setUserLocation] = useState({});

    useEffect(() => {


    })

    const handleClose = () => {
        setOpen(false);
    };


    const handlePresent = () => {
        setOpen(true);
        let dis
        // getLocation()
        if (location.loaded) {
            dis = distance(location.coordinates.lat, location.coordinates.lng)
            console.log(dis);
            setUserLocation(dis)
        }


    }


    // const getGeolocation = () => {
    //     return new Promise((resolve, reject) =>
    //         navigator.geolocation.getCurrentPosition(resolve, reject)
    //     );
    // }


    // const getLocation = async () => {
    //     console.log('hello');
    //     try {
    //         const position = await getGeolocation();
    //         console.log(position);
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }

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
                    // disabled={subject === 'No Class' ? true : false}
                    >
                        Present
                    </Button>


                    <Button
                        variant="outlined"
                        disabled={subject === 'No Class' ? true : false}
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
                        <DialogTitle style={{ textAlign: 'center' }}>
                            {"Great your Attendence has been marked"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Icons
                                {/* {
                                    location.loaded
                                        ?
                                        <>
                                            JSON.stringify(location)
                                        </>
                                        :
                                        "Location data not available yet."
                                } */}
                                <span>{userLocation}</span>


                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                                Thanks
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            }
        </>
    )
}

export default SubjectAtten