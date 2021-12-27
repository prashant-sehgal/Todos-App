import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

export default (props: any) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{props.todoItem.value}</Text>
      <TouchableNativeFeedback
        style={styles.btn}
        onPress={props.deleteTodoItem.bind(this, props.todoItem.id)}
      >
        <View style={styles.btn}>
          <Text style={{ fontSize: 25 }}>✓</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginVertical: '2%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
  },
  itemText: {
    fontSize: 18,
  },
  btn: {
    width: '15%',
    height: '100%',
    backgroundColor: '#00ff8c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
})
