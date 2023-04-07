import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from './reducer'



// Data layer
export const TimeTableStateContext = createContext();

// Provider
export const TimeTableStateProvider = (props) => {
    return (
        < TimeTableStateContext.Provider value={useReducer(reducer, initialState)} >
            {props.children}
        </ TimeTableStateContext.Provider >
    )
}

// this is used inside the components
export const useTimeTableStateValue = () => useContext(TimeTableStateContext);