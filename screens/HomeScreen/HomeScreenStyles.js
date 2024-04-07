import { StyleSheet } from "react-native";

const stylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
    alignItems: "center",
    justifyContent: "center",
  },

  headerContainer: {
    flex: 1,
    width: "99%",
    marginTop: 2,
  },

  headerText: {
    color: "#fa8072",
    fontSize: 40,
    marginTop: 30,
    marginLeft: 30,
    fontWeight: "bold",
  },

  categoryContainer: {
    flex: 5,
    width: "99%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  cardContainer: {
    width: "90%",
    height: "30%",
  },
});

export default stylesHomeScreen;
