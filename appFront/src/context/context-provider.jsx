import { createContext, useReducer, useContext } from "react";

export const ReducerContext = createContext()

export const ReducerProvider = ({
    reducer, 
    initialState, 
    children
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <ReducerContext.Provider value={{ state, dispatch }}>
            { children }
        </ReducerContext.Provider>
    )
}