import React, { createContext, useState } from "react";
import { useColorScheme } from "react-native";
export const ThemeContext = createContext();

export default function ThemeProvider  ({ children }) {
  // const [themeMode, setThemeMode] = useState("light");
  const theme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] =  useState(false)
if(theme ==='dark'){
  setIsDarkTheme(true)
}
  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

