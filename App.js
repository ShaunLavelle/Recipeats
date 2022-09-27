import React, {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import RootDrawerStack from "./routes/drawer";

SplashScreen.preventAutoHideAsync();

export default function App()
{
    const [appIsReady, setAppIsReady] = useState(false);
    
    useEffect(() =>
    {
        async function prepare()
        {
            try
            {
                await Font.loadAsync({
                    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
                    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
                    'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf')
                });
            } catch(e)
            {
                console.warn(e);
            } finally
            {
                setAppIsReady(true);
            }
        }
        
        prepare();
    }, []);
    
    const onLayoutRootView = useCallback(async() =>
    {
        if(appIsReady)
        {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    
    if(!appIsReady)
    {
        return null;
    }
    
    return (
            <NavigationContainer onReady={onLayoutRootView}>
                <RootDrawerStack/>
            </NavigationContainer>
    );
}