import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import stylesHomeScreen from "./HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import CardComponent from "../../src/components/CardComponent";
import CapitalsImage from "./assets/capitals.png";
import TraditionsImage from "./assets/traditions.png";
import AnimalsImage from "./assets/animals.png";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={stylesHomeScreen.container}>
      <View style={stylesHomeScreen.headerContainer}>
        <Text style={stylesHomeScreen.headerText}>Let's Play</Text>
      </View>

      <View style={stylesHomeScreen.categoryContainer}>
        <TouchableOpacity
          style={stylesHomeScreen.cardContainer}
          onPress={() => navigation.navigate("CapitalsHome")}
        >
          <CardComponent
            category="Capitals"
            image={CapitalsImage}
          ></CardComponent>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesHomeScreen.cardContainer}
          onPress={() => navigation.navigate("TraditionsHome")}
        >
          <CardComponent
            category="Traditions"
            image={TraditionsImage}
          ></CardComponent>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesHomeScreen.cardContainer}
          onPress={() => navigation.navigate("AnimalsHome")}
        >
          <CardComponent
            category="Animals"
            image={AnimalsImage}
          ></CardComponent>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
