import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import MBTalks from "../../assets//ImgEvents/MBLabs.png";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Event() {
  const navigation = useNavigation();
  function navigateBackToHome() {
    navigation.navigate("Home");
  }
  function navigateToLogin() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerEventImage}>
        <Image source={MBTalks} />
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBackToHome}>
          <AntDesign
            name="left"
            size={24}
            color="#FFFAFA"
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>MBTalk</Text>
        </View>
        <View />
      </View>
      <View style={{ flex: 3 }}>
        <View style={styles.eventBody}>
          <Text style={styles.eventDescription}>
            Nesse MB Talk o Erik falara sobre o Ionic framework! O Ionic é uma
            plataforma que proporciona o desenvolvimento de aplicativos
            híbridos, ou seja, em que o desenvolvedor utiliza linguagens da web
            como HTML, CSS, JavaScript e no final tem apps para Android, iOS,
            Windows Phone e PWA com uma única base de código.
          </Text>
        </View>
        <View style={styles.eventInfo}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.iconCalendar}>
              <AntDesign name="calendar" size={24} color="#FFFAFA" />
            </View>
            <View style={styles.infoCalendar}>
              <Text style={styles.info}>21/05/2020 19:00 pm</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.iconTicket}>
              <Entypo name="ticket" size={24} color="#FFFAFA" />
            </View>
            <View style={styles.infoTicket}>
              <Text style={styles.infoPrice}>Gratuito</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginBottom: 30,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={navigateToLogin}>
            <View style={{}}>
              <Text style={styles.textButton}>Participar!!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
