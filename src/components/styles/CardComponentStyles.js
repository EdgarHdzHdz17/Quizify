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

  textView: {
    width: "60%",
  },

  imageView: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
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
  },
});

export default stylesCardComponent;
