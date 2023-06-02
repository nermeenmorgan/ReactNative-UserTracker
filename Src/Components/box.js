import React,  { useState }  from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Styles from "./BoxStyle";
import { CheckBox } from 'react-native-elements';
const Box = ({txt}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };
  
    return (
        // <View style={{...Styles.container,backgroundColor:hexCode}}>

        null
    );
}



export default Box;