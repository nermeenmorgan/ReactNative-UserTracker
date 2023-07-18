import React, { useEffect, useRef, Suspense } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Canvas, useFrame, useLoader } from "@react-three/fiber/native";
import Box from "./bok";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const logoAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(1000),
    ]).start(() => {
      if (navigation) {
        navigation.navigate("users");
      }
    });
  }, [fadeAnim, logoAnim, navigation]);

  return (
    <>
      <Canvas style={{ backgroundColor: "#171755" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <Box />
        {/* <Suspense fallback={null}> */}
        {/* <mesh position={[0, 2, 0]} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="green" />
          </mesh> */}
        {/* </Suspense> */}
      </Canvas>
      <View style={{ backgroundColor: "#171755" }}>
        <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
            Welcome to
          </Animated.Text>
          <Animated.Image
            source={require("proj/assets/images/logo.png")}
            style={[styles.logo, { transform: [{ scale: logoAnim }] }]}
          />
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4d5fab",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 400,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 27,
    marginTop: 20,
    fontFamily: "PlayfairDisplay-Italic",
    color: "white",
  },
});

export default SplashScreen;
