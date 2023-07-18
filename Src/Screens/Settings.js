import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { ThemeContext } from "../ThemeContext.js/themeContext";
import { Text } from "native-base";

export default function SettingsScreen() {
  const options = [
    { label: 'Light', value: 'Light' },
    { label: 'Dark', value: 'Dark' }
  ]; // create options for radio group

  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleChangeTheme = (value) => {
    if (value === 'Light') {
      setIsDarkTheme(false);
    } else if (value === 'Dark') {
      setIsDarkTheme(true);
    }
  };

  const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      padding: 20,
    },
    
    buttonContainer: {
      marginVertical: 10,
      width: "100%",
      maxWidth: 400,
      backgroundColor: "#ffffff",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#4d5fab",
      overflow: "hidden",
      padding:20
    },
    buttonText: {
      color: "black",
    },
  });

  const darkStyles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#171755",
      padding: 20,
      
    },
   
    buttonContainer: {
      marginVertical: 10,
      width: "100%",
      maxWidth: 400,
      backgroundColor: "white",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ffffff",
      overflow: "hidden",
      padding:20,
    },
    buttonText: {
      color: "black",
    },
  });

  const styles = !isDarkTheme ? lightStyles : darkStyles;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <RadioForm
          radio_props={options}
          initial={0}
          onPress={(value) => handleChangeTheme(value)}
          buttonColor={"#4d5fab"}
          selectedButtonColor={"#171755"}
          labelStyle={{ color: isDarkTheme?"#171755":"black", marginLeft: 10, fontSize:18 }}
          animation={true}
        />
      </View>
      {/* <View style={styles.buttonContainer}>
        <RadioForm
          radio_props={options}
          initial={isDarkTheme ? 1 : 0}
          onPress={(value) => handleChangeTheme(value)}
          buttonColor={"#4d5fab"}
          selectedButtonColor={isDarkTheme?"#171755":"white"}
          labelStyle={{ color: isDarkTheme?"white":"black", marginLeft: 10 }}
          animation={true}
        />
      </View> */}
    </View>
  );
}