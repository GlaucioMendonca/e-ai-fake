import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './views/HomeScreen'
import ResultScreen from './views/ResultScreen'

const Stack = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name = "home"
          component= {HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name = "resultScreen"
          component = {ResultScreen}
          options={{ title: 'Result' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myStack