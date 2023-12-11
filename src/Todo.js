import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';

export const Todo = ({ 
  todo, 
  onRemove,
  toggleCopleted,
}) => {

  return (
    <TouchableOpacity
      onLongPress={() => onRemove(todo.id)}
      onPress={() => toggleCopleted(todo)}
    >
      <View style={styles.todo}>
        <Text style={todo.completed && styles.textOff}>
          {todo.title}
        </Text>
        <CheckBox 
          value={todo.completed}
          onValueChange={() => toggleCopleted(todo)}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#6495ed',
    backgroundColor: '#eee',
    borderRadius: 5,
  },

  textOff: {
    textDecorationLine: 'line-through',
    color: 'red',
  }
})
