import { View,Text,StyleSheet, SafeAreaView } from "react-native";

export default function AnimalsHome (){
  return(
    <SafeAreaView style={styles.container}>
      <Text>Hellow Word</Text>
    </SafeAreaView>
  ); 
}


const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    flex:1
  }

})