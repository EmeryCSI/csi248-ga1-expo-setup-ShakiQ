import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [inputText, setInputText] = useState(''); // Add state for inputText

  // Create a new style object with everything from the styles.container object
  const containerStyle = {
    ...styles.container,
    backgroundColor: isDark ? '#333' : '#FFF',
  };

  // Create a new style object with everything from the styles.text object
  const textStyle = {
    ...styles.text,
    color: isDark ? '#FFF' : '#333',
  };

  const logInputStyle = {
    ...styles.logInput,
    borderColor: isDark ? "#FFF" : "#333",
    color: isDark ? "#FFF" : "#333",
  };
  
  const logTextStyle = {
    ...styles.logText,
    color: isDark ? "#FFF" : "#333",
  };

  // Update the components to use the new styles
  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{isDark ? 'Dark Mode' : 'Light Mode'}</Text>
      <Button
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        onPress={() => setIsDark(!isDark)}
      />
      
      {/* Add the new View for logging to the console */}
      <View style={styles.logContainer}>
        <Text style={logTextStyle}>Type to log to the console</Text>
        <TextInput
          style={logInputStyle}
          onChangeText={(text) => setInputText(text)} // Update inputText state
          value={inputText} // Bind the state to the input
        />
        {/* Button to log the input to the console */}
        <Button title="Log to Console" onPress={() => console.log(inputText)} />
        {/* Button to warn the input to the console */}
        <Button title="Warn to Console" onPress={() => console.warn(inputText)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    marginBottom: 20,
  },
  logContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
  },
  logText: {
    marginBottom: 10,
    fontSize: 16,
  },
  logInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    width: '100%',
  },
});
