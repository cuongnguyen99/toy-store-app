import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CategoryListScreen from '../screens/CategoryListScreen';
import color from '../config/colors';
import LoadingIndicator from '../components/lists/LoadingIndicator';
import TopLoadingIndicator from '../components/lists/TopLoadingIndicator';

import cache from '../utility/cache';

const Tab = createMaterialTopTabNavigator();


function CategoryNavigation() {
    const maleUrl = "https://6171698bc20f3a001705fcb1.mockapi.io/api/male";
    const femaleUrl = "https://6171698bc20f3a001705fcb1.mockapi.io/api/female";
    const [isLoading, setLoading] = useState(true);
    const [male, setMales] = useState([]);
    const [female, setFemales] = useState([]);

    // Get list male category
    const getDatas = async () => {
        try{
            const res1 = await fetch(maleUrl);
            const data1 = await res1.json();
            
            const res2 = await fetch(femaleUrl);
            const data2 = await res2.json();

            setMales(data1);
            setFemales(data2);
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(function() {
                setLoading(false);
            }, 2000);
        }
    }

    useEffect( () => {
        getDatas();

    }, [])
    if(isLoading){
        return <LoadingIndicator 
            style visible={isLoading}
        />
    }

    return (
        !isLoading && (<Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: color.primary,
                tabBarInactiveTintColor: color.sub_text,
                tabBarLabelStyle: {
                    fontSize: 16,
                    fontWeight: "bold"
                },
                
            }}
        >
            <Tab.Screen name="Male" component={CategoryListScreen} initialParams={{item: male}} 
                options={{gestureDirection: "horizontal"}}
            />
            <Tab.Screen name="Female" component={CategoryListScreen} initialParams={{item: female}}/>
        </Tab.Navigator>)
    );
}

export default CategoryNavigation;