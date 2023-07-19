import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import useAxios from 'axios-hooks';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../ThemeContext.js/themeContext';
import axios from 'axios';

const Users = () => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const { isDarkTheme } = useContext(ThemeContext);

  const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    searchInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      backgroundColor: '#fff',
    },
    userList: {
      flex: 1,
    },
    user: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: '#fff',
    },
    userDetails: {
      flex: 1,
      marginRight: 10,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
      color: 'black',
    },
    userEmail: {
      color: '#666',
      fontSize: 14,
    },
    detailsButton: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: 'black',
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailsButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 14,
    },
    hiddenItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 18,
    },
    hiddenItem: {
      backgroundColor: 'black',
      padding: 10,
      marginLeft: 10,
      borderRadius: 5,
    },
    hiddenItemText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: '#e86d6d',
      padding: 10,
      marginLeft: 10,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171755',
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    searchInput: {
      // borderWidth: 1,
      // borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // 50% transparent white

      color: 'white',
    },
    userList: {
      flex: 1,
    },
    user: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor: 'white',
    },
    userDetails: {
      flex: 1,
      marginRight: 10,
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
      color: 'black',
    },
    userEmail: {
      color: 'black',
      fontSize: 14,
    },
    detailsButton: {
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    detailsButtonText: {
      color: '#171755',
      fontWeight: 'bold',
      fontSize: 14,
    },
    hiddenItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 18,
    },
    hiddenItem: {
      backgroundColor: 'white',
      padding: 10,
      marginLeft: 10,
      borderRadius: 5,
    },
    hiddenItemText: {
      color: 'black',
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: '#e86d6d',
      padding: 7,
      marginLeft: 10,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: '#112D4E',
      fontWeight: 'bold',
    },
  });
  const [openRows, setOpenRows] = useState(new Map());

  const styles = isDarkTheme ? darkStyles : lightStyles;

  const [{ data: userss, loading, error }] = useAxios(
    'https://jsonplaceholder.typicode.com/users'
  );
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { navigate } = useNavigation();
  useEffect(() => {
    if (userss) {
      setUsers(userss);
    }
  }, [userss]);
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {}
  };
  var filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().startsWith(searchText.toLowerCase())
  );

  const handleDetailsPress = (id) => {
    navigate('Details', { id });
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity
      style={styles.user}
      onPress={() => handleDetailsPress(item.id)}
    >
      <View style={styles.userDetails}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>

      <View>
        <Ionicons
          style={{ marginRight: 5 }}
          name="chevron-forward"
          color={'black'}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
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
        placeholderTextColor={!isDarkTheme ? 'black' : 'white'}
      />

      {filteredUsers?.length > 0 ? (
        <SwipeListView
          showsVerticalScrollIndicator={false}
          onRowOpen={(rowKey, rowMap) => {
            setOpenRows((prevOpenRows) => {
              const newOpenRows = new Map(prevOpenRows);
              newOpenRows.set(rowKey, true);
              return newOpenRows;
            });
          }}
          onRowClose={(rowKey, rowMap) => {
            setOpenRows((prevOpenRows) => {
              const newOpenRows = new Map(prevOpenRows);
              newOpenRows.delete(rowKey);
              return newOpenRows;
            });
          }}
          data={filteredUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUser}
          style={styles.userList}
          renderHiddenItem={(data) => (
            <View style={styles.hiddenItemContainer}>
              <TouchableOpacity
                style={styles.hiddenItem}
                onPress={() => handleDetailsPress(data.item.id)}
              >
                <Text style={styles.hiddenItemText}>More</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteUser(data.item.id)}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={-1}
          rightOpenValue={-140}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Ionicons name="warning-outline" color="#f48574" size={50} />
          <Text style={{ color: !isDarkTheme ? 'black' : 'white' }}>
            No users found
          </Text>
        </View>
      )}
    </View>
  );
};

export default Users;
