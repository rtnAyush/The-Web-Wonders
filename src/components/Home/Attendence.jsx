import React, { useEffect, useState } from 'react'
import Clock from './Clock';
import { useStateValue } from '../../context/index/StateProvider';
import SubjectAtten from './SubjectAtten';
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Attendence = () => {
    const [{ todayTable }] = useStateValue()

    const [currClass, setCurrClass] = useState({})
    const [collage, setCollage] = useState('')


    const [refresh, setRefresh] = useState('')

    useEffect(() => {

        selectSubject()
        // console.log('hello');
        // eslint-disable-next-line
    }, [refresh])



    const handleRefresh = () => {

        let randomNum = Math.floor(Math.random() * 10000)
        setRefresh(randomNum)

        window.location.reload();
        // dispacher({
        //     type: 'SET_CURR_ROUTE',
        //     payload: 'attendance',
        // })
    }


    const selectSubject = () => {
        const currDate = new Date()

        let currTime = '11:25'


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




        // console.log(currTime);

        if ((currTime >= '00:00' && currTime < '09:20') || (currTime >= '16:50' && currTime < '23:59') || (currDate.getDay() === 0) || (currDate.getDay() === 6)) {
            // console.log('out of schedule');

            setCollage('End of Working Hour')
        } else {

            const found = todayTable?.filter((val) => {
                return (val.endTime >= currTime && currTime >= val.startTime)
            })

            if (found.length !== 0) {

                const [obj] = found

                setCurrClass(obj)
            }
        }



    }

    return (
        <>
            <div className="attendence__block">
                <Clock />
                {
                    collage === '' ?
                        <SubjectAtten
                            subject={currClass.subject}
                            startTime={currClass.startTime}
                            endTime={currClass.endTime}
                        />
                        :
                        <div className="subject__block">
                            <div className="details">


                                <h1 className='header'>{collage}</h1>

                                <SentimentSatisfiedAltIcon style={{ scale: '2' }} />


                            </div>
                        </div>

                }

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