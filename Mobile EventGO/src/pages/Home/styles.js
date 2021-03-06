import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#285EC4",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputSearch: {
    backgroundColor: "#2E323E",
    fontSize: 16,
    width: 220,
    height: 32,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#FFFAFA",
  },
  iconUser: {
    marginTop: 3,
  },
  iconTicket: {
    marginTop: 5,
  },
  titleOff: {
    flex: 1,
    justifyContent: "center",
  },
  titleEvent: {
    textAlign: "center",
    color: "#FFFAFA",
    fontSize: 25,
  },
  flatlist: {
    marginBottom: 10,
    padding: 0,
  },
});
