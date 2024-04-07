import { Text, Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import stylesCardComponent from "./styles/CardComponentStyles";

function CardComponent({ category, image }) {
  return (
    <LinearGradient
      colors={["#ff6347", "#fa8072"]}
      style={stylesCardComponent.linearGradient}
    >
      <View style={stylesCardComponent.card}>
        <View style={stylesCardComponent.textView}>
          <Text style={stylesCardComponent.textCard}>{category}</Text>
        </View>
        <View style={stylesCardComponent.imageView}>
          <Image style={stylesCardComponent.imageCard} source={image} />
        </View>
      </View>
    </LinearGradient>
  );
}

export default CardComponent;
