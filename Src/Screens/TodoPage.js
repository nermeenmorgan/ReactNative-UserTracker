import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Modal from "react-native-modal";
import { v4 as uuid } from 'uuid';

const TodoPage = () => {
  const [task, setTask] = useState([]);
  const [text, setText] = useState('');
  const [added, setAdded] = useState(0);
  const [counter, setCounter] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isLengthCorrect,setLengthCorrect] = useState(true)
  // const [isDoneChecked, setIsDoneChecked] = useState(false);

  const addTask = () => {
    if (text.length > 3) {
      {setLengthCorrect(true)
      console.log(isLengthCorrect)
      }
      setTask((prevTasks) => [...prevTasks, { text, isChecked: false, id: uuid() }]);
      setText('');
      setAdded((prevAdded) => prevAdded + 1);
    } else
    setLengthCorrect(false)
    }

  const handleChange = (value) => {
    setText(value);
    console.log(value);
  };

  const handleDoneCheckBoxToggle = (index) => {
    setTask((prevTasks) =>
      prevTasks.map((taskItem, taskIndex) => {
        if (index === taskIndex) {
          const isChecked = !taskItem.isChecked;
          if (isChecked) {
            setDoneTasks((i) => i + 1);
          }else{setDoneTasks((i) => i - 1);}
          return {
            ...taskItem,
            isChecked,
          }
        }
        return taskItem;
      })
    );

    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDeleteCheckBoxToggle = (index) => {
    setDeleteIndex(index);
  };

  const handleDeleteTask = () => {
    setTask((prevTasks) =>
      prevTasks.filter((taskItem, taskIndex) => {
        if (deleteIndex !== taskIndex) {
          return taskItem;
        }
      })
    );

    setDeleteIndex(null);
    setAdded((prevAdded) => prevAdded - 1);
  };

  return(
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          onChangeText={handleChange}
          placeholder="Drop your Task...."
          style={styles.input}
          value={text}
        />
        <Button
          buttonStyle={{ backgroundColor: 'grey', width: 90, marginVertical: 25, marginHorizontal: 20 }}
          title="Add"
          onPress={addTask}
        />
      </View>

      <View>
        <Text style={{marginLeft:40, fontSize: 30, fontWeight: 'bold' }}>
          {counter} done of {added} tasks
        </Text>
        {task.map((item, index) => (
          <View key={item.id} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{fontWeight:"bold", fontSize:30}}>{item.text}</Text>
            <CheckBox
              checkedColor="purple"
              uncheckedColor="black"
              title="done"
              checked={item.isChecked}
              onPress={() => handleDoneCheckBoxToggle(index)}
            />
            
            <CheckBox
  checkedColor="red"
  uncheckedColor="black"
  title={<Text style={{ color: "red" }}>delete</Text>}
  checked={deleteIndex === index}
  onPress={() => handleDeleteCheckBoxToggle(index)}
  style={{ borderColor: "purple", borderWidth: 2, fontWeight:"bold"}}
/>

          </View>
        ))}

        <Modal isVisible={deleteIndex !== null}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text style={{textAlign:"center",color:"red", fontWeight:"bold", borderRadius:50 }}>Are you sure you want to delete this task?</Text>
            <Button style={{backgroundColor:"white",color:"purple", fontWeight:"bold", borderRadius:50 }} title="Yes" onPress={handleDeleteTask} />
            <Button title="No" onPress={() => setDeleteIndex(null)} />
          </View>
        </Modal>
      
        <Modal isVisible={!isLengthCorrect}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text style={{color:"purple", fontWeight:"bold", borderRadius:50 }}>Task must have more than 3 characters</Text>
            <Button style={{backgroundColor:"white",color:"purple", fontWeight:"bold", borderRadius:50 }} title="OK" onPress={() => setLengthCorrect(true)} />
        
          </View>
        </Modal>
        
        {/* <Modal isVisible={doneTasks === added && added !== 0}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text style={{color:"purple", fontWeight:"bold", borderRadius:50 }}>ALL DONE! CONGRATULATIONS!! ^^ </Text>
            <Button style={{backgroundColor:"white",color:"purple", fontWeight:"bold", borderRadius:50 }} title="OK" onPress={() => {
              setTask([]);
              setDoneTasks(0);
              // setAdded(0);
              setCounter(0);
            }} />
          </View>
        </Modal> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    height: 50,
    marginVertical: 20,
    padding: 5,
  },
});

export default TodoPage;