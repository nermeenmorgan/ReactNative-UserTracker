import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import useAxios from "axios-hooks";
import { useNavigation } from "@react-navigation/native";

const Users = () => {
  const [{ data: users, loading, error }] = useAxios("https://jsonplaceholder.typicode.com/users");
  const [searchText, setSearchText] = useState("");
  const { navigate } = useNavigation();

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const filteredUsers = users?.filter((user) => user.name.toLowerCase().startsWith(searchText.toLowerCase()));

  const handleDetailsPress = (id) => {
    navigate("Details", { id });
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity style={styles.user} onPress={() => handleDetailsPress(item.id)}>
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <TouchableOpacity style={styles.detailsButton} onPress={() => handleDetailsPress(item.id)}>
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
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
        <Text>No users found</Text>
      )}
    </View>
  );
};

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
});

export default Users;