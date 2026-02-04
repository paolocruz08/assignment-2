import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

export default function MenuBar() {
  return (
    <View style={styles.menuBar}>
      <Ionicons name="home-outline" size={24} color="black" />
      <Ionicons name="search" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
