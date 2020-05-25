import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import logoImg from "../../assets/logo/logo.png";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  function navigationToTicket() {
    navigation.navigate("Ticket");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>
      <View style={styles.login}>
        <TextInput
          keyboardType={"email-address"}
          placeholder={"E-mail"}
          textContentType={"emailAddress"}
          style={styles.loginEmail}
        >
          <AntDesign name="user" size={24} color="#FFFAFA" />
        </TextInput>
      </View>
      <View style={styles.login}>
        <TextInput
          placeholder={"Password"}
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          style={styles.loginPassword}
        >
          <AntDesign name="lock" size={24} color="#FFFAFA" />
        </TextInput>
      </View>
      <View style={{ backgroundColor: "red" }}>
        <TouchableOpacity style={styles.button} onPress={navigationToTicket}>
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginGoogle}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.iconGoogle}>
            <AntDesign name="google" size={24} color="#FFFAFA" />
          </View>
          <View style={styles.textSignIn}>
            <Text style={styles.textGoogle}>Sign In With Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotPassoword}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
