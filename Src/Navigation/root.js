import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from '../Screens/home';
// import Palette from '../Screens/pallete';
import routes from "../common/routes";
import TodoPage from '../Screens/TodoPage';
const stack=createNativeStackNavigator();

const Root = () => {
    return (
        <stack.Navigator>
       <stack.Screen name={routes.home} component={Home} 
       options={{
        headerTitle:"Users Dashboard",
        // header:()=>null
        headerStyle:{backgroundColor:"purple"},
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerTitleStyle:{
            fontSize:25
        }
       }}></stack.Screen>
       <stack.Screen  options={{
        headerTitle:"My ToDo List",
        // header:()=>null
        headerStyle:{backgroundColor:"purple"},
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerTitleStyle:{
            fontSize:25
        }
       }}  name={routes.todo} component={TodoPage}></stack.Screen>

</stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;