import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardComponent from "../../src/components/CardComponent";
import CapitalsImage from "./assets/capitals.png";
import TraditionsImage from "./assets/traditions.png";
import AnimalsImage from "./assets/animals.png"


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>

        <Text style={styles.headerText}>Let's Play</Text>
        
      </View>

      <View style={styles.categoryContainer}>

        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("CapitalsHome")}>
          <CardComponent category="Capitals" image={CapitalsImage} ></CardComponent>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("TraditionsHome")}>
          <CardComponent category="Traditions" image={TraditionsImage} ></CardComponent>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("AnimalsHome")}>
          <CardComponent category="Animals" image={AnimalsImage} ></CardComponent>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
    alignItems: "center",
    justifyContent: "center",
  },

  headerContainer: {
    flex: 1,
    width: "99%",
  },

  headerText:{
    color:'#fa8072',
    fontSize:40,
    marginTop:20,
    marginLeft:50,
    fontWeight: 'bold',
  },

  categoryContainer:{
    flex:5,
    width: "99%",
    alignItems:"center",
    justifyContent:"space-around",
  },

  cardContainer:{
    width:"90%",
    height:"30%",
  }

  
});
