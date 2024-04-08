import { StyleSheet } from "react-native";

const stylesHomeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },

  headerContainer: {
    flex: 1,
    width: "99%",
    flexDirection: "row",
  },

  headerText: {
    color: "#fa8072",
    fontSize: 40,
    marginTop: 30,
    marginLeft: 80,
    fontWeight: "bold",
  },

  headerImage: {
    width: 100,
    height: 100,
    marginLeft: 20,
    marginTop: 15,
    borderRadius: 100,
    backgroundColor: "#3BDBF7",
  },

  gameContainer: {
    flex: 3,
    width: "100%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default stylesHomeScreen;
