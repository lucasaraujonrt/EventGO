import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import MBLabs from "../../assets/ImgEvents/MBLabs.png";
import styles from "./style";

export default function MyTicket() {
  const navigation = useNavigation();
  function navigateBackEvent() {
    navigation.navigate("Home");
  }
  function navigateToEvent() {
    navigation.navigate("Event");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBackEvent}>
          <AntDesign
            name="left"
            size={24}
            color="#FFFAFA"
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <AntDesign
            name="user"
            size={24}
            color="#FFFAFA"
            style={styles.iconUser}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleTicket}>Meus Ingresos</Text>
      </View>
      <View style={styles.events}>
        <View style={styles.event}>
          <TouchableOpacity onPress={navigateToEvent}>
            <View style={styles.imageEvent}>
              <Image source={MBLabs} />
            </View>
            <Text style={styles.tickerEvent}>MbTalks</Text>
            <AntDesign name="calendar" size={24} color="#FFFAFA" />
            <Text style={styles.date}>21/05/2020 19:00 pm</Text>
            <Entypo
              name="ticket"
              size={23.36}
              color="#FFFAFA"
              style={styles.iconTicket}
            />
            <Text style={styles.price}>Gratuito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
