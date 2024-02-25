import { StyleSheet, Pressable, TextInput, ImageBackground } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';

const img = require('@/assets/images/woman-treasure-map.png');


export default function Schnitzeljagd() {

  const [text, setText] = useState('');

  const handleInputChange = (input: string) => {
    setText(input);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} resizeMode="cover" style={styles.bg}>
      </ImageBackground>
      {/* <TextInput
        style={styles.input}
        onChangeText={text => handleInputChange(text)}
        value={text}
      />
      <Pressable style={styles.button} onPress={() => ""}>
        <Text style={styles.buttonLabel}>{"Test"}</Text>
      </Pressable> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  bg: {
    flex:  1,
    justifyContent: 'center',
  },
});
