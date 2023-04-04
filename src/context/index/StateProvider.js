import React, { createContext, useReducer, useContext } from "react";

// Data layer
export const StateContext = createContext();

// Provider
export const StateProvider = (props) => {
    return (
        < StateContext.Provider value={useReducer(props.reducer, props.initialState)} >
            {props.children}
        </ StateContext.Provider >
    )
}

// this is used inside the components
export const useStateValue = () => useContext(StateContext);