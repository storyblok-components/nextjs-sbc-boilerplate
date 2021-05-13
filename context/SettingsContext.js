import React, {createContext, useEffect, useState} from 'react'
import {getAllSettings} from '../lib/storyblok-gapi'


const defaultValue = {
    settings: {},
    setSettings: () => null
}

export const SettingsContext = createContext(defaultValue);

const SettingsContextProvider = ({children}) => {
    const [settings, setSettings] = useState(defaultValue.settings)

    useEffect(() => {
        (async () => {
            console.log("all settings")
            const allSettings = await getAllSettings()
            console.log(allSettings)
            setSettings(allSettings?.SettingsItems?.items[0])
        })()
    }, [])

    return (
        <SettingsContext.Provider value={{settings, setSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsContextProvider
