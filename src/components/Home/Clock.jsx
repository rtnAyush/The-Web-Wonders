import React from 'react'
import Time from 'react-live-clock';


const Clock = () => {
    return (
        <div className="clock">
            <div className="time">

                <Time format={'hh:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} />

                <span className="a">

                    <Time format={'A'} ticking={true} timezone={'Asia/Calcutta'} />

                </span>
            </div>
            <div className="date">
                <Time format={'dddd, MMMM Do YYYY'} ticking={true} timezone={'Asia/Calcutta'} />
            </div>
        </div>
    )
}

export default Clock