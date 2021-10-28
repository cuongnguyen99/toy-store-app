import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountNavigation from '../navigations/AccountNavigation';
import color from '../config/colors';
import CategoryNavigation from './CategoryNavigation';

const Tab = createBottomTabNavigator();

function MainNavigation(props) {
    return (
        <Tab.Navigator 
          screenOptions={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
          }}
        >
          <Tab.Screen name="Home" component={CategoryNavigation}
            options={{
              title: "Trang chủ",
              headerTitleAlign: 'center',
              tabBarIcon: ({focused}) => (<MaterialCommunityIcons color={color} name="home" size={30}
                style={{
                  color: focused ? color.primary : color.sub_text
                }}
              />),
            }}
          />
          <Tab.Screen name="Account" component={AccountNavigation}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (<MaterialCommunityIcons name="account" size={30}
                style={{
                  color: focused ? color.primary : color.sub_text
                }}
              />),
            }}
          />
        </Tab.Navigator>
    );
}

export default MainNavigation;