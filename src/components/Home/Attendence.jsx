import React, { useEffect, useState } from 'react'
import Clock from './Clock';
import { useStateValue } from '../../context/index/StateProvider';
import SubjectAtten from './SubjectAtten';
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';


const Attendence = () => {
    const [{ todayTable }, dispacher] = useStateValue()

    const [currClass, setCurrClass] = useState({})

    const [refresh, setRefresh] = useState('')

    useEffect(() => {

        selectSubject()
        // console.log('i am clicked');
    }, [refresh])



    const handleRefresh = () => {

        let randomNum = Math.floor(Math.random() * 10000)
        setRefresh(randomNum)
        window.location.reload();
        dispacher({
            type: 'SET_CURR_ROUTE',
            payload: 'attendance',
        })
    }


    const selectSubject = () => {
        const currDate = new Date()

        const currTime = currDate.getHours() + ":" + currDate.getMinutes();


        const found = todayTable?.filter((val) => {
            return (val.startTime <= currTime && val.endTime >= currTime)
        })

        if (found.length !== 0) {

            const [obj] = found

            setCurrClass(obj)
        } else {
            setCurrClass({
                subject: 'break Time'
            })
        }
    }

    return (
        <>
            <div className="attendence__block">
                <Clock />

                <SubjectAtten
                    subject={currClass.subject}
                    startTime={currClass.startTime}
                    endTime={currClass.endTime}
                />

            </div>

            <div className="float__aside">
                <Fab color="primary" aria-label="add" onClick={handleRefresh}>
                    <RefreshIcon />
                </Fab>
            </div>
        </>
    )
}

export default Attendence