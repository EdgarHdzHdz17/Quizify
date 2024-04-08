import { Text, Image, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import stylesCardComponent from "./styles/CardComponentStyles";

function CardComponent({ category, image, navigation }) {
  return (
    <TouchableOpacity
      style={stylesCardComponent.cardContainer}
      onPress={navigation}
    >
      <LinearGradient
        colors={["#ff6347", "#fa8072"]}
        style={stylesCardComponent.linearGradient}
      >
        <View style={stylesCardComponent.card}>
          <Text style={stylesCardComponent.textCard}>{category}</Text>
          <Image style={stylesCardComponent.imageCard} source={image} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default CardComponent;
