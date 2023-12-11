import React, { useMemo, useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';
import { Filters } from './src/Filters';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("All")
  
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
      completed: false
    }

    setTodos(prev => {
      return [
        newTodo,
        ...prev,
      ]
    })
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const removeCompletedTodo = () => {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }

  const toggleCopleted = (todo) => {
    setTodos(prev => prev
      .map(item => item.id === todo.id 
        ? ({...item, completed: !item.completed})
        : item
      ))
  }

  const filteredTodos = useMemo(() => (todos.filter(todo =>  {
    if(filteredStatus === "All") {
      return true
    }
    if (filteredStatus === "Completed") {
      return todo.completed
    }
    return !todo.completed
  })) , [filteredStatus, todos])

  const handleFilterStatusChange = (status) => {
    setFilteredStatus(status)
    const completedFilter = todos.filter(todo => todo.completed);
    const activeFilter = todos.filter(todo => !todo.completed)

    if (status === 'All' && !todos.length) {
      Alert.alert("You don't have any todos")
    }

    if (status === 'Completed' && !completedFilter.length) {
      Alert.alert("You don't have any completed todos")
    }

    if (status === 'Active' && !activeFilter.length) {
      Alert.alert("All your todos completed")
    }
  };
  

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <Filters 
          onFilterChange={handleFilterStatusChange}
          onRemoveCompleted={removeCompletedTodo}
        />
        
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={filteredTodos}
          renderItem={({item}) => (
            <Todo 
              todo={item} 
              onRemove={removeTodo}
              toggleCopleted={toggleCopleted}
            />
          )}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  }
});
