import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountNavigation from '../navigations/AccountNavigation';
import color from '../config/colors';
import CategoryNavigation from './CategoryNavigation';
import CartScreen from '../screens/CartScreen';
import PaymentNavigation from './PaymentNavigation';
import CategoryListScreen from '../screens/CategoryListScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

function MainNavigation(props) {
    return (
        <Tab.Navigator 
          screenOptions={{
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
          }}
        >
          <Tab.Screen name="Home" component={CategoryListScreen}
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
          <Tab.Screen name="Search" component={SearchScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (<MaterialCommunityIcons color={color} name="shopping-search" size={30}
                style={{
                  color: focused ? color.primary : color.sub_text
                }}
              />),
            }}
          />
          <Tab.Screen name="Cart" component={CartScreen} 
            options={{
              title: "Giỏ hàng",
              headerTitleAlign: 'center',
              tabBarIcon: ({focused}) => (<MaterialCommunityIcons color={color} name="cart-outline" size={30}
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