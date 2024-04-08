import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import stylesHomeScreen from "./HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import CardComponent from "../../src/components/CardComponent";
import CapitalsImage from "./assets/capitals.png";
import TraditionsImage from "./assets/traditions.png";
import AnimalsImage from "./assets/animals.png";
import UserImage from "./assets/Avatar_Developer.png";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={stylesHomeScreen.container}>
      <View style={stylesHomeScreen.headerContainer}>
        <Image style={stylesHomeScreen.headerImage} source={UserImage}></Image>
        <Text style={stylesHomeScreen.headerText}>Let's Play</Text>
      </View>

      <View style={stylesHomeScreen.gameContainer}>
        <CardComponent
          category="1-Capitales"
          image={CapitalsImage}
          navigation={() => navigation.navigate("CapitalsHome")}
        ></CardComponent>
        <CardComponent
          category="2-Tradiciones"
          image={TraditionsImage}
          navigation={() => navigation.navigate("TraditionsHome")}
        ></CardComponent>
        <CardComponent
          category="3-Animales"
          image={AnimalsImage}
          navigation={() => navigation.navigate("AnimalsHome")}
        ></CardComponent>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
