import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Animated,
  Linking,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import useAxios from 'axios-hooks';
import { Box, Center,VStack } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Progress } from 'native-base';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext.js/themeContext';
const Details = ({ route }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    transparentLayer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the transparency as needed
      zIndex: 1, // Adjust the zIndex to make it appear above other components
    },

    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    detailsContainer: {
      width: '100%',
      backgroundColor: 'black',
    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
    },
    detailTitle: {
      marginRight: 10,
      width: 100,
      fontFamily: 'PlayfairDisplay-Bold',
    },
    detailText: {
      flex: 1,
    },
  });

  const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d0f3a',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
    },
    detailsContainer: {
      width: '100%',
      backgroundColor: '#3f51b5',
    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
    },
    detailTitle: {
      marginRight: 10,
      width: 100,
      fontFamily: 'PlayfairDisplay-Bold',
    },
    detailText: {
      flex: 1,
    },
  });

  const [clickedIcon, setClickedIcon] = useState(null);
const [isclicked, setisclicked] = useState(false)

  

  const styles = !isDarkTheme ? lightStyles : darkStyles;

// const handleViewClick = () => {
//   setIsClicked(!isClicked);
// }; 
  const { id } = route.params;
  const [{ data, loading, error }] = useAxios({
    url: `https://jsonplaceholder.typicode.com/users/${id}`,
  });
  const [user, setUser] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const handleEmailPress = () => {
    const email = 'Leanne@gmail.com';
    const subject = 'Hello';
    const body = 'Dear recipient,';

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl);
  };
  useEffect(() => {
    if (data) {
      setUser(data);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [data]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3f51b5" />
      </View>
    );
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '32%',
          width: '100%',
          alignItems: 'center',
          borderBottomRightRadius: 120,
          backgroundColor: isDarkTheme? "lightgrey": 'white',
          borderBottomLeftRadius: 120,
        }}
      >
        <View
          header
          bordered
          style={{
            backgroundColor: isDarkTheme? '#3f51b5':'#ca5aa3',
            alignItems: 'center',
            padding: '2%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            width: '90%',
            marginTop: 5,
            flexDirection: 'row',
          }}
        >
          <Ionicons
            style={{ marginRight: 5 }}
            name="person-circle-outline"
            color="white"
            size={30}
          />
          <Text
            style={{
              color: 'white',
              fontFamily: 'PlayfairDisplay-Bold',
              fontSize: 15,
            }}
          >
            User Information
          </Text>
        </View>
        <View
          style={{
            backgroundColor: isDarkTheme? "lightgrey": 'white',

            padding: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: '90%',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>ID: </Text>
            <Text style={styles.detailText}> {user ? user.id : ''} </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Name:</Text>
            <Text style={styles.detailText}>{user ? user.name : ''}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Address:</Text>
            <Text style={styles.detailText}>
              {user ? user.address.street : ''}
            </Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailTitle}>Company:</Text>
            <Text style={styles.detailText}>
              {user ? user.company.name : ''}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '90%',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 20,
          marginTop: 15,
          padding: 9,
          marginBottom: 5,
        }}
      >
        <Center w="100%">
          <Box w="90%" maxW="400">
            <VStack space="md">
              <VStack mx="4" space="sm">
                <Text style={{ fontSize: 12 }}>Last 7 days</Text>
                <Progress colorScheme="primary" value={35} />
                <Text style={{ fontSize: 12 }}>Last 14 days</Text>
                <Progress colorScheme="secondary" value={45} />
                <Text style={{ fontSize: 12 }}>Last 30 days</Text>
                <Progress colorScheme="emerald" value={55} />
                <Text style={{ fontSize: 12 }}>Last 2 months</Text>
                <Progress colorScheme="warning" value={65} />
              </VStack>
            </VStack>
          </Box>
        </Center>
      </View>
      <View
        style={{
          backgroundColor: isDarkTheme? 'darkorange': '#f48574',
          width: '80%',
          height: 32,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
          Overall Performance
        </Text>
      </View>
      <View style={{ position: 'relative', height: 80, width: '100%' }}>
        <View
          style={{
            backgroundColor: isDarkTheme? '#3f51b5': '#c95ba2',
            width: '100%',
            height: 90,
            position: 'absolute',
            top: 0,
            zIndex: 0,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              marginLeft: 150,
              marginTop: 6,
            }}
          >
            Contact User
          </Text>
        </View>
        <View
          style={{
              backgroundColor: isDarkTheme? "lightgrey": 'white',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            width: '100%',
            height: 150,
            position: 'absolute',
            top: 0,
            zIndex: 1,
              shadowColor: '#000',
            marginTop: 35,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >

{/* <TouchableOpacity onPress={handleViewClick}> */}

          <View 
            style={{
              width: '30%',
              backgroundColor: isDarkTheme? "lightgrey": 'white',
              borderRadius: 20,
              height: '80%',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >


{/* <TouchableOpacity onFocus={()=>setIsClicked(true)}> */}
<Ionicons
  onPress={() => {
      setisclicked(true); // Move this line outside of the onPress event handler
    // setClickedIcon('mail');
    const RecEmail = user && user.email ? user.email : '';
    const RecName = user && user.name ? user.name : '';
    if (RecEmail) {
      const subject = 'Greetings,';
      const body = `Dear recipient, ${RecName}`;
      const mailtoUrl = `mailto:${RecEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      Linking.openURL(mailtoUrl);
    }
  }}
  name="mail"
  size={isclicked? 40 :30}
  color="#0d0f3a"
/>



            <Text>Email</Text>
            {/* {isClicked && <View style={styles.transparentLayer} />} */}

          </View>


          <View
            style={{
              width: '30%',
              backgroundColor: isDarkTheme? "lightgrey": 'white',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              height: '80%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Ionicons
              onPress={(RecNumber) => 
              {
                setClickedIcon('phone');
                user ? user.phone : '';
                user.phone = RecNumber;

                const supported = Linking.canOpenURL(`tel:${RecNumber}`);
                if (supported) {
                  Linking.openURL(`tel:${RecNumber}`);
                  // setClickedIcon(null); 
                }
              }

              }
              name="call"
              size={clickedIcon === 'phone' ? 40 : 30} // Apply bigger size if the clicked icon's name is 'mail'
              color="#0d0f3a"

            />
            <Text>Call</Text>
          </View>

          <View
            style={{
              width: '30%',
              backgroundColor: isDarkTheme? "lightgrey": 'white',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              height: '80%',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Ionicons
              onPress={() => {
               
                setClickedIcon('web');
                Linking.openURL(
                  'https://abtei-st-hildegard.de/hildegard-von-bingen/'
                );
              }}
              name="globe"
              size={clickedIcon === 'web' ? 40 : 30} 
              color="#0d0f3a"
              
            />
            <Text>Website</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
