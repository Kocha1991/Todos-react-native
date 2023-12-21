import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator 
        size='large' 
      />
      <Text style={styles.textLoading}>Loading ...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
  },
  textLoading: {
    marginTop: 10,
    textAlign: 'center',
  }
})