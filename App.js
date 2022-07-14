import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {
  const [text, setText] = useState('')
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello, React Native</Text>
      <TextInput style={styles.input} placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}/>
        <Text style={{padding: 5, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    color: '#000',
    borderColor: 'orange',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 10,
    fontSize: 15
  }
});
