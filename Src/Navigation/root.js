// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import { StyleSheet} from 'react-native';
// import Users from '../Screens/home';
// // import Palette from '../Screens/pallete';
// import routes from "../common/routes";
// // import Details from '../Screens/DetailsPage';
// // import Details from '../Screens/Details';
// const stack=createNativeStackNavigator();
// import Details from '../Screens/DetailsPage';
// import Update from '../Screens/update';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import { NavigationContainer } from '@react-navigation/native';
// import OverallPerformanceScreen from './OverallPerformanceScreen';
// import AnalyticalPerformanceScreen from './AnalyticalPerformanceScreen';

// // Create a drawer navigator
// const Drawer = createDrawerNavigator();


// const Root = () => {
//     return (
//         <stack.Navigator>
//        <stack.Screen name={routes.users} component={Users} 
//        options={{
//         headerTitle:"UserTracker",
//         headerStyle:{backgroundColor:"black", fontFamily: 'PlayfairDisplay-Bold', fontSize: 16},
//         headerTintColor:"white",
//         headerTitleAlign:"center",
//         headerTitleStyle:{
//             fontSize:25
//         }
//        }}></stack.Screen>
//        <stack.Screen  name={routes.details} component={Details}>
//       
//        </stack.Screen>
//        <stack.Screen  name={routes.update} component={Update}></stack.Screen>
// </stack.Navigator>
//     );
// }



// export default Root;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';
import SplashScreen from "../Screens/splashScreen";
import React, { useEffect, useState } from 'react';
import routes from "../common/routes";
import Details from '../Screens/DetailsPage';
// import Update from '../Screens/update';
import Users from "../Screens/home";
import SignUp from "../Screens/SignIn";
import SignIn from "../Screens/SignIn";
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from "../Screens/Settings";
import { ThemeContext } from "../ThemeContext.js/themeContext";
import { useContext } from "react";
// import { background } from "native-base/lib/typescript/theme/styled-system";
// import UpdateScreen from "../Screens/UpdateScreen";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function MyTabs() {
  const {isDarkTheme} = useContext(ThemeContext)

  // const [mode, setMode] = useState(theme);
 

// const {userData} = useContext(DataContext)
const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 6000); // Change the duration of the splash screen here
}, []);

if (loading) {
  return <SplashScreen />;
}
  return (
    <Tab.Navigator>
      {/* Home Tab  */}
      <Tab.Screen name='Home' options={{
        tabBarStyle:{backgroundColor:isDarkTheme?"#0d0f3a":"white", height:"8%"},
        tabBarLabelStyle: {
      color: isDarkTheme ? "white" : "#112D4E",
    },
       
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Ionicons name="home" size={24}  color={isDarkTheme?"white":"#112D4E"} />
      }} >

        {() => (
          <Stack.Navigator screenOptions={{
  headerTintColor: isDarkTheme? 'white':'black',
  headerStyle: {
    backgroundColor: isDarkTheme? 'black':'white',
  },
}}>
           {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen name="users" component={Users}
       options={{
        headerTitle:"Users",
       
    //     headerLeft: () => (
    //   <Ionicons
    //     name="home"
    //     size={24}
    //     color="black"
    //     style={{ marginLeft: 10 }}
    //     onPress={toggleDarkMode}
    //   />
    // ),
        headerStyle:{backgroundColor:isDarkTheme? '#0d0f3a':'white',  fontFamily: 'PlayfairDisplay-Bold', fontSize: 16},
        headerTintColor:!isDarkTheme? 'black':'white',
        headerTitleAlign:"center",
        headerTitleStyle:{
            fontSize:25
        }
       }} />
            {/* <Stack.Screen name="Sign up" component={SignUp} />
            <Stack.Screen name ="Sign In"  component={SignIn}/> */}
            <Stack.Screen options={{ headerStyle:{backgroundColor:isDarkTheme? '#0d0f3a':'white',  fontFamily: 'PlayfairDisplay-Bold', fontSize: 16},
        headerTintColor:!isDarkTheme? 'black':'white',
        headerTitleAlign:"center",
        headerTitleStyle:{
            fontSize:25
        }
        }}  name='Details' component={Details}/>
            {/* <Stack.Screen  name='update' component={UpdateScreen}/> */}
        
          </Stack.Navigator>
        )}
      </Tab.Screen>

      {/* Settings Tab  */}
      <Tab.Screen name="settings" options={{
        tabBarStyle:{backgroundColor:isDarkTheme?"#0d0f3a":"white", height:"8%"},
        tabBarLabelStyle: {
        
      color: isDarkTheme ? "white" : "#112D4E",
    },
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Ionicons  name="settings-outline" size={size} color={isDarkTheme?"white":"#112D4E"} />
        
      }}>
        {() => (
          <Stack.Navigator screenOptions={{
            headerTintColor:  'white',
            headerStyle: {
              backgroundColor: 'black',
            }
          }}>
        
            <Stack.Screen options={{ headerStyle:{backgroundColor:isDarkTheme? '#0d0f3a':'white',  fontFamily: 'PlayfairDisplay-Bold', fontSize: 16},
        headerTintColor:!isDarkTheme? 'black':'white',
        headerTitleAlign:"center",
        headerTitleStyle:{
            fontSize:25
        }
        }} name="setting"  component={SettingsScreen} />
            {/* <Stack.Screen name="setting" component={Details} /> */}

          </Stack.Navigator>
        )}
      </Tab.Screen> 

    </Tab.Navigator>
  );
}