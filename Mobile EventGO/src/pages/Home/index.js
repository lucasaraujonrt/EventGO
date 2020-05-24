import React from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import MBLabs from "../../assets/ImgEvents/MBLabs.png";
import Mescla from "../../assets/ImgEvents/Mescla.png";
import IFood from "../../assets/ImgEvents/IfoodMeetsUps.png";
import styles from "./styles";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navigateToEvent() {
    navigation.navigate("Event");
  }
  function navigateToMyTicket() {
    navigation.navigate("MyTicket");
  }
  function navigateToLogin() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToLogin}>
          <AntDesign
            name="user"
            size={24}
            color="#FFFAFA"
            style={styles.iconUser}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.inputSearch}
          placeholder="Pesquisar"
          placeholderTextColor="#FFFAFA"
        />
        <TouchableOpacity onPress={navigateToMyTicket}>
          <Entypo
            name="ticket"
            size={23.36}
            color="#FFFAFA"
            style={styles.iconTicket}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleOff}>
        <Text style={styles.titleEvent}>Todos os eventos presenciais</Text>
      </View>
      <View style={{ flex: 2 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          style={styles.flatlist}
          keyExtractor={(events) => String(events)}
          renderItem={() => (
            <View style={styles.events}>
              <TouchableOpacity onPress={navigateToEvent}>
                <Image source={MBLabs} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image source={Mescla} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.titleOff}>
        <Text style={styles.titleEvent}>Todos online</Text>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          horizontal={true}
          data={[1, 2, 3, 4]}
          style={styles.flatlist}
          keyExtractor={(events) => String(events)}
          renderItem={() => (
            <View style={styles.events}>
              <TouchableOpacity onPress={() => {}}>
                <Image source={IFood} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}
