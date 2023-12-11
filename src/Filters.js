import React from "react";
import { StyleSheet, View } from 'react-native';
import { Button } from './Button';

export const Filters = ({
  onFilterChange,
  onRemoveCompleted
}) => {
  return (
    <View style={styles.btnWrapper} >
      <View style={styles.filterBlock}>
        <Button 
          text='All' 
        onPress={onFilterChange}
        />
        <Button 
          text='Completed'
          onPress={onFilterChange}
        />
        <Button 
          text='Active'
          onPress={onFilterChange}
        />
      </View>
      <View style={styles.btnRemove}>
        <Button
          text='Remove Completed'
          onPress={onRemoveCompleted}
        />
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    paddingVertical: 15,
  },

  filterBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
    
  
})
