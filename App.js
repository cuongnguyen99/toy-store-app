import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './navigations/AuthNavigation';
import OfflineNotice from './components/common/OfflineNotice';
import AuthContext from './auth/context';
import AppNavigation from './navigations/AppNavigation';

import {Category} from './components/lists';
import Screen from './screens/Screen';
import Paypal from './screens/Paypal';
import SearchScreen from './screens/SearchScreen';

export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice/>
      <NavigationContainer>
        {user ? <AppNavigation/>:<AuthNavigation/>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}