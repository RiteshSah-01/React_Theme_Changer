import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {
    
    const{themeMode,lightTheme,darkTheme}=useTheme()
    const onChangeBtn=(e)=>{
        const darkModeStatus=e.currentTarget.checked
        if(darkModeStatus)
            darkTheme()
        else
        {
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
            />
            <div className="w-11 h-6 py-0.5 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-50 px-0.5 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-md font-semibold bg-black px-2 py-2 rounded-xl text-amber-200 underline">Toggle Theme</span>
        </label>
    );
}

