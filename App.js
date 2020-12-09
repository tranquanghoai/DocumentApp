/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import { Provider } from 'react-redux';

import ModalCreateFolder from './components/modal/ModalCreateFolder'

import store from './store'

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

// import Login from './screens/Login'
// import Home from './screens/Home'
// import OTP from './screens/OTP'

const Drawer = createDrawerNavigator()

import TabNavigation from './navigation/TabNavigation'
import DrawerNavigation from './navigation/DrawerNavigation'
import ButtonAddDocument from './components/button/ButtonAddDocument'
import ModalAddDocument from './components/modal/ModalAddDocument'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerNavigation {...props} />}>
          <Drawer.Screen name="TabNavigation" component={TabNavigation} />
        </Drawer.Navigator>
        <ModalCreateFolder />
        <ButtonAddDocument />
        <ModalAddDocument />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
