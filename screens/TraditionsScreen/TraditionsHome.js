import React,{useEffect,useState} from 'react';
import { Text,SafeAreaView } from 'react-native';
import stylesTraditionsHome from './TraditionsHomeStyles';

export default function TraditionsHome() {
  return (
    <SafeAreaView style={stylesTraditionsHome.container}>
      <Text>Hellow Word</Text>
    </SafeAreaView>
  );
}

