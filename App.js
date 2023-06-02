import {
  SafeAreaView,
  Text,
  TextInput,
  Platform,
  Image, 
  SectionList,
  Button,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigation/root";
export default function App() {

  return (
    <NavigationContainer>
   <Root></Root>
    </NavigationContainer>
  );
}