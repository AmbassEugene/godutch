import * as React from 'react';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SetupScreen} from '../screens/Setup/Setup';
import {DetailsScreen} from '../screens/Details/DetailsScreen';

const Stack = createStackNavigator();

export const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setup" component={SetupScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
