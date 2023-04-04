import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PanToolIcon from '@mui/icons-material/PanTool';
import HomeIcon from '@mui/icons-material/Home';
import { useStateValue } from '../../context/index/StateProvider';
import EventNoteIcon from '@mui/icons-material/EventNote';




export default function LabelBottomNavigation() {

    const [{ currRoute }, dispacher] = useStateValue()


    const handleChange = (event, newValue) => {


        dispacher({
            type: 'SET_CURR_ROUTE',
            payload: newValue,
        })


    };

    return (
        <BottomNavigation value={currRoute} onChange={handleChange} style={{ color: '#fff' }}>
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="Attendance"
                value="attendance"
                icon={<PanToolIcon />}
            />
            <BottomNavigationAction
                label="Time Table"
                value="time-table"
                icon={<EventNoteIcon />}
            />

        </BottomNavigation>
    );
}