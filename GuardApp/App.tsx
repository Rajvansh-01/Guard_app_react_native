import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Import screens
import HomeScreen from './screens/HomeScreen';
import ShiftsScreen from './screens/ShiftsScreen';
import CheckpointsScreen from './screens/CheckpointsScreen';
import AlertsScreen from './screens/AlertsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            backgroundColor: '#F8F9FA',
            borderTopWidth: 1,
            borderTopColor: '#E5E5EA',
          },
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            title: 'Guard Dashboard'
          }}
        />
        <Tab.Screen 
          name="Shifts" 
          component={ShiftsScreen}
          options={{
            tabBarLabel: 'Shifts',
            title: 'My Shifts'
          }}
        />
        <Tab.Screen 
          name="Checkpoints" 
          component={CheckpointsScreen}
          options={{
            tabBarLabel: 'Checkpoints',
            title: 'Checkpoints'
          }}
        />
        <Tab.Screen 
          name="Alerts" 
          component={AlertsScreen}
          options={{
            tabBarLabel: 'Alerts',
            title: 'Security Alerts'
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            title: 'My Profile'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}