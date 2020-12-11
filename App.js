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
import { createStackNavigator } from '@react-navigation/stack'
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
import TextFile from './screens/TextFile'
import store from './store'

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

// import Login from './screens/Login'
// import Home from './screens/Home'
// import OTP from './screens/OTP'

const Drawer = createDrawerNavigator()

import TabNavigator from './navigation/TabNavigator'
import DrawerNavigation from './navigation/DrawerNavigation'
import ButtonAddDocument from './components/button/ButtonAddDocument'
import ModalAddDocument from './components/modal/ModalAddDocument'

const StackHome = createStackNavigator();
const StackHomeNavigator = () => {
  return (
    <StackHome.Navigator
      initialRouteName={'Home'}
      headerMode={'none'}
    >
      <StackHome.Screen name="Home" component={TabNavigator} />
      <StackHome.Screen name="TextFile" component={TextFile} />
    </StackHome.Navigator>
  )
}

const App = ({ navigation }) => {
  console.log(navigation, 'navigation')
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerNavigation {...props} />}>
          <Drawer.Screen name="StackHomeNavigator" component={StackHomeNavigator} />
        </Drawer.Navigator>
        {/* <StackHomeNavigator /> */}
        {/* <ModalCreateFolder />
        <ButtonAddDocument />
        <ModalAddDocument navigation={navigation} /> */}
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
