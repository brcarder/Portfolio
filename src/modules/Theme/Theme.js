import * as React from "react";
import {useState} from "react";
import {ThemeProvider} from "styled-components";
import Themes from "src/modules/Theme/ThemeConfig"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useEffect} from "react";

const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => {console.log("hello!")}
});

/**
 * Wraps the theme provided from styled components and adds
 * our light/dark functionality
 *
 * @param children
 * @returns {*}
 * @constructor
 */
const ApplicationThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        if (prefersDark) {
            setTheme("dark");
        }
    },[prefersDark, setTheme]);

    const toggleTheme = () => {
        if(theme === "light"){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={Themes[theme] || Themes.light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};

export {ApplicationThemeProvider, ThemeContext};
