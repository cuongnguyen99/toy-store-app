import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoryListScreen from '../screens/CategoryListScreen';
import ListProductScreen from '../screens/ListProductScreen';

const FeedStack = createNativeStackNavigator();

function FeedNavigation({route}) {
    const item = route.params;
    
    return (
        <FeedStack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <FeedStack.Screen name="ProductList" component={ListProductScreen} initialParams={{item: item}}
                options={{
                    title: "Sản phẩm",
                    headerShown: true,
                    headerTitleAlign: 'center'
                }}
            />
        </FeedStack.Navigator>
    );
}

export default FeedNavigation;