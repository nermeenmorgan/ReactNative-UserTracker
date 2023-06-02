import React from "react";
import { View, StyleSheet, Text, Pressable, SectionList } from "react-native";
import routes from "../common/routes";
import { useNavigation } from "@react-navigation/native";
// import styles from "../../style";
import { v4 as uuid } from 'uuid';

const Home = () => {

  const sectionA = [{
    id: uuid(),
    title: 'SECTION A',
    data: [
      {
        id: uuid(),
        user: 'user1',
      },
      {
        id: uuid(),
        user: 'user2',
      },
      {
        id: uuid(),
        user: 'user3',
      },
    ],
  }];

  const sectionB = [{
    id: uuid(),
    title: 'SECTION B',
    data: [
      {
        id: uuid(),
        user: 'user1',
      },
      {
        id: uuid(),
        user: 'user2',
      },
      {
        id: uuid(),
        user: 'user3',
      },
    ],
  }];

  const sectionC = [{
    id: uuid(),
    title: 'SECTION C',
    data: [
      {
        id: uuid(),
        user: 'user1',
      },
      {
        id: uuid(),
        user: 'user2',
      },
      {
        id: uuid(),
        user: 'user3',
      },
    ],
  }];

  const sectionD = [{
    id: uuid(),
    title: 'SECTION D',
    data: [
      {
        id: uuid(),
        user: 'user1',
      },
      {
        id: uuid(),
        user: 'user2',
      },
      {
        id: uuid(),
        user: 'user3',
      },
    ],
  }];

  const { navigate } = useNavigation();

  return (
    <View style={{marginVertical:30,justifyContent:"center", alignItems:"center"}}>
      <SectionList sections={sectionA} renderItem={({ item }) => <Text style={styles.item}>{item.user}</Text>} renderSectionHeader={({ section }) => <View style={{ backgroundColor:"lightgrey",}}> <Text style={styles.header}>{section.title}</Text></View>} />
      <SectionList sections={sectionB} renderItem={({ item }) => <Text style={styles.item} >{item.user}</Text>} renderSectionHeader={({ section }) => <View style={{ backgroundColor:"lightgrey",}}> <Text style={styles.header}>{section.title}</Text></View>} />
      <SectionList sections={sectionC} renderItem={({ item }) => <Text style={styles.item}>{item.user}</Text>} renderSectionHeader={({ section }) =><View style={{ backgroundColor:"lightgrey",}}> <Text style={styles.header}>{section.title}</Text></View>} />
      <SectionList sections={sectionD} renderItem={({ item }) => <Text style={styles.item}>{item.user}</Text>} renderSectionHeader={({ section }) => <View style={{ backgroundColor:"lightgrey",}}> <Text style={styles.header}>{section.title}</Text></View>} />
      <Text style={styles.styles2} onPress={() => { navigate(routes.todo) }}> Go to page2 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styles2:{
marginVertical:90,
backgroundColor:"purple",
fontSize:50,
padding:30,
borderRadius:30,
color:"white",
  },
  item: {
textAlign:"center",
    width:900,
    
    backgroundColor:"lightgrey"
  },
  header:{
    borderColor: "black",
    borderWidth: 4,
  textAlign:"center",
    fontWeight:"bold",
    fontSize:20
  }

});

export default Home;
