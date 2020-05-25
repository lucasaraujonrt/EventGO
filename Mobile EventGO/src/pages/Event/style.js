import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#285EC4",
    flex: 1,
    flexDirection: "column",
  },
  headerEventImage: {
    marginTop: 40,
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  header: {
    flex: 1,
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconBack: {
    alignSelf: "center",
    marginTop: 15,
  },
  title: {
    fontSize: 40,
    color: "#FFFAFA",
    marginRight: 20,
  },
  eventBody: {
    flexDirection: "column",
  },
  eventDescription: {
    fontSize: 14,
    marginLeft: 20,
    marginRight: 20,
    color: "#FFFAFA",
    textAlign: "justify",
  },
  eventInfo: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCalendar: {
    marginRight: 5,
    marginBottom: 15,
  },
  iconTicket: {
    marginRight: 5,
    marginBottom: 15,
  },
  info: {
    color: "#FFFAFA",
  },
  infoPrice: {
    color: "#FFFAFA",
  },
  button: {
    backgroundColor: "#2E323E",
    fontSize: 16,
    width: 220,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#FFFAFA",
    alignItems: "center",
  },
  textButton: {
    fontSize: 20,

    color: "#FFFAFA",
  },
});
