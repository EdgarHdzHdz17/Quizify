import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function CardComponent({ category, image }) {
  return (
    <LinearGradient
      colors={["#ff6347", "#fa8072"]}
      style={styles.linearGradient}
    >
      <Text style={styles.textCard}>{category}</Text>
      <Image style={styles.imageCard} source={image} />
    </LinearGradient>
  );
}

export default CardComponent;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    opacity: 0.9,
    width:"100%",
    height:"100%"
  },

  textCard: {
    color: "white",
    fontSize: 30,
    marginLeft: "10%",
    marginTop: "10%",
    fontWeight: "bold",
  },
  
  imageCard: {
    width: "60%",
    height: "60%",
    top: "30%",
    left: "40%",
    position: "absolute",
  },
});
