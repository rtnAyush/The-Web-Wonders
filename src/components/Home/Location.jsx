import React from 'react'
import useGeoLocation from '../Hooks/useGeoLocation'

const Location = () => {

    const location = useGeoLocation()


    return (
        <div className='location'>
            {
                location.loaded
                    ? JSON.stringify(location)
                    : "Location data not available yet."
            }
        </div>
    )
}

export default Location