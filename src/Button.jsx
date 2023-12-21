import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const FilterButton = ({ text, onPress, filteredStatus }) => {
  const activeBtn = () => filteredStatus === text ? styles.btn : styles.btnActive;

  console.log(filteredStatus);
  return (
    <View>
      <TouchableOpacity
        style={text === 'Remove Completed' ? styles.btnRemove : activeBtn()}
        onPress={() => onPress(text)}
      >
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#6495ed',
  },

  btnActive: {
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#a0c0fa',
  },

  btnText: {
    color: '#fff',
  },

  btnRemove: {
    marginTop: 10,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f95959',
  },
});
