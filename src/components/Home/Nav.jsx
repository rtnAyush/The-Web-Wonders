import React from 'react'
import AccountMenu from './AccountMenu';
import { useStateValue } from '../../context/index/StateProvider';
import { Link } from 'react-router-dom';



const Nav = () => {
    const [{ currRoute }, dispacher] = useStateValue()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand" href="/">SMS</Link>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to={'/'} className={currRoute === 'home' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => { dispacher({ type: 'SET_CURR_ROUTE', payload: 'home' }) }}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className={currRoute === 'attendance' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => { dispacher({ type: 'SET_CURR_ROUTE', payload: 'attendance' }) }}>Mark Attendance</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className={currRoute === 'time-table' ? 'nav-link active' : 'nav-link'} aria-current="page" onClick={() => { dispacher({ type: 'SET_CURR_ROUTE', payload: 'time-table' }) }}>See Time-Table</Link>
                    </li>
                </ul>

                <div className="account__left">
                    <AccountMenu />
                </div>
            </div>
        </nav >
    )
}

export default Nav