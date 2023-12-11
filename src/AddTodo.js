import React, { useState } from 'react';
import { 
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Alert,
} from 'react-native';

export const AddTodo = ({
  onSubmit,
}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('You forgot to create a todo:)')
    }
  }

  return (
    <View style={styles.wrapper}>
      <TextInput 
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
        placeholder='Create new todo...'
      />
      <Pressable
        style={styles.btn}
        onPress={pressHandler}
      >
        <Text style={styles.btnText}>Add</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    width: '70%',
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#6495ed'
  },

  btn: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#6495ed',
  },

  btnText: {
    color: '#fff',
  }
})