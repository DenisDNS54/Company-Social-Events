import './styles/Settings.css'
import Navbar from "./components/Navbar";
import React, { useState } from 'react';

function Settings(){
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

    return(
        <div className="settings">
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