import { StyleSheet } from "react-native";

const stylesSlidersComponent = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: "white",
    width: "70%",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    marginTop: 15,
    opacity: 0.9,
  },

  titleText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  answerText: {
    color: "#6a5acd",
    fontSize: 20,
    fontWeight: "bold",
  },

  scoreText: {
    color: "white",
    fontSize: 30,
    marginTop: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default stylesSlidersComponent;
