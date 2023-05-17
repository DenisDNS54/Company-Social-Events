import './styles/Settings.css'
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import ReactSwitch from "react-switch";
import { useThemeContext } from "./context/ThemeContext";

function Settings(props){
    const [theme, setTheme] = useState(false);

    const options=[
        {
            header:{
                name: "Account",
            },

            values: [
                {
                    name: "Account",
                    description: "View and change things in your account",
                    tags: ["account", "username", "password", "email"],
                },

                {
                    name: "Change password",
                    description: "Change your current password",
                    tags: ["password", "change"],
                },
            ],
        },

        {
            header:{
                name: "Appearance",
            },

            values: [
                {
                    name: "Theme",
                    description: "Change your theme between light and dark",
                    tags: ["light", "dark", "theme"],
                },
            ],
        },

        {
            header:{
                name: "Notifications",
            },

            values: [
                {
                    name: "Manage notifications",
                    description: "Change prefferences about incoming notifications",
                    tags: ["notification", "mute"],
                },
            ],
        },
    ]

    const [visibleOptions, setVisibleOptions] = useState(options);

    const onChanging=(e)=>{
        e.preventDefault();
        const value=e.target.value;

        if(value.trim().length === 0){
            setVisibleOptions(options);
            return;
        }

        const returnedItems=[];

        visibleOptions.forEach((option, index)=> {
            const foundOptions = option.values.filter((item) => {
                return (
                    item.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1 
                    || item.description.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1 
                );
            });

            returnedItems[index]={
                header:{
                    name: option.header.name,
                },
                values: foundOptions,
            };

            if(option.header.name.toLocaleLowerCase().search(value.trim().toLowerCase()) !== -1){
                returnedItems[index]={
                    header:{
                        name: option.header.name,
                    },
                    values: options[index].values,
                };
            };
        });

        setVisibleOptions(returnedItems);
    };

    const {contextTheme, setContextTheme} = useThemeContext()

    const [checked, setChecked] = useState(false)
    const handleSwitch = (nextChecked) => {
        setContextTheme((state) => (state === "light" ? "dark" : "light"))
        setChecked(nextChecked)
    };

    return(
        <div className="settings" id={contextTheme}>
            <Navbar/>
            <div className="main">
                <h1>Settings</h1>
                <div className='search-container'><input type="text" className='search-bar' onChange={onChanging} placeholder='Search...'/></div>
                <div className='category-list'>
                    <div className='category-name'>
                    {visibleOptions.map(option => <div key={option.header.name}>
                        <h2>{option.header.name}</h2>
                        <div>
                            {option.values.map((value) => (
                                <div key={value.name}>
                                    <ul className='settings-list'>
                                        <li className='settings-list-item'>
                                            <h3>{value.name}</h3>
                                            <p>{value.description}</p>
                                            {value.name === 'Theme' && (
                                                <div className='switch'>
                                                    <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                                                    <ReactSwitch
                                                        onChange={handleSwitch}
                                                        checked = {checked}
                                                        onColor="#86d3ff"
                                                        onHandleColor="#2693e6"
                                                        handleDiameter={30}
                                                        uncheckedIcon={false}
                                                        checkedIcon={false}
                                                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                        height={20}
                                                        width={48}
                                                        className="react-switch"
                                                        id="material-switch"
                                                    />
                                                </div>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>)}
                </div>
            </div>
            </div>
        </div>
    );
}

export default Settings;