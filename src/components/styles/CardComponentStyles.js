import { StyleSheet } from "react-native";

const stylesCardComponent = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    opacity: 0.9,
    width: "100%",
    height: "100%",
  },

  card: {
    flex: 1,
    flexDirection: "row",
  },

  cardContainer: {
    width: "90%",
    height: "30%",
  },

  textCard: {
    color: "white",
    fontSize: 30,
    marginLeft: 30,
    marginTop: 20,
    fontWeight: "bold",
  },

  imageCard: {
    width: 100,
    height: 100,
    marginLeft: 50,
    marginTop: 30,
  },
});

export default stylesCardComponent;
