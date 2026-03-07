import {ThemeContext} from "./ThemeContext"
import { useState } from "react"

export const ThemeProvider = ({children}) => {
    const [dark, setDark] =useState(true);
    return(
    <ThemeContext.Provider value={{dark, setDark}}>
        {children}
    </ThemeContext.Provider>
    )
}