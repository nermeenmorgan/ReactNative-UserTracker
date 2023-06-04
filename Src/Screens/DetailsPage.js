import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useAxios from 'axios-hooks';

const Details = ({ route }) => {
  const { id } = route.params;
  const [{ data, loading, error }] = useAxios({url:`https://jsonplaceholder.typicode.com/users/${id}`});
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Details of User with ID {user ? user.id : ""}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Name:</Text>
          <Text style={styles.detailText}>{user ? user.name : ""}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Email:</Text>
          <Text style={styles.detailText}>{user ? user.email : ""}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Phone:</Text>
          <Text style={styles.detailText}>{user ? user.phone : ""}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailTitle}>Website:</Text>
          <Text style={styles.detailText}>{user ? user.website : ""}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#3f51b5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  detailsContainer: {
    width: "80%",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  detailTitle: {
    fontWeight: "bold",
    marginRight: 10,
    width: 100,
  },
  detailText: {
    flex: 1,
  },
});

export default Details;