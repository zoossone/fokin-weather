import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}><Text>Hello</Text></View>
      <View style={styles.blueView}><Text>Hello</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  //부모가 하나의 flex를 가짐
  container: {
    flex: 1,
  },
  //자식들도 본인이 가지고 싶은 영역의 크기만큼 flex로 영역을 가짐
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 3,
    backgroundColor: "blue"
  }
});
