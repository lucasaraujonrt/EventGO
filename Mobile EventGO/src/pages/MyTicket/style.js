import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#285EC4",
    flex: 1,
    flexDirection: "column",
    paddingLeft: 50,
    paddingRight: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconBack: {
    marginTop: 4,
  },
  iconUser: {
    marginTop: 4,
  },
  title: {
    flex: 1,
    justifyContent: "center",
  },
  titleTicket: {
    textAlign: "center",
    color: "#FFFAFA",
    fontSize: 25,
  },
});
