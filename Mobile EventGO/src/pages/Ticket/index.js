import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import logoImg from "../../assets/logo/logo.png";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Ticket() {
  const navigation = useNavigation();

  function navigationToHome() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <TouchableOpacity onPress={navigationToHome}>
          <Image source={logoImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.textConfirm}>
        <Text style={styles.text}>Participação confirmada!!</Text>
      </View>
      <View style={styles.textId}>
        <Text style={styles.text}>O ID do seu ingresso é:</Text>
      </View>
    </View>
  );
}
