
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from 'native-base';
import Root from "./Src/Navigation/root";
import * as Font from 'expo-font';
import  { useEffect, useState } from 'react';
import ThemeProvider from "./Src/ThemeContext.js/themeContext";

export default function App() {
 
  async function loadFonts() {
    await Font.loadAsync({
      'PlayfairDisplay-Bold': require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
      'PlayfairDisplay-Regular': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
      'PlayfairDisplay-ExtraBold': require('./assets/fonts/PlayfairDisplay-ExtraBold.ttf'),
      'PlayfairDisplay-Italic': require('./assets/fonts/PlayfairDisplay-Italic.ttf'),
    });
  }

  useEffect(() => {
    loadFonts();
  }, []);
 
  return (
    <ThemeProvider>
    <NativeBaseProvider>
    <NavigationContainer>
   <Root></Root>
    </NavigationContainer>
    </NativeBaseProvider>
    </ThemeProvider>
  );
}



