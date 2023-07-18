import React, { useState } from "react";
import { View, StyleSheet, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import useAxios from "axios-hooks";

import { Button,  Divider,  Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { NativeBaseProvider, Box,  Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
const Basic =({navigation}) => {
    const data = [{
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Afreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'afreen@gmail.com',
    }, {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      fullName: 'Sujita Mathur',
      timeStamp: '11:11 PM',
      recentText: 'sujita@gmail.com',
    }, {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Anci Barroco',
      timeStamp: '6:22 PM',
      recentText: 'Good Day!',
      avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
    }, {
      id: '68694a0f-3da1-431f-bd56-142371e29d72',
      fullName: 'Aniket Kumar',
      timeStamp: '8:56 PM',
      recentText: 'aniket@gmail.com',
    }, {
      id: '28694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Kiara',
      timeStamp: '12:47 PM',
      recentText: 'kiara@gmail.com',
    },
    {
      id: '38694a0f-3da1-471f-bd96-145331e29d72',
      fullName: 'John Doe',
      timeStamp: '9:30 AM',
      recentText: 'john@gmail.com',
    },
    {
      id: '48694a0f-3da1-471f-bd96-145414e29d72',
      fullName: 'Jane Smith',
      timeStamp: '3:15 PM',
      recentText: 'jane@gmail.com',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      fullName: 'Michael Johnson',
      timeStamp: '7:45 AM',
      recentText: 'michael@gmail.com',
    },
    {
      id: '68694a0f-3da1-471f-bd96-142371e29d72',
      fullName: 'Emily Brown',
      timeStamp: '5:20 PM',
      recentText: 'emily@gmail.com',
    },
    {
      id: '78694a0f-3da1-471f-bd96-142456e29d72',
      fullName: 'Daniel Wilson',
      timeStamp: '2:10 PM',
      recentText: 'daniel@gmail.com',
    },
    {
      id: '88694a0f-3da1-471f-bd96-145451e29d72',
      fullName: 'Sophia Miller',
      timeStamp: '10:05 AM',
      recentText: 'sophia@gmail.com',
    },
    {
      id: '98694a0f-3da1-471f-bd96-145441e29d72',
      fullName: 'James Davis',
      timeStamp: '6:50 PM',
      recentText: 'james@gmail.com',
    },
    {
      id: 'a8694a0f-3da1-471f-bd96-142461e29d72',
      fullName: 'Olivia Wilson',
      timeStamp: '11:40 AM',
      recentText: 'olivia@gmail.com',
    },
    {
      id: 'b8694a0f-3da1-471f-bd96-142471e29d72',
      fullName: 'Alexander Martinez',
      timeStamp: '4:30 PM',
      recentText: 'alexander@gmail.com',
    },
    {
      id: 'c8694a0f-3da1-471f-bd96-145461e29d72',
      fullName: 'Mia Anderson',
      timeStamp: '1:20 PM',
      recentText: 'mia@gmail.com',
    },];
    const [listData, setListData] = useState(data);
    const [searchText, setSearchText] = useState("");
  
  
    const handleSearchTextChange = (text) => {
      setSearchText(text);
    };
  
    const filteredUsers = data?.filter((user) => user.fullName.toLowerCase().startsWith(searchText.toLowerCase()));
  
    const handleDetailsPress = (id) => {
      navigation.navigate("Details", { id });
    };
    const closeRow = (rowMap, rowKey) => {
      if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
      }
    };
  
    const deleteRow = (rowMap, rowKey) => {
      closeRow(rowMap, rowKey);
      const newData = [...listData];
      const prevIndex = listData.findIndex(item => item.key === rowKey);
      newData.splice(prevIndex, 1);
      setListData(newData);
    };
  
    const onRowDidOpen = rowKey => {
      console.log('This row opened', rowKey);
    };
  
    const renderUser = ({
      item,
      index
    }) => <View style={{flexDirection:"column"}}>
    <Box>
    <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={handleSearchTextChange}
          placeholder="Search by name"
        />
        {filteredUsers?.length > 0 ? (
          <FlatList
            data={filteredUsers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUser}
            style={styles.userList}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Ionicons name="warning-outline" color="#f48574" size={50} />
    <Text>No users found</Text>
  </View>
        )}
      </View>
        <Pressable onPress={() => console.log('You touched me')} bg="white">
          <Box pl="4" pr="5" py="2">
            <HStack alignItems="center" space={3}>
            <Ionicons name="person-circle-outline" color="#4d5fab" size={50} />
  
              <VStack>
                <Text color="coolGray.800" _dark={{
                color: 'warmGray.50'
              }} bold>
                  {item.fullName}
                </Text>
                <Text color="coolGray.600" _dark={{
                color: 'warmGray.200'
              }}>
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              {/* <Text fontSize="xs" color="coolGray.800" _dark={{
              color: 'warmGray.50'
            }} alignSelf="flex-start">
                {item.timeStamp}
              </Text> */}
              <Ionicons name="arrow-forward" color="#4d5fab" size={20} />
            </HStack>
          </Box>
        </Pressable>
      </Box>
        <View style={{width:"70%", backgroundColor:"grey"}}>
  
        </View>
      </View>
    const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
        <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
        opacity: 0.5
      }}>
          <VStack alignItems="center" space={2}>
            <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
            <TouchableOpacity style={styles.detailsButton} onPress={() => handleDetailsPress(item.id)}>
            <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
              Details
            </Text>
        </TouchableOpacity>
          </VStack>
        </Pressable>
        <Pressable w="70" cursor="pointer" bg="red.500" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
        opacity: 0.5
      }}>
          <VStack alignItems="center" space={2}>
            <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
            <Text color="white" fontSize="xs" fontWeight="medium">
              Delete
            </Text>
          </VStack>
        </Pressable>
      </HStack>;
  
    return <Box bg="white" safeArea flex="1">
      <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={handleSearchTextChange}
          placeholder="Search by name"
        />
        {filteredUsers?.length > 0 ? (
          <FlatList
            data={filteredUsers}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUser}
            style={styles.userList}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Ionicons name="warning-outline" color="#f48574" size={50} />
    <Text>No users found</Text>
  </View>
        )}
        <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-130} previewRowKey={'0'} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
      </Box>;
  }
  export default Basic;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    searchInput: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      backgroundColor: "#fff",
    },
    userList: {
      flex: 1,
    },
    user: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: "#fff",
    },
    userDetails: {
      flex: 1,
      marginRight: 10,
    },
    userName: {
      fontWeight: "bold",
      fontSize: 16,
      marginBottom: 5,
    },
    userEmail: {
      color: "#666",
      fontSize: 14,
    },
    detailsButton: {
      borderWidth: 1,
      borderColor: "#3f51b5",
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: "#3f51b5",
    },
    detailsButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 14,
    },
    loadingContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  