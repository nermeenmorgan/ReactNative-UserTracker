import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { ThemeContext } from '../ThemeContext.js/themeContext';


export default function SettingsScreen() {
  const options = [
    { label: 'Light', value: 'Light' },
    { label: 'Dark', value: 'Dark' },
  ];

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
      backgroundColor: '#ffffff',
      padding: 20,
    },

    buttonContainer: {
      marginVertical: 10,
      width: '100%',
      maxWidth: 400,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#4d5fab',
      overflow: 'hidden',
      padding: 20,
    },
    buttonText: {
      color: 'black',
    },
  });

  const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171755',
      padding: 20,
    },

    buttonContainer: {
      marginVertical: 10,
      width: '100%',
      maxWidth: 400,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ffffff',
      overflow: 'hidden',
      padding: 20,
    },
    buttonText: {
      color: 'black',
    },
  });

  const styles = !isDarkTheme ? lightStyles : darkStyles;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <RadioForm formHorizontal={false} animation={true}>
          {options.map((option, index) => (
            <RadioButton labelHorizontal={true} key={index}>
              <RadioButtonInput
                obj={option}
                index={index}
                isSelected={isDarkTheme ? option.value === 'Dark' : option.value === 'Light'}
                onPress={(value) => handleChangeTheme(value)}
                borderWidth={1} // Set the border width
                borderColor={isDarkTheme ? '#171755' : '#4d5fab'} // Set the border color
                buttonInnerColor={isDarkTheme ? '#171755' : '#4d5fab'}
                buttonOuterColor={"#4d5fab"}
                buttonSize={20}
                buttonOuterSize={24}
              />
              <RadioButtonLabel
                obj={option}
                index={index}
                labelHorizontal={true}
                onPress={(value) => handleChangeTheme(value)}
                labelStyle={{
                  color: isDarkTheme ? '#171755' : 'black',
                  marginLeft: 10,
                  fontSize: 18,
                }}
                labelWrapStyle={{ flex: 1 }}
              />
            </RadioButton>
          ))}
        </RadioForm>
      </View>
    </View>
  );
}