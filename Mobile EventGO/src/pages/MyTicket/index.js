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
        <TouchableOpacity onPress={() => {}} style={styles.event}>
          <View style={styles.imageEvent}>
            <Image source={MBLabs} style={styles.image} />
          </View>
          <View style={styles.ticket}>
            <Text style={styles.tickerEvent}>MBTalk</Text>
            <View style={styles.calandar}>
              <AntDesign
                name="calendar"
                size={18}
                style={styles.iconCalendar}
              />
              <Text style={styles.date}>21/05/2020 19:00 pm</Text>
            </View>
            <View style={styles.typeTicket}>
              <Entypo name="ticket" size={18} style={styles.iconTicket} />
              <Text style={styles.price}>Gratuito</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
