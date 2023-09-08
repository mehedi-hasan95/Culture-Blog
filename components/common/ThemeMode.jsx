"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
const ThemeMode = () => {
    const { mode, toggle, setMode } = useContext(ThemeContext);
    useEffect(() => {
        const savedMode = localStorage.getItem("themeColor");
        if (savedMode) {
            setMode(savedMode);
        }
    }, [setMode]);
    return (
        <div
            onClick={toggle}
            className="relative flex gap-2 items-center bg-slate-500 dark:bg-gray-300 rounded-full px-1 py-1 cursor-pointer bg-contain w-11 md:w-auto"
        >
            <BsMoonFill className="text-yellow-300" />
            <div
                className={`bg-gray-200 dark:bg-gray-500 h-4 w-4 rounded-full absolute ${
                    mode === "light" ? "left-1" : "right-1"
                }`}
            ></div>
            <BsSunFill className="text-yellow-300" />
        </div>
    );
};

export default ThemeMode;
