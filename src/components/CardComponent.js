import { Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import stylesCardComponent from "./CardComponentStyles";

function CardComponent({ category, image }) {
  return (
    <LinearGradient
      colors={["#ff6347", "#fa8072"]}
      style={stylesCardComponent.linearGradient}
    >
      <Text style={stylesCardComponent.textCard}>{category}</Text>
      <Image style={stylesCardComponent.imageCard} source={image} />
    </LinearGradient>
  );
}

export default CardComponent;
