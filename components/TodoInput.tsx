import { useState } from 'react'
import { View, Text, Button, StyleSheet, Modal, TextInput } from 'react-native'

export default (props: any) => {
  const [currentGoal, setCurrentGoal] = useState('')

  const addTodo = () => {
    props.addTodoItem(currentGoal)
    setCurrentGoal('')
  }

  return (
    <View style={styles.container}>
      <Button
        title="Add Task"
        color="#002566"
        onPress={props.toggleIsAddMode}
      />

      <Modal visible={props.isAddMode} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalText}>Add Task</Text>
          <TextInput
            style={styles.textArea}
            value={currentGoal}
            onChangeText={(currentText) => setCurrentGoal(currentText)}
          />

          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button
                title="Cancel"
                color="red"
                onPress={props.toggleIsAddMode}
              />
            </View>
            <View style={styles.btn}>
              <Button title="Add" onPress={addTodo} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8f8f8f',
  },
  textArea: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 20,
    marginTop: '10%',
    padding: 10,
    width: '80%',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    width: '70%',
    justifyContent: 'space-between',
  },
  btn: {
    width: 80,
  },
})
