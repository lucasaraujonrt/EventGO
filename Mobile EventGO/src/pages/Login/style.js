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
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 40,
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginEmail: {
    backgroundColor: "#2E323E",
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    width: "100%",
    color: "#FFFAFA",
    fontSize: 14,
  },
  loginPassword: {
    backgroundColor: "#2E323E",
    height: 40,
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    width: "100%",
    color: "#FFFAFA",
    fontSize: 14,
  },
  button: {
    backgroundColor: "#2E323E",
    borderRadius: 10,
    width: 100,
    height: 30,
    justifyContent: "center",
    marginTop: 20,
  },
  textButton: {
    color: "#FFFAFA",
    textAlign: "center",
  },
  textGoogle: {
    color: "#FFFAFA",
  },
  forgotPassoword: {
    marginTop: 25,
  },
  forgotText: {
    color: "#FFFAFA",
  },
  loginGoogle: {
    flex: 1,
  },
  buttonGoogle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconGoogle: {
    marginRight: 10,
  },
});
