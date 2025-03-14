import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CreateTodoScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Create Todo</Text>

      <TextInput
        placeholder="Enter todo title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Pick Due Date" onPress={() => setShowPicker(true)} />

      {showPicker && (
        <DateTimePicker
          value={dueDate}
          mode="datetime"
          display="default"
          onChange={(event, selectedDate) => {
            setShowPicker(false);
            if (selectedDate) setDueDate(selectedDate);
          }}
        />
      )}

      <Button title="Save Todo" onPress={() => navigation.navigate('Home', { newTodo: { title, description, dueDate, completed: false } })} />
    </View>
  );
}
