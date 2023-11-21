import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Let's Play</Text>
      </View>

      <View style={styles.capitalsContainer}>
        <TouchableOpacity style={styles.capitalsCard} onPress={() => navigation.navigate("CapitalsHome")}>
            <LinearGradient colors={["#ff6347", "#fa8072"]} style={styles.linearGradient}>
            <Text style={styles.textCard}>Capitals</Text>
            <Image
                style={styles.imageCard}
                source={require("../HomeScreen/assets/capitals.png")}
            />
            </LinearGradient>
        </TouchableOpacity>
      </View>


      <View style={styles.traditionsContainer}>
        <TouchableOpacity style={styles.traditionsCard} onPress={() => navigation.navigate("TraditionsHome")}>
            <LinearGradient colors={["#00bfff", "#0073F7"]} style={styles.linearGradient}>
            <Text style={styles.textCard}>Traditions</Text>
            <Image
                style={styles.imageCard}
                source={require("../HomeScreen/assets/traditions.png")}
            />
            </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.soccerTeamsContainer}>
        <TouchableOpacity style={styles.soccerTeamsCard} onPress={() => navigation.navigate("AnimalsHome")}>
            <LinearGradient colors={["#ee82ee", "#da70d6"]} style={styles.linearGradient}>
            <Text style={styles.textCard}>Animals</Text>
            <Image
                style={styles.imageCard}
                source={require("../HomeScreen/assets/soccerteams.png")}
            />
            </LinearGradient>
        </TouchableOpacity>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  headerContainer: {
    flex: 1,
    width: "99%",
  },

  headerText:{
    color:'#fa8072',
    fontSize:30,
    marginTop:30,
    marginLeft:'10%',
    fontWeight: 'bold',
  },
  

  ///
  capitalsContainer: {
    flex: 2,
    width: "99%",
    alignItems: "center",
    justifyContent: "center",
  },

  capitalsCard: {
    width: "80%",
    height: "90%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    position: 'relative',
  },

  ///
  traditionsContainer: {
    flex: 2,
    width: "99%",
    alignItems: "center",
    justifyContent: "center",
  },

  traditionsCard: {
    width: "80%",
    height: "90%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
  },

  //
  soccerTeamsContainer: {
    flex: 2,
    width: "99%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1%",
  },
  soccerTeamsCard: {
    width: "80%",
    height: "90%",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
  },

  //
  textCard: {
    color: "white",
    fontSize: 30,
    marginLeft: "10%",
    marginTop: "10%",
    fontWeight: 'bold',
  },

  linearGradient:{
    width:'100%',
    borderRadius: 20,
    height:'100%',
    opacity:0.9
  },

  imageCard:{
    width:'60%',
    height:'60%',
    top: '30%',
    left: '40%',
    position:'absolute'
  },
});
