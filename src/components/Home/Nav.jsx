import React from 'react'
import AccountMenu from './AccountMenu';



const Nav = () => {
    return (
        <div className="home__nav">
            <div className="brand__logo">
                Inside Mess
            </div>
            <div className="avatar">
                <AccountMenu />
            </div>
        </div>
    )
}

export default Nav