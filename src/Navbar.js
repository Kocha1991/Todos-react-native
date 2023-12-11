import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#6495ed'
  },

  text: {
    color: '#fff',
    fontSize: 20,
  }
})
