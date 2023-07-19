import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from '../Screens/splashScreen';
import React, { useEffect, useState } from 'react';
import Details from '../Screens/DetailsPage';
import Users from '../Screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/Settings';
import { ThemeContext } from '../ThemeContext.js/themeContext';
import { useContext } from 'react';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function MyTabs() {
  const { isDarkTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#0d0f3a' : 'white',
            height: '8%',
          },
          tabBarLabelStyle: {
            color: isDarkTheme ? 'white' : '#112D4E',
          },

          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={24}
              color={isDarkTheme ? 'white' : '#112D4E'}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: isDarkTheme ? 'white' : 'black',
              headerStyle: {
                backgroundColor: isDarkTheme ? 'black' : 'white',
              },
            }}
          >
            <Stack.Screen
              name="users"
              component={Users}
              options={{
                headerTitle: 'Users',
                headerStyle: {
                  backgroundColor: isDarkTheme ? '#0d0f3a' : 'white',
                  fontFamily: 'PlayfairDisplay-Bold',
                  fontSize: 16,
                },
                headerTintColor: !isDarkTheme ? 'black' : 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 25,
                },
              }}
            />
            <Stack.Screen
              options={{
                headerStyle: {
                  backgroundColor: isDarkTheme ? '#0d0f3a' : 'white',
                  fontFamily: 'PlayfairDisplay-Bold',
                  fontSize: 16,
                },
                headerTintColor: !isDarkTheme ? 'black' : 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 25,
                },
              }}
              name="Details"
              component={Details}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="settings"
        options={{
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#0d0f3a' : 'white',
            height: '8%',
          },
          tabBarLabelStyle: {
            color: isDarkTheme ? 'white' : '#112D4E',
          },
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="settings-outline"
              size={size}
              color={isDarkTheme ? 'white' : '#112D4E'}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator
            screenOptions={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: 'black',
              },
            }}
          >
            <Stack.Screen
              options={{
                headerStyle: {
                  backgroundColor: isDarkTheme ? '#0d0f3a' : 'white',
                  fontFamily: 'PlayfairDisplay-Bold',
                  fontSize: 16,
                },
                headerTintColor: !isDarkTheme ? 'black' : 'white',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 25,
                },
              }}
              name="setting"
              component={SettingsScreen}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
