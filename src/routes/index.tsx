import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Followers, Following, Profile, ProfileDetail} from '../screens';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="Following" component={Following} />
    </Stack.Navigator>
  );
};

export default Routes;
