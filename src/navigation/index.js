import React from 'react';
import { StatusBar } from 'react-native';
import { Color } from "@common";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { log } from "@common/Tools";

import HomeScreen from '@screens/HomeScreen';

const Stack = createStackNavigator();

function MainNavigation({ navigation }) {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={Color.statusBarColor} />
      <Stack.Navigator
        screenOptions={{ animationEnabled: false }}
        mode='modal'>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
              headerTitle: 'HOME',
              headerStyle: { elevation:10, backgroundColor:Color.headerColor },
              headerTintColor: '#ffffff',
              headerLeft: null
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
