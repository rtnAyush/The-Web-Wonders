import React, { useEffect } from 'react'
import '../components/Home/Home.scss'
import Nav from '../components/Home/Nav'
import Attendence from '../components/Home/Attendence'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../context/index/StateProvider'
import LabelBottomNavigation from '../components/Home/LabelBottomNavigation'
import TimeTable from '../components/TimeTable/TimeTable'
import HomeComponent from '../components/Home/HomeComponent'

const Home = () => {

    const navigate = useNavigate()
    const [{ user, currRoute, timeTable }, dispacher] = useStateValue()

    useEffect(() => {

        if (user) {
            navigate('/')

        } else {
            navigate('/auth/login')
        }

        const today = new Date()
        getTodaySubjects(today.getDay())



        // getLocation()

    }, [navigate, user])

    // const fetchUser = async () => {
    //     try {
    //         const { data } = await api.get('/auth/user', {
    //             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    //         });

    //         dispacher({
    //             type: 'SET_USER',
    //             payload: data,
    //         })

    //     } catch (err) {
    //         // console.log(err.message);
    //     }
    // };
    // function getPosition() {
    //     return new Promise((resolve, reject) =>
    //         navigator.geolocation.getCurrentPosition(resolve, reject)
    //     );
    // }

    // const getLocation = async () => {
    //     try {
    //         const position = await getPosition();
    //         console.log(position.coords.latitude);
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // }



    const getTodaySubjects = (today) => {
        switch (today) {
            case 1:
                dispacher({
                    type: 'SET_TODAY_TABLE',
                    payload: timeTable.mon,
                })
                break;
            case 2:
                dispacher({
                    type: 'SET_TODAY_TABLE',
                    payload: timeTable.tue,
                })
                break;
            case 3:
                dispacher({
                    type: 'SET_TODAY_TABLE',
                    payload: timeTable.wed,
                })
                break;
            case 4:
                dispacher({
                    type: 'SET_TODAY_TABLE',
                    payload: timeTable.thu,
                })
                break;
            case 5:
                dispacher({
                    type: 'SET_TODAY_TABLE',
                    payload: timeTable.fri,
                })
                break;
            default:
                break;
        }
    }

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