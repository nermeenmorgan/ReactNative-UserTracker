import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet} from 'react-native';
import Users from '../Screens/home';
// import Palette from '../Screens/pallete';
import routes from "../common/routes";
// import Details from '../Screens/DetailsPage';
// import Details from '../Screens/Details';
const stack=createNativeStackNavigator();
import Details from '../Screens/DetailsPage';


const Root = () => {
    return (
        <stack.Navigator>
       <stack.Screen name={routes.users} component={Users} 
       options={{
        headerTitle:"Users Dashboard",
        // header:()=>null
        headerStyle:{backgroundColor:"#3f51b5"},
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerTitleStyle:{
            fontSize:25
        }
       }}></stack.Screen>
       <stack.Screen  name={routes.details} component={Details}
        >

       </stack.Screen>

</stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Root;