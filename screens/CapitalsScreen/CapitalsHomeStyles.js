import { StyleSheet } from "react-native";

const stylesCapitalsHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "60%",
    height: "60%",
    marginTop: 0,
  },
  titleContainer: {
    marginTop: 0,
    position: "absolute",
  },
  answersContainer: {
    marginTop: 300,
    flex: 1,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    marginTop: 5,
    opacity: 0.9,
  },

  titleText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  answerText: {
    color: "#6a5acd",
    fontSize: 20,
    fontWeight: "bold",
  },

  scoreText: {
    color: "white",
    fontSize: 20,
    marginTop: 15,
    marginLeft: 65,
    fontWeight: "bold",
  },
});

export default stylesCapitalsHome;
