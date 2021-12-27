import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import TodoInput from './components/TodoInput'
import Header from './components/Header'
import TodoList from './components/TodosList'
import { useState } from 'react'

export default function App() {
  const [todosList, setTodosList] = useState(Array)
  const [isAddMode, setIsAddMode] = useState(false)

  const addTodoItem = (todoItem: String) => {
    const id = `0x${Math.round(Math.random() * 1000000)}`
    const newTodoItem = { id, value: todoItem }

    setTodosList((currentState) => [...currentState, newTodoItem])
    setIsAddMode(false)
  }

  const deleteTodo = (todoID: String) => {
    setTodosList((currentState) => {
      return currentState.filter((todo: any) => todo.id !== todoID)
    })
  }

  const toggleIsAddMode = () =>
    isAddMode === true ? setIsAddMode(false) : setIsAddMode(true)

  return (
    <View style={styles.container}>
      <Header />

      <TodoList todosList={todosList} deleteTodoItem={deleteTodo} />

      <TodoInput
        addTodoItem={addTodoItem}
        isAddMode={isAddMode}
        toggleIsAddMode={toggleIsAddMode}
      />

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
})
