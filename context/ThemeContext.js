"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");
    const toggle = () => {
        const storedMode = mode === "dark" ? "light" : "dark";
        setMode(storedMode);
        localStorage.setItem("themeColor", storedMode);
    };

    return (
        <ThemeContext.Provider value={{ mode, toggle, setMode }}>
            <div className={`${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
