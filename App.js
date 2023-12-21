import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';
import { Filters } from './src/Filters';
import { Loader } from './src/Loader';
import {
  updateTodo,
  deleteCompleted,
  deleteTodo,
  getTodos,
  postTodo,
} from './src/api/Todos';
import { ERROR_API } from './src/constants';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = () => {
    setIsLoading(true);

    getTodos()
      .then(({ data }) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', ERROR_API);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchTodos, []);

  const addTodo = (text) => {
    setFilteredStatus('All');
    setIsLoading(true);

    postTodo(text)
      .then(({ data }) => setTodos((prev) => [data, ...prev]))
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', ERROR_API);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeTodo = (id) => {
    setIsLoading(true);

    deleteTodo(id)
      .then(() => setTodos((prev) => prev.filter((todo) => todo.id !== id)))
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', ERROR_API);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const removeCompletedTodo = () => {
    const completedTodos = todos.filter((todo) => todo.completed);

    deleteCompleted(completedTodos).then(() =>
      setTodos((prev) => prev.filter((todo) => !todo.completed))
    );
  };

  const handleUpdateTodo = (updatedTodo) =>
    updateTodo(updatedTodo).then(() =>
      setTodos((prev) =>
        prev.map((item) =>
          item.id === updatedTodo.id ? updatedTodo: item
        )
      )
    );

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filteredStatus === 'All') {
          return true;
        }
        if (filteredStatus === 'Completed') {
          return todo.completed;
        }
        return !todo.completed;
      }),
    [filteredStatus, todos]
  );

  const handleFilterStatusChange = (status) => {
    setFilteredStatus(status);
    const completedFilter = todos.filter((todo) => todo.completed);
    const activeFilter = todos.filter((todo) => !todo.completed);

    if (status === 'All' && !todos.length) {
      Alert.alert("You don't have any todos");
    }

    if (status === 'Completed' && !completedFilter.length) {
      Alert.alert("You don't have any completed todos");
    }

    if (status === 'Active' && !activeFilter.length) {
      Alert.alert('All your todos completed');
    }
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <Filters
          onFilterChange={handleFilterStatusChange}
          onRemoveCompleted={removeCompletedTodo}
          filteredStatus={filteredStatus}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={filteredTodos}
            renderItem={({ item }) => (
              <Todo
                todo={item}
                onRemove={removeTodo}
                toggleCompleted={handleUpdateTodo}
                onUpdateTodo={handleUpdateTodo}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
