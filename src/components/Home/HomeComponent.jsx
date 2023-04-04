import React from 'react'
import AccountMenu from './AccountMenu'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';


const HomeComponent = () => {
    return (
        <div className="home__block">
            <div className="home__nav">
                <AccountMenu />
            </div>
            <div className="attendence__card">
                Your Attendence
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