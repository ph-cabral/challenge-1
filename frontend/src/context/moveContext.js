import React, { createContext, useState, useContext } from 'react'

export const ThemeContext = createContext({ theme: 'there' })

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState('there')

    const toggleTheme = () => {

        if (theme === 'there') {
            setTheme('here')
        } else {
            setTheme('there')
        }
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }} >
            {children}
        </ThemeContext.Provider>
    )
}

//Custom hook
export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeProvider')
    }
    return context
}
