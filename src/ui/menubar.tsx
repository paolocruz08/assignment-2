import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { StyleSheet, View } from "react-native";

export default function MenuBar() {
  return (
    <View style={styles.menuBar}>
      <Ionicons name="home-outline" size={24} color="black" />
      <Ionicons name="search" size={24} color="black" />
      <AntDesign name="plus" size={24} color="black" />
      <Ionicons name="bag" size={24} color="black" />
      <MaterialCommunityIcons name="account-circle" size={24} color="black" />
</View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
