import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { MdWbSunny } from "react-icons/md";
import useTheme from '../store/themeStore';
import { IoMoonOutline } from "react-icons/io5";

export default function DarkModeToggle() {
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    if(theme){
      localStorage.setItem("theme", "dark");
    }
    else{
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(!theme);
  }

  return (
    // <button onClick={handleThemeChange}>
    //   {theme ? <MdWbSunny fontSize={20} /> : <IoMoonOutline fontSize={20} />}
    // </button>
    <button className={`theme-toggle relative overflow-hidden ${theme ? "bg-dark-secondary border-dark" : "bg-light-secondary border-light"} border-2 `} id="themeToggle" fdprocessedid="6q7n9k" onClick={handleThemeChange}>
                <span className={`sun-icon absolute text-xl ${theme ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"} transition-all ease-new duration-md`}>☀️</span>
                <span className={`moon-icon absolute text-xl ${theme ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} transition-all ease-new duration-md`}>🌙</span>
            </button>
  );
}
