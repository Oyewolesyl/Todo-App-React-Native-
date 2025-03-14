import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Buy groceries', description: 'Milk, eggs, bread', dueDate: new Date().toISOString(), completed: false },
    { id: '2', title: 'Finish React Native app', description: 'Complete the todo app', dueDate: new Date(Date.now() - 86400000).toISOString(), completed: true }, // Past due
  ]);

  // Add new todo if navigated from CreateTodoScreen
  if (route.params?.newTodo) {
    setTodos([...todos, { ...route.params.newTodo, id: Date.now().toString() }]);
    route.params.newTodo = undefined; // Prevent re-adding on re-render
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Todo List</Text>

      <Button title="Show Completed" onPress={() => setTodos(todos.filter(todo => todo.completed))} />
      <Button title="Show Pending" onPress={() => setTodos(todos.filter(todo => !todo.completed))} />
      <Button title="Show On Time" onPress={() => setTodos(todos.filter(todo => new Date(todo.dueDate) > new Date()))} />
      <Button title="Show Past Due" onPress={() => setTodos(todos.filter(todo => new Date(todo.dueDate) < new Date()))} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TodoDetails', { todo: item })}>
            <Text style={{ fontSize: 18, padding: 10, backgroundColor: '#f0f0f0', marginBottom: 5 }}>
              {item.title} (Due: {new Date(item.dueDate).toLocaleDateString()})
            </Text>
          </TouchableOpacity>
        )}
      />

      <Button title="Add New Todo" onPress={() => navigation.navigate('CreateTodo')} />
    </View>
  );
}
