import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CreateTodoScreen from './screens/CreateTodoScreen';
import TodoDetailsScreen from './screens/TodoDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateTodo" component={CreateTodoScreen} />
        <Stack.Screen name="TodoDetails" component={TodoDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
