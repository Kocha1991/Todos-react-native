import React from "react";
import { 
  View,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';

export const Button = ({
  text,
  onPress
}) => {
  
  return (
    <View>
      <Pressable 
        style={
          text === 'Remove Completed' 
          ? styles.btnRemove
          : styles.btn}
        onPress={() => onPress(text)}
      >
        <Text style={styles.btnText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  btn: {
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#6495ed',
  },

  btnText: {
    color: '#fff',
  },

  btnRemove: {
    marginTop: 10,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#f95959',
  }
})