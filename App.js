import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackdetaileScreen from './src/screens/TrackdetaileScreen';
import TracklistScreen from './src/screens/TracklistScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function  LoginSignup(){
  return(
    <Stack.Navigator>
       <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ headerLeft: ()=> null}}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
      />
    </Stack.Navigator>
  )
} 

function  TrackListDetailes(){
  return(
    <Stack.Navigator>
       <Stack.Screen
        name="TracklistScreen"
        component={TracklistScreen}
        options={
          {
            headerShown: false,
            headerLeft: ()=> null
          }
        }/>
       <Stack.Screen
        name="TrackdetaileScreen"
        component={TrackdetaileScreen} />
    </Stack.Navigator>
  )
} 

function BottomScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackCreateScreen"
        component={TrackCreateScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'TrackCreateScreen',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="new-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="TrackListDetailes"
        component={TrackListDetailes}
        options={{
          headerShown: false,
          tabBarLabel: 'TrackListDetailes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="details" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'AccountScreen',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginSignup"
          component={LoginSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomScreen"
          component={BottomScreen}
          options={{ headerLeft: ()=> null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
