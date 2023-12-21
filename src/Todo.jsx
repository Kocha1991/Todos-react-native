import React, { useState } from 'react';
import { 
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { Button } from 'react-native-paper';

export const Todo = ({ 
  todo, 
  onRemove,
  onUpdateTodo,
  toggleCompleted,
}) => {

  const [editable, setEditable] =useState(false)
  const [currentTodo, setCurrentTodo] = useState(todo)

  return (
    <TouchableOpacity
      onLongPress={() => onRemove(todo.id)}
      onPress={() => toggleCompleted({
        ...todo,
        completed: !todo.completed,
      })}
    >
      <View style={styles.todo}>
        <TextInput 
          style={todo.completed && styles.textOff}
          onChangeText={text => setCurrentTodo(prev => ({...prev, text}))}
          value={currentTodo.text}
          editable={editable}
          placeholder='Create new todo...'
        />
        <View style={styles.todoBtns}>
          <Button
            style={styles.todoBtn}
            icon={editable ? "check" : "pencil"}
            onPress={async () => {
              if(editable) {
                await onUpdateTodo(currentTodo)
                return setEditable(false)
              }

              return setEditable(prev => !prev)
            }}
          />
          <CheckBox 
            value={todo.completed}
            onValueChange={() => toggleCompleted({
              ...todo,
              completed: !todo.completed,
            })}
          />
        </View>
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

  todoBtn: {
    width: 50,
  },

  todoBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  textOff: {
    textDecorationLine: 'line-through',
    color: 'red',
  }
})
