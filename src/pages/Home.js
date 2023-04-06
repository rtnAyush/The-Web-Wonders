import React, { useEffect, useState } from 'react'
import '../components/Home/Home.scss'

import Attendence from '../components/Home/Attendence'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../context/index/StateProvider'
import LabelBottomNavigation from '../components/Home/LabelBottomNavigation'
import TimeTable from '../components/TimeTable/TimeTable'
import HomeComponent from '../components/Home/HomeComponent'

import StudentDataService from '../services/student.service'
import TableDataService from '../services/table.service'
import Nav from '../components/Home/Nav'






const Home = () => {

    const navigate = useNavigate()
    const [{ currRoute }, dispacher] = useStateValue()

    useEffect(() => {



        if (localStorage.getItem('id')) {

            fetchUser()
            navigate('/')

        } else {
            navigate('/auth/login')
        }



        const today = new Date()
        getTodaySubjects(today.getDay())


        // eslint-disable-next-line
    }, [])

    // console.log(user);


    const fetchUser = async () => {
        try {
            const docSnap = await StudentDataService.getStudent(localStorage.getItem('id'));

            dispacher({
                type: 'SET_USER',
                payload: docSnap.data()
            })
        } catch (err) {

            console.log(err);
        }
    };

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


            dispacher({
                type: 'SET_TODAY_TABLE',
                payload: Object.values(obj)[0]
            })

        } catch (err) {

            console.log(err);
        }
    };




    // console.log('temp', temp);
    return (
        <>
            <Nav />
            <div className='home'>
                <div className="home__body">
                    {
                        visiblePage(currRoute)
                    }
                </div>
                <div className="bottom">
                    <LabelBottomNavigation />
                </div>
            </div>
        </>
    )
}

export default Home

const visiblePage = (page) => {

    switch (page) {
        case 'home':
            return <HomeComponent />
        case 'attendance':
            return <Attendence />
        case 'time-table':
            return <TimeTable />
        default:
            return <HomeComponent />
    }
}