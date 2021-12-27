import { View, StyleSheet, FlatList, Text } from 'react-native'
import TodoItem from './TodoItem'

export default (props: any) => {
  return (
    <View style={styles.todoList}>
      {props.todosList.length > 0 ? (
        <FlatList
          style={styles.listStyle}
          keyExtractor={(item, index) => item.id}
          data={props.todosList}
          renderItem={(todoItem) => (
            <TodoItem
              todoItem={todoItem.item}
              deleteTodoItem={props.deleteTodoItem}
            />
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={styles.message}>No Todos yet</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  todoList: {
    height: '80%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  listStyle: {
    width: '100%',
    padding: '5%',
  },
  messageBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    color: '#616161',
  },
})
