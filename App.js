/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
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
import { Provider, useDispatch, useSelector } from 'react-redux'
import ModalCreateFolder from './components/modal/ModalCreateFolder'
import TextFile from './screens/TextFile'
import ImageFile from './screens/ImageFile'
import GeneralFile from './screens/GeneralFile'

import store from './store'

const Drawer = createDrawerNavigator()

import TabNavigator from './navigation/TabNavigator'
import DrawerNavigation from './navigation/DrawerNavigation'
import ButtonAddDocument from './components/button/ButtonAddDocument'
import ModalAddDocument from './components/modal/ModalAddDocument'
import Login from './screens/Login'
import { checkAutoLogin } from './store/action/auth'

const StackHome = createStackNavigator();
const StackHomeNavigator = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkAutoLogin()).then((result) => {
    }).catch((err) => {
      try {
        navigation.navigate('Login')
      } catch (error) {
        console.log(error, 'eror')
      }
    });
  }, [])
  return (
    <StackHome.Navigator
      initialRouteName={'Home'}
      headerMode={'none'}
    >
      <StackHome.Screen name="Login" component={Login} />
      <StackHome.Screen name="Home" component={TabNavigator} />
      <StackHome.Screen name="TextFile" component={TextFile} />
      <StackHome.Screen name="ImageFile" component={ImageFile} />
      <StackHome.Screen name="GeneralFile" component={GeneralFile} />
    </StackHome.Navigator>
  )
}

const App = ({ navigation }) => {
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
