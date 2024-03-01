import React,{useEffect,useState} from 'react';
import { StyleSheet,Text,SafeAreaView } from 'react-native';


export default function TraditionsHome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hellow Word</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    flex:1
  },
});
