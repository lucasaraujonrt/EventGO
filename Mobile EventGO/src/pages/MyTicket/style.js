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
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  titleTicket: {
    flex: 1,
    color: "#FFFAFA",
    fontSize: 25,
  },
  image: {
    width: 100,
    height: 100,
  },
  events: {
    flex: 4,
  },
  tickerEvent: {
    color: "#FFFAFA",
    fontSize: 18,
  },
  ticket: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 13,
  },
  event: {
    flexDirection: "row",
    backgroundColor: "#0C41A4",
    borderRadius: 10,
    padding: 8,
    paddingLeft: 5,
    paddingBottom: 5,
  },
  calandar: {
    flexDirection: "row",
  },
  iconCalendar: {
    color: "#FFFAFA",
    marginRight: 10,
  },
  date: {
    color: "#FFFAFA",
  },
  typeTicket: {
    flexDirection: "row",
  },
  price: {
    color: "#FFFAFA",
  },
  iconTicket: {
    color: "#FFFAFA",
    marginRight: 10,
  },
});
