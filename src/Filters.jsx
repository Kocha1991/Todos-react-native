import React from "react";
import { StyleSheet, View } from 'react-native';
import { FilterButton } from './Button';

export const Filters = ({
  onFilterChange,
  onRemoveCompleted,
  filteredStatus,
}) => {
  return (
    <View style={styles.btnWrapper} >
      <View style={styles.filterBlock}>
        <FilterButton
          text='All'
          onPress={onFilterChange}
          filteredStatus={filteredStatus}
        />
        <FilterButton
          text='Completed'
          onPress={onFilterChange}
          filteredStatus={filteredStatus}
        />
        <FilterButton
          text='Active'
          onPress={onFilterChange}
          filteredStatus={filteredStatus}
        />
      </View>
      <View style={styles.btnRemove}>
        <FilterButton
          text='Remove Completed'
          onPress={onRemoveCompleted}
          filteredStatus={filteredStatus}
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
    justifyContent: 'space-between',
  },
})
