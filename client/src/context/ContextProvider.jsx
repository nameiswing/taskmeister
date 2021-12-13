import React, { useContext, useState } from "react";

const Data = React.createContext();
export const useDataContext = () => useContext(Data);

//CONTEXT PROVIDER COMPONENT
const Context = ({ children }) => {

    const [ state, setState ] = useState('Hello World!'); //sample state only

    const allStates = {
        state, setState
    };
    
    return (
        <Data.Provider value={allStates}>
            { children }
        </Data.Provider>
    )
}

export default Context


//NOTES:
// If there's a state that you think will be used by many components, add them inside the function using the useState hook.
// For the state to be successfully used, put that state inside the allStates object including the "set" function.