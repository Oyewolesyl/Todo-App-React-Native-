import React from 'react';
import { View, Text } from 'react-native';

export default function TodoDetailsScreen({ route }) {
  const { todo } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{todo.title}</Text>
      <Text>Description: {todo.description}</Text>
      <Text>Status: {todo.completed ? '✅ Completed' : '❌ Not Completed'}</Text>
      <Text>Due Date: {todo.dueDate ? new Date(todo.dueDate).toLocaleString() : 'Not Set'}</Text>
    </View>
  );
}
