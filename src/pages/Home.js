import React, { useEffect } from 'react'
import '../components/Home/Home.scss'

import Attendence from '../components/Home/Attendence'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../context/index/StateProvider'
import LabelBottomNavigation from '../components/Home/LabelBottomNavigation'
import TimeTable from '../components/TimeTable/TimeTable'
import HomeComponent from '../components/Home/HomeComponent'

import StudentDataService from '../services/student.service'
import TableDataService from '../services/table.service'





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


    }, [])




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




    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">Navbar</Link>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='home'>
                {/* {
                    students.stringify()
                } */}
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